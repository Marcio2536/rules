const $ = new Env('BoxJs')

// 為 eval 準備的上下文環境
const $eval_env = {}

$.version = '0.7.71'
$.versionType = 'beta'

// 發出的請求需要需要 Surge、QuanX 的 rewrite
$.isNeedRewrite = true

/**
 * ===================================
 * 持久化屬性: BoxJs 自有的資料結構
 * ===================================
 */

// 存儲`使用者偏好`
$.KEY_usercfgs = 'chavy_boxjs_userCfgs'
// 存儲`應用會話`
$.KEY_sessions = 'chavy_boxjs_sessions'
// 存儲`頁面緩存`
$.KEY_web_cache = 'chavy_boxjs_web_cache'
// 存儲`應用訂閱緩存`
$.KEY_app_subCaches = 'chavy_boxjs_app_subCaches'
// 存儲`全域備份`
$.KEY_globalBaks = 'chavy_boxjs_globalBaks'
// 存儲`當前會話` (配合切換會話, 記錄當前切換到哪個會話)
$.KEY_cursessions = 'chavy_boxjs_cur_sessions'

/**
 * ===================================
 * 持久化屬性: BoxJs 公開的資料結構
 * ===================================
 */

// 存儲使用者訪問`BoxJs`時使用的功能變數名稱
$.KEY_boxjs_host = 'boxjs_host'

// 請求回應體 (返回至頁面的結果)
$.json = $.name // `介面`類請求的回應體
$.html = $.name // `頁面`類請求的回應體

// 頁面源碼位址
$.web = `https://raw.githubusercontent.com/Marcio2536/rules/master/box.html?_=${new Date().getTime()}`
// 版本說明地址 (Release Note)
https://raw.githubusercontent.com/Marcio2536/rules/master/box.html
$.ver = `https://cdn.jsdelivr.net/gh/chavyleung/scripts@${$.version}/box/release/box.release.tf.json`

!(async () => {
  // 勿擾模式
  $.isMute = [true, 'true'].includes($.getdata('@chavy_boxjs_userCfgs.isMute'))

  // 請求路徑
  $.path = getPath($request.url)

  // 請求類型: GET
  $.isGet = $request.method === 'GET'
  // 請求類型: POST
  $.isPost = $request.method === 'POST'
  // 請求類型: OPTIONS
  $.isOptions = $request.method === 'OPTIONS'

  // 請求類型: page、api、query
  $.type = 'page'
  // 查詢請求: /query/xxx
  $.isQuery = $.isGet && /^\/query\/.*?/.test($.path)
  // 介面請求: /api/xxx
  $.isApi = $.isPost && /^\/api\/.*?/.test($.path)
  // 頁面請求: /xxx
  $.isPage = $.isGet && !$.isQuery && !$.isApi

  // 升級使用者資料
  upgradeUserData()

  // 處理預檢請求
  if ($.isOptions) {
    $.type = 'options'
    await handleOptions()
  }
  // 處理`頁面`請求
  else if ($.isPage) {
    $.type = 'page'
    await handlePage()
  }
  // 處理`查詢`請求
  else if ($.isQuery) {
    $.type = 'query'
    await handleQuery()
  }
  // 處理`介面`請求
  else if ($.isApi) {
    $.type = 'api'
    await handleApi()
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => doneBox())

/**
 * http://boxjs.com/ => `http://boxjs.com`
 * http://boxjs.com/app/jd => `http://boxjs.com`
 */
function getHost(url) {
  return url.slice(0, url.indexOf('/', 8))
}

/**
 * http://boxjs.com/ => ``
 * http://boxjs.com/api/getdata => `/api/getdata`
 */
function getPath(url) {
  // 如果以`/`結尾, 去掉最後一個`/`
  const end = url.lastIndexOf('/') === url.length - 1 ? -1 : undefined
  // slice第二個參數傳 undefined 會直接截到最後
  // indexOf第二個參數用來跳過前面的 "https://"
  return url.slice(url.indexOf('/', 8), end)
}

/**
 * ===================================
 * 處理前端請求
 * ===================================
 */

/**
 * 處理`頁面`請求
 */
async function handlePage() {
  // 獲取 BoxJs 資料
  const boxdata = getBoxData()
  boxdata.syscfgs.isDebugMode = false

  // 調試模式: 是否每次都獲取新的頁面
  const isDebugWeb = [true, 'true'].includes($.getdata('@chavy_boxjs_userCfgs.isDebugWeb'))
  const debugger_web = $.getdata('@chavy_boxjs_userCfgs.debugger_web')
  const cache = $.getjson($.KEY_web_cache, null)

  // 如果沒有開啟調試模式，且當前版本與緩存版本一致，且直接取緩存
  if (!isDebugWeb && cache && cache.version === $.version) {
    $.html = cache.cache
  }
  // 如果開啟了調試模式，並指定了 `debugger_web` 則從指定的位址獲取頁面
  else {
    if (isDebugWeb && debugger_web) {
      // 調試地址後面拼時間綴, 避免 GET 緩存
      const isQueryUrl = debugger_web.includes('?')
      $.web = `${debugger_web}${isQueryUrl ? '&' : '?'}_=${new Date().getTime()}`
      boxdata.syscfgs.isDebugMode = true
      console.log(`[WARN] 調試模式: $.web = : ${$.web}`)
    }
    // 如果調用這個方法來獲取緩存, 且標記為`非調試模式`
    const getcache = () => {
      console.log(`[ERROR] 調試模式: 正在使用緩存的頁面!`)
      boxdata.syscfgs.isDebugMode = false
      return $.getjson($.KEY_web_cache).cache
    }
    await $.http.get($.web).then(
      (resp) => {
        if (/<title>BoxJs<\/title>/.test(resp.body)) {
          // 返回頁面源碼, 並馬上存儲到持久化倉庫
          $.html = resp.body
          const cache = { version: $.version, cache: $.html }
          $.setjson(cache, $.KEY_web_cache)
        } else {
          // 如果返回的頁面源碼不是預期的, 則從持久化倉庫中獲取
          $.html = getcache()
        }
      },
      // 如果獲取頁面源碼失敗, 則從持久化倉庫中獲取
      () => ($.html = getcache())
    )
  }
  // 根據偏好設置, 替換首屏顏色 (如果是`auto`則交由頁面自我調整)
  const theme = $.getdata('@chavy_boxjs_userCfgs.theme')
  if (theme === 'light') {
    $.html = $.html.replace('#121212', '#fff')
  } else if (theme === 'dark') {
    $.html = $.html.replace('#fff', '#121212')
  }
  /**
   * 後端渲染數據, 感謝 https://t.me/eslint 提供幫助
   *
   * 如果直接渲染到 box: null 會出現雙向綁定問題
   * 所以先渲染到 `boxServerData: null` 再由前端 `this.box = this.boxServerData` 實現雙向綁定
   */
  $.html = $.html.replace('boxServerData: null', 'boxServerData:' + JSON.stringify(boxdata))

  // 調試模式支援 vue Devtools (只有在同時開啟調試模式和指定了調試位址才生效)
  // vue.min.js 生效時, 會導致 @click="window.open()" 報 "window" is not defined 錯誤
  if (isDebugWeb && debugger_web) {
    $.html = $.html.replace('vue.min.js', 'vue.js')
  }
}

/**
 * 處理`查詢`請求
 */
async function handleQuery() {
  const [, query] = $.path.split('/query')
  if (/^\/boxdata/.test(query)) {
    $.json = getBoxData()
  } else if (/^\/baks/.test(query)) {
    const globalbaks = getGlobalBaks(true)
    $.json = { globalbaks }
  } else if (/^\/versions$/.test(query)) {
    await getVersions(true)
  }
}

/**
 * 處理 API 請求
 */
async function handleApi() {
  const [, api] = $.path.split('/api')

  if (api === '/save') {
    await apiSave()
  } else if (api === '/addAppSub') {
    await apiAddAppSub()
  } else if (api === '/reloadAppSub') {
    await apiReloadAppSub()
  } else if (api === '/delGlobalBak') {
    await apiDelGlobalBak()
  } else if (api === '/updateGlobalBak') {
    await apiUpdateGlobalBak()
  } else if (api === '/saveGlobalBak') {
    await apiSaveGlobalBak()
  } else if (api === '/impGlobalBak') {
    await apiImpGlobalBak()
  } else if (api === '/revertGlobalBak') {
    await apiRevertGlobalBak()
  } else if (api === '/runScript') {
    await apiRunScript()
  }
}

async function handleOptions() {}

/**
 * ===================================
 * 獲取基礎資料
 * ===================================
 */

function getBoxData() {
  const datas = {}
  const usercfgs = getUserCfgs()
  const sessions = getAppSessions()
  const curSessions = getCurSessions()
  const sysapps = getSystemApps()
  const syscfgs = getSystemCfgs()
  const appSubCaches = getAppSubCaches()
  const globalbaks = getGlobalBaks()

  // 把 `內置應用`和`訂閱應用` 裡需要持久化屬性放到`datas`
  sysapps.forEach((app) => Object.assign(datas, getAppDatas(app)))
  usercfgs.appsubs.forEach((sub) => {
    const subcache = appSubCaches[sub.url]
    if (subcache && subcache.apps && Array.isArray(subcache.apps)) {
      subcache.apps.forEach((app) => Object.assign(datas, getAppDatas(app)))
    }
  })

  const box = { datas, usercfgs, sessions, curSessions, sysapps, syscfgs, appSubCaches, globalbaks }
  return box
}

/**
 * 獲取系統組態
 */
function getSystemCfgs() {
  // prettier-ignore
  return {
    env: $.isLoon() ? 'Loon' : $.isQuanX() ? 'QuanX' : $.isSurge() ? 'Surge' : 'Node',
    version: $.version,
    versionType: $.versionType,
    envs: [
      { id: 'Surge', icons: ['https://raw.githubusercontent.com/Orz-3/mini/none/surge.png', 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/surge.png'] },
      { id: 'QuanX', icons: ['https://raw.githubusercontent.com/Orz-3/mini/none/quanX.png', 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/quantumultx.png'] },
      { id: 'Loon', icons: ['https://raw.githubusercontent.com/Orz-3/mini/none/loon.png', 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/loon.png'] }
    ],
    chavy: { id: 'ChavyLeung', icon: 'https://avatars3.githubusercontent.com/u/29748519', repo: 'https://github.com/chavyleung/scripts' },
    senku: { id: 'GideonSenku', icon: 'https://avatars1.githubusercontent.com/u/39037656', repo: 'https://github.com/GideonSenku' },
    id77: { id: 'id77', icon: 'https://avatars0.githubusercontent.com/u/9592236', repo: 'https://github.com/id77' },
    orz3: { id: 'Orz-3', icon: 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/Orz-3.png', repo: 'https://github.com/Orz-3/' },
    boxjs: { id: 'BoxJs', show: false, icon: 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/box.png', icons: ['https://raw.githubusercontent.com/Orz-3/mini/master/Alpha/box.png', 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/box.png'], repo: 'https://github.com/chavyleung/scripts' },
    defaultIcons: ['https://raw.githubusercontent.com/Orz-3/mini/master/Alpha/appstore.png', 'https://raw.githubusercontent.com/Orz-3/mini/master/Color/appstore.png']
  }
}

/**
 * 獲取內置應用
 */
function getSystemApps() {
  // prettier-ignore
  const sysapps = [
    {
      id: 'BoxSetting',
      name: '偏好設置',
      descs: ['可設置 http-api 位址 & 超時時間 (Surge TF)', '可設置明暗兩種主題下的主色調'],
      keys: [
        '@chavy_boxjs_userCfgs.httpapi', 
        '@chavy_boxjs_userCfgs.bgimg', 
        '@chavy_boxjs_userCfgs.color_dark_primary', 
        '@chavy_boxjs_userCfgs.color_light_primary'
      ],
      settings: [
        { id: '@chavy_boxjs_userCfgs.httpapis', name: 'HTTP-API (Surge TF)', val: '', type: 'textarea', placeholder: ',examplekey@127.0.0.1:6166', autoGrow: true, rows: 2, persistentHint:true, desc: '示例: ,examplekey@127.0.0.1:6166! 注意: 以逗號開頭, 逗號分隔多個位址, 可加回車' },
        { id: '@chavy_boxjs_userCfgs.httpapi_timeout', name: 'HTTP-API Timeout (Surge TF)', val: 20, type: 'number', persistentHint:true, desc: '如果腳本作者指定了超時時間, 會優先使用腳本指定的超時時間.' },
        { id: '@chavy_boxjs_userCfgs.bgimgs', name: '背景圖片清單', val: '無,\n跟隨系統,跟隨系統\nlight,http://api.btstu.cn/sjbz/zsy.php\ndark,https://uploadbeta.com/api/pictures/random\n妹子,http://api.btstu.cn/sjbz/zsy.php', type: 'textarea', placeholder: '無,{回車} 跟隨系統,跟隨系統{回車} light,圖片位址{回車} dark,圖片位址{回車} 妹子,圖片位址', persistentHint:true, autoGrow: true, rows: 2, desc: '逗號分隔名字和連結, 回車分隔多個位址' },
        { id: '@chavy_boxjs_userCfgs.bgimg', name: '背景圖片', val: '', type: 'text', placeholder: 'http://api.btstu.cn/sjbz/zsy.php', persistentHint:true, desc: '輸入背景圖示的線上連結' },
        { id: '@chavy_boxjs_userCfgs.color_light_primary', name: '明亮色調', canvas: true, val: '#F7BB0E', type: 'colorpicker', desc: '' },
        { id: '@chavy_boxjs_userCfgs.color_dark_primary', name: '暗黑色調', canvas: true, val: '#2196F3', type: 'colorpicker', desc: '' }
      ],
      author: '@chavyleung',
      repo: 'https://github.com/chavyleung/scripts/blob/master/box/switcher/box.switcher.js',
      icons: [
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSetting.mini.png', 
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSetting.png'
      ]
    },
    {
      id: 'BoxSwitcher',
      name: '會話切換',
      desc: '打開靜默運行後, 切換會話將不再發出系統通知 \n注: 不影響日誌記錄',
      keys: [],
      settings: [{ id: 'CFG_BoxSwitcher_isSilent', name: '靜默運行', val: false, type: 'boolean', desc: '切換會話時不發出系統通知!' }],
      author: '@chavyleung',
      repo: 'https://github.com/chavyleung/scripts/blob/master/box/switcher/box.switcher.js',
      icons: [
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSwitcher.mini.png', 
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSwitcher.png'
      ],
      script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/switcher/box.switcher.js'
    }
  ]
  return sysapps
}

/**
 * 獲取使用者配置
 */
function getUserCfgs() {
  const defcfgs = { favapps: [], appsubs: [], isPinedSearchBar: true, httpapi: 'examplekey@127.0.0.1:6166' }
  const usercfgs = Object.assign(defcfgs, $.getjson($.KEY_usercfgs, {}))

  // 處理異常資料：刪除所有為 null 的訂閱
  if (usercfgs.appsubs.includes(null)) {
    usercfgs.appsubs = usercfgs.appsubs.filter((sub) => sub)
    $.setjson(usercfgs, $.KEY_usercfgs)
  }

  return usercfgs
}

/**
 * 獲取`應用訂閱`緩存
 */
function getAppSubCaches() {
  return $.getjson($.KEY_app_subCaches, {})
}

/**
 * 獲取全域備份
 * 預設只獲取備份的基礎資訊, 如: id, name……
 *
 * @param {boolean} isComplete 是否獲取完整的備份資料
 */
function getGlobalBaks(isComplete = false) {
  let globalbaks = $.getjson($.KEY_globalBaks, [])

  // 處理異常資料：刪除所有為 null 的備份
  if (globalbaks.includes(null)) {
    globalbaks = globalbaks.filter((bak) => bak)
    $.setjson(globalbaks, $.KEY_globalBaks)
  }

  if (isComplete) {
    return globalbaks
  } else {
    // isComplete === false: 不返回備份體
    globalbaks.forEach((bak) => delete bak.bak)
    return globalbaks
  }
}
/**
 * 獲取版本清單
 */
function getVersions() {
  return $.http.get($.ver).then(
    (resp) => {
      try {
        $.json = $.toObj(resp.body)
      } catch {
        $.json = {}
      }
    },
    () => ($.json = {})
  )
}

/**
 * 獲取用戶應用
 */
function getUserApps() {
  // TODO 用戶可在 BoxJs 中自訂應用, 格式與應用訂閱一致
  return []
}

/**
 * 獲取應用會話
 */
function getAppSessions() {
  return $.getjson($.KEY_sessions, [])
}

/**
 * 獲取當前切換到哪個會話
 */
function getCurSessions() {
  return $.getjson($.KEY_cursessions, {})
}

/**
 * ===================================
 * 介面類別函數
 * ===================================
 */

function getAppDatas(app) {
  const datas = {}
  const nulls = [null, undefined, 'null', 'undefined']
  if (app.keys && Array.isArray(app.keys)) {
    app.keys.forEach((key) => {
      const val = $.getdata(key)
      datas[key] = nulls.includes(val) ? null : val
    })
  }
  if (app.settings && Array.isArray(app.settings)) {
    app.settings.forEach((setting) => {
      const key = setting.id
      const val = $.getdata(key)
      datas[key] = nulls.includes(val) ? null : val
    })
  }
  return datas
}

async function apiSave() {
  const data = $.toObj($request.body)
  if (Array.isArray(data)) {
    data.forEach((dat) => $.setdata(dat.val, dat.key))
  } else {
    $.setdata(data.val, data.key)
  }
  $.json = getBoxData()
}

async function apiAddAppSub() {
  const sub = $.toObj($request.body)
  // 添加訂閱
  const usercfgs = getUserCfgs()
  usercfgs.appsubs.push(sub)
  $.setjson(usercfgs, $.KEY_usercfgs)
  // 載入訂閱緩存
  await reloadAppSubCache(sub.url)
  $.json = getBoxData()
}

async function apiReloadAppSub() {
  const sub = $.toObj($request.body)
  if (sub) {
    await reloadAppSubCache(sub.url)
  } else {
    await reloadAppSubCaches()
  }
  $.json = getBoxData()
}

async function apiDelGlobalBak() {
  const bak = $.toObj($request.body)
  const globalbaks = $.getjson($.KEY_globalBaks, [])
  const bakIdx = globalbaks.findIndex((b) => b.id === bak.id)
  if (bakIdx > -1) {
    globalbaks.splice(bakIdx, 1)
    $.setjson(globalbaks, $.KEY_globalBaks)
  }
  $.json = getBoxData()
}

async function apiUpdateGlobalBak() {
  const { id: bakId, name: bakName } = $.toObj($request.body)
  const globalbaks = $.getjson($.KEY_globalBaks, [])
  const bak = globalbaks.find((b) => b.id === bakId)
  if (bak) {
    bak.name = bakName
    $.setjson(globalbaks, $.KEY_globalBaks)
  }
  $.json = { globalbaks }
}

async function apiRevertGlobalBak() {
  const { id: bakId } = $.toObj($request.body)
  const globalbaks = $.getjson($.KEY_globalBaks, [])
  const bak = globalbaks.find((b) => b.id === bakId)
  if (bak && bak.bak) {
    const {
      chavy_boxjs_sysCfgs,
      chavy_boxjs_sysApps,
      chavy_boxjs_sessions,
      chavy_boxjs_userCfgs,
      chavy_boxjs_cur_sessions,
      chavy_boxjs_app_subCaches,
      ...datas
    } = bak.bak
    $.setdata(JSON.stringify(chavy_boxjs_sessions), $.KEY_sessions)
    $.setdata(JSON.stringify(chavy_boxjs_userCfgs), $.KEY_usercfgs)
    $.setdata(JSON.stringify(chavy_boxjs_cur_sessions), $.KEY_cursessions)
    $.setdata(JSON.stringify(chavy_boxjs_app_subCaches), $.KEY_app_subCaches)
    const isNull = (val) => [undefined, null, 'null', 'undefined', ''].includes(val)
    Object.keys(datas).forEach((datkey) => $.setdata(isNull(datas[datkey]) ? '' : `${datas[datkey]}`, datkey))
  }
  const boxdata = getBoxData()
  boxdata.globalbaks = globalbaks
  $.json = boxdata
}

async function apiSaveGlobalBak() {
  let globalbaks = $.getjson($.KEY_globalBaks, [])
  const bak = $.toObj($request.body)
  const box = getBoxData()
  const bakdata = {}
  bakdata['chavy_boxjs_userCfgs'] = box.usercfgs
  bakdata['chavy_boxjs_sessions'] = box.sessions
  bakdata['chavy_boxjs_cur_sessions'] = box.curSessions
  bakdata['chavy_boxjs_app_subCaches'] = box.appSubCaches
  Object.assign(bakdata, box.datas)
  bak.bak = bakdata
  globalbaks.push(bak)
  if (!$.setjson(globalbaks, $.KEY_globalBaks)) {
    globalbaks = $.getjson($.KEY_globalBaks, [])
  }
  $.json = { globalbaks }
}

async function apiImpGlobalBak() {
  let globalbaks = $.getjson($.KEY_globalBaks, [])
  const bak = $.toObj($request.body)
  globalbaks.push(bak)
  $.setjson(globalbaks, $.KEY_globalBaks)
  $.json = { globalbaks }
}

async function apiRunScript() {
  // 取消勿擾模式
  $.isMute = false
  const opts = $.toObj($request.body)
  const httpapi = $.getdata('@chavy_boxjs_userCfgs.httpapi')
  const ishttpapi = /.*?@.*?:[0-9]+/.test(httpapi)
  let script_text = null
  if (opts.isRemote) {
    await $.getScript(opts.url).then((script) => (script_text = script))
  } else {
    script_text = opts.script
  }
  if ($.isSurge() && ishttpapi) {
    const runOpts = { timeout: opts.timeout }
    await $.runScript(script_text, runOpts).then((resp) => ($.json = JSON.parse(resp)))
  } else {
    await new Promise((resolve) => {
      $eval_env.resolve = resolve
      // 避免被執行腳本誤認為是 rewrite 環境
      // 所以需要 `$request = undefined`
      $eval_env.request = $request
      $request = undefined
      // 重寫 console.log, 把日誌記錄到 $.cached_logs
      $.cached_logs = []
      console.cloned_log = console.log
      console.log = (l) => {
        console.cloned_log(l)
        $.cached_logs.push(l)
      }
      // 重寫腳本內的 $done, 調用 $done() 即是調用 $eval_env.resolve()
      script_text = script_text.replace(/\$done/g, '$eval_env.resolve')
      script_text = script_text.replace(/\$\.done/g, '$eval_env.resolve')
      try {
        eval(script_text)
      } catch (e) {
        $.cached_logs.push(e)
        resolve()
      }
    })
    // 還原 console.log
    console.log = console.cloned_log
    // 還原 $request
    $request = $eval_env.request
    // 返回資料
    $.json = {
      result: '',
      output: $.cached_logs.join('\n')
    }
  }
}

/**
 * ===================================
 * 工具類函數
 * ===================================
 */

function reloadAppSubCache(url) {
  // 地址後面拼時間綴, 避免 GET 緩存
  const requrl = `${url}${url.includes('?') ? '&' : '?'}_=${new Date().getTime()}`
  return $.http.get(requrl).then((resp) => {
    try {
      const subcaches = getAppSubCaches()
      subcaches[url] = $.toObj(resp.body)
      subcaches[url].updateTime = new Date()
      $.setjson(subcaches, $.KEY_app_subCaches)
      $.log(`更新訂閱, 成功! ${url}`)
    } catch (e) {
      $.logErr(e)
      $.log(`更新訂閱, 失敗! ${url}`)
    }
  })
}

async function reloadAppSubCaches() {
  $.msg($.name, '更新訂閱: 開始!')
  const reloadActs = []
  const usercfgs = getUserCfgs()
  usercfgs.appsubs.forEach((sub) => {
    reloadActs.push(reloadAppSubCache(sub.url))
  })
  await Promise.all(reloadActs)
  $.log(`全部訂閱, 完成!`)
  const endTime = new Date().getTime()
  const costTime = (endTime - $.startTime) / 1000
  $.msg($.name, `更新訂閱: 完成! 🕛 ${costTime} 秒`)
}

function upgradeUserData() {
  const usercfgs = getUserCfgs()
  // 如果存在`usercfgs.appsubCaches`則需要升級資料
  const isNeedUpgrade = !!usercfgs.appsubCaches
  if (isNeedUpgrade) {
    // 遷移訂閱緩存至獨立的持久化空間
    $.setjson(usercfgs.appsubCaches, $.KEY_app_subCaches)
    // 移除用戶偏好中的訂閱緩存
    delete usercfgs.appsubCaches
    usercfgs.appsubs.forEach((sub) => {
      delete sub._raw
      delete sub.apps
      delete sub.isErr
      delete sub.updateTime
    })
  }
  if (isNeedUpgrade) {
    $.setjson(usercfgs, $.KEY_usercfgs)
  }
}

/**
 * ===================================
 * 結束類函數
 * ===================================
 */
function doneBox() {
  // 記錄當前使用哪個功能變數名稱訪問
  $.setdata(getHost($request.url), $.KEY_boxjs_host)
  if ($.isOptions) doneOptions()
  else if ($.isPage) donePage()
  else if ($.isQuery) doneQuery()
  else if ($.isApi) doneApi()
  else $.done()
}

function getBaseDoneHeaders(mixHeaders = {}) {
  return Object.assign(
    {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    mixHeaders
  )
}

function getHtmlDoneHeaders() {
  return getBaseDoneHeaders({
    'Content-Type': 'text/html;charset=UTF-8'
  })
}
function getJsonDoneHeaders() {
  return getBaseDoneHeaders({
    'Content-Type': 'text/json; charset=utf-8'
  })
}

function doneOptions() {
  const headers = getBaseDoneHeaders()
  if ($.isSurge() || $.isLoon()) {
    $.done({ response: { headers } })
  } else if ($.isQuanX()) {
    $.done({ headers })
  }
}

function donePage() {
  const headers = getHtmlDoneHeaders()
  if ($.isSurge() || $.isLoon()) {
    $.done({ response: { status: 200, headers, body: $.html } })
  } else if ($.isQuanX()) {
    $.done({ status: 'HTTP/1.1 200', headers, body: $.html })
  }
}

function doneQuery() {
  $.json = $.toStr($.json)
  const headers = getJsonDoneHeaders()
  if ($.isSurge() || $.isLoon()) {
    $.done({ response: { status: 200, headers, body: $.json } })
  } else if ($.isQuanX()) {
    $.done({ status: 'HTTP/1.1 200', headers, body: $.json })
  }
}

function doneApi() {
  $.json = $.toStr($.json)
  const headers = getJsonDoneHeaders()
  if ($.isSurge() || $.isLoon()) {
    $.done({ response: { status: 200, headers, body: $.json } })
  } else if ($.isQuanX()) {
    $.done({ status: 'HTTP/1.1 200', headers, body: $.json })
  }
}

/**
 * GistBox by https://github.com/Peng-YM
 */
// prettier-ignore
function GistBox(e){const t=function(e,t={}){const{isQX:s,isLoon:n,isSurge:o}=function(){const e="undefined"!=typeof $task,t="undefined"!=typeof $loon,s="undefined"!=typeof $httpClient&&!this.isLoon,n="function"==typeof require&&"undefined"!=typeof $jsbox;return{isQX:e,isLoon:t,isSurge:s,isNode:"function"==typeof require&&!n,isJSBox:n}}(),r={};return["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"].forEach(i=>r[i.toLowerCase()]=(r=>(function(r,i){(i="string"==typeof i?{url:i}:i).url=e?e+i.url:i.url;const a=(i={...t,...i}).timeout,u={onRequest:()=>{},onResponse:e=>e,onTimeout:()=>{},...i.events};let c,d;u.onRequest(r,i),c=s?$task.fetch({method:r,...i}):new Promise((e,t)=>{(o||n?$httpClient:require("request"))[r.toLowerCase()](i,(s,n,o)=>{s?t(s):e({statusCode:n.status||n.statusCode,headers:n.headers,body:o})})});const f=a?new Promise((e,t)=>{d=setTimeout(()=>(u.onTimeout(),t(`${r} URL: ${i.url} exceeds the timeout ${a} ms`)),a)}):null;return(f?Promise.race([f,c]).then(e=>(clearTimeout(d),e)):c).then(e=>u.onResponse(e))})(i,r))),r}("https://api.github.com",{headers:{Authorization:`token ${e}`,"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.141 Safari/537.36"},events:{onResponse:e=>String(e.statusCode).startsWith("4")?Promise.reject(`ERROR: ${JSON.parse(e.body).message}`):e}}),s=e=>`boxjs.bak.${e}.json`,n=e=>e.match(/boxjs\.bak\.(\d+)\.json/)[1];return new class{async findDatabase(){return t.get("/gists").then(e=>{const t=JSON.parse(e.body);for(let e of t)if("BoxJs Gist"===e.description)return e.id;return-1})}async createDatabase(e){e instanceof Array||(e=[e]);const n={};return e.forEach(e=>{n[s(e.time)]={content:e.content}}),t.post({url:"/gists",body:JSON.stringify({description:"BoxJs Gist",public:!1,files:n})}).then(e=>JSON.parse(e.body).id)}async deleteDatabase(e){return t.delete(`/gists/${e}`)}async getBackups(e){const s=await t.get(`/gists/${e}`).then(e=>JSON.parse(e.body)),{files:o}=s,r=[];for(let e of Object.keys(o))r.push({time:n(e),url:o[e].raw_url});return r}async addBackups(e,t){t instanceof Array||(t=[t]);const n={};return t.forEach(e=>n[s(e.time)]={content:e.content}),this.updateBackups(e,n)}async deleteBackups(e,t){t instanceof Array||(t=[t]);const n={};return t.forEach(e=>n[s(e)]={}),this.updateBackups(e,n)}async updateBackups(e,s){return t.patch({url:`/gists/${e}`,body:JSON.stringify({files:s})})}}}

/**
 * EnvJs
 */
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t)))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t||!this.isLoon()&&this.isSurge())return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

