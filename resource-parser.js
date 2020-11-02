/** 
----------------------------------------------------------
🤖 主要功能: 
❶ 將其它格式的伺服器訂閱解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式
☑︎ 支援 𝗩𝗺𝗲𝘀𝘀/𝗦𝗦(𝗥/𝗗)/𝗛𝗧𝗧𝗣(𝗦)/𝗧𝗿𝗼𝗷𝗮𝗻/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧 格式
☑︎ 提供說明 1⃣️ 中的可選個性化參數(篩選、重命名 等)
❷ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(重寫) & 𝗳𝗶𝗹𝘁𝗲𝗿(分流) 的 轉換 & 篩選 
☑︎ 用於禁用遠端參照中某(幾)項 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲/𝗳𝗶𝗹𝘁𝗲𝗿
☑︎ 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 類型規則 𝗹𝗶𝘀𝘁 與 模組 𝐦𝐨𝐝𝐮𝐥𝐞 的解析使用
----------------------------------------------------------
0️⃣ ⟦原始連結⟧ 後加 "#" 使用, 不同參數用 "&" 連接: 
⚠️ ☞ 𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐬𝐮𝐛.𝐜𝐨𝐦#𝙚𝙢𝙤𝙟𝙞=1&𝙩𝙛𝙤=1&𝙞𝙣=香港+臺灣
❖ 本地資源片段引用, 請將參數 "#𝗶𝗻=𝘅𝘅𝘅." 填入文件第 ① 行 ❖
❖ 🚦 支援中文, "操作" 以下特殊字元時請先替換 🚦
  ∎ "+"⇒"%2B", 空格⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\."

1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 節點⟧ ➠ 參數說明:
⦿ 𝗶𝗻𝗳𝗼=1, 開啟通知提示機場 ✈️ 流量資訊(如有提供);
⦿ 𝗲𝗺𝗼𝗷𝗶=1(國行設備用2)/-1, 添加/刪除節點名內地區旗幟;
⦿ 𝘂𝗱𝗽=1/-1, 𝘁𝗳𝗼=1/-1, 分別強制開啟(關閉) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
⦿ 𝘁𝗹𝘀13=1, 𝗰𝗲𝗿𝘁=1, 分別開啟 𝐭𝐥𝐬1.3 及 𝐭𝐥𝐬 證書驗證(默認關閉);
⦿ 𝗶𝗻, 𝗼𝘂𝘁, 𝗿𝗲𝗴𝗲𝘅 分別為 保留、刪除、正則篩選 節點;
  ❖ 𝗶𝗻, 𝗼𝘂𝘁 中多參數(邏輯"或")用 "+", 邏輯"與"用 "." 表示;
  ❖ 𝗿𝗲𝗴𝗲𝘅 會對節點的完整資訊進行匹配(類型、埠、加密等);
  ❖ 示範: "𝐢𝐧=香港.0\.2倍率+臺灣&𝐨𝐮𝐭=香港%20𝐁𝐆𝐏&𝐫𝐞𝐠𝐞𝐱=(?𝐢)𝐢𝐩𝐥𝐜"
⦿ 𝗿𝗲𝗻𝗮𝗺𝗲 重命名, "舊名@新名", "首碼@", "@尾碼", 用 "+" 連接多個參數;
  ❖ 刪除欄位: "欄位1.欄位2☠️", 想刪除 "." 時用 "\." 替代
  ❖ 示範: "𝐫𝐞𝐧𝐚𝐦𝐞=香港@𝐇𝐊+[𝐒𝐒]@+@[1𝐗]+流量.0\.2☠️"
  ❖ 預設 emoji 先生效, 如想調換順序, 請用 𝗿𝗿𝗻𝗮𝗺𝗲 參數
⦿ 𝗱𝗲𝗹𝗿𝗲𝗴, 利用規則運算式來刪除 "節點名" 中的欄位(⚠️ 慎用)
⦿ 𝗿𝗲𝗽𝗹𝗮𝗰𝗲 參數, 正則替換節點中內容, 可用於重命名/更改加密方式等
  ❖ 𝗿𝗲𝗽𝗹𝗮𝗰𝗲=𝗿𝗲𝗴𝗲𝘅1@𝘀𝘁𝗿1+𝗿𝗲𝗴𝗲𝘅2@𝘀𝘁𝗿2
  ❖ 𝗿𝗲𝗽𝗹𝗮𝗰𝗲=𝗿𝗲𝗴𝗲𝘅1@ 則等效於 𝗱𝗲𝗹𝗿𝗲𝗴 參數
⦿ 𝘀𝗼𝗿𝘁=1/-1/x/指定規則, 分別按節點名 正/逆/隨機/指定規則 排序
  ❖ 指定規則是規則運算式或簡單關鍵字, 用"<" 或 ">" 連接
  ❖ 𝘀𝗼𝗿𝘁=🇭🇰>🇸🇬>🇯🇵>🇺🇸 , 靠前排序
  ❖ 𝘀𝗼𝗿𝘁=IEPL<IPLC<BGP , 靠後排序
⦿ ⟦進階參數⟧: 𝘀𝗳𝗶𝗹𝘁𝗲𝗿/𝘀𝗿𝗲𝗻𝗮𝗺𝗲, 傳入一段 base64 編碼的腳本, 可用於過濾/重命名訂閱節點
  ❖ 說明: https://github.com/KOP-XIAO/QuantumultX/pull/9

2⃣️ ⟦𝐫𝐞𝐰𝐫𝐢𝐭𝐞 重寫⟧/⟦𝐟𝐢𝐥𝐭𝐞𝐫 分流⟧ ➠ 參數說明:
⦿ 𝗶𝗻, 𝗼𝘂𝘁, 根據關鍵字 保留/禁用 相關分流、重寫規則;
⦿ 𝗶𝗻𝗵𝗻, 𝗼𝘂𝘁𝗵𝗻, “保留/刪除”主機名稱(𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆);
  ❖ 示範: 禁用 "淘寶比價" 及 "weibo" 的 js 同主機名稱
𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐥𝐢𝐬𝐭#𝒐𝒖𝒕=𝒕𝒃_𝒑𝒓𝒊𝒄𝒆.𝒋𝒔+𝒘𝒃_𝒂𝒅.𝒋𝒔&𝒐𝒖𝒕𝒉𝒏=𝒘𝒆𝒊𝒃𝒐
⦿ 𝗿𝗲𝗴𝗲𝘅, 正則篩選, 請自行折騰規則運算式;
  ❖ 可與 𝗶𝗻(𝗵𝗻)/𝗼𝘂𝘁(𝗵𝗻) 一起使用，𝗶𝗻(𝗵𝗻)/𝗼𝘂𝘁(𝗵𝗻) 會優先執行;
  ❖ 對 𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆 & 𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫 同時生效(⚠️ 慎用)
⦿ 𝗽𝗼𝗹𝗶𝗰𝘆 參數, 用於直接指定策略組，或為 𝐒𝐮𝐫𝐠𝐞 類型 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 生成策略組(默認"𝐒𝐡𝐚𝐰𝐧"策略組);
⦿ 𝗿𝗲𝗽𝗹𝗮𝗰𝗲 參數, 正則替換 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 內容, regex@newregex;
  ❖ 將淘寶比價中腳本替換成 lite 版本, tiktok 中 JP 換成 KR
    ∎ 𝐫𝐞𝐩𝐥𝐚𝐜𝐞=(𝐩𝐫𝐢𝐜𝐞)(.*)@$1_𝐥𝐢𝐭𝐞$2+𝐣𝐩@𝐤𝐫 
⦿ 𝗱𝘀𝘁=𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫，分別為將 𝐦𝐨𝐝𝐮𝐥𝐞&𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 轉換成 重寫/分流;
  ❖ ⚠️ 默認將 𝐦𝐨𝐝𝐮𝐥𝐞 轉換到重寫, 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 轉成分流
  ❖ ⚠️ 把 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 中 𝐮𝐫𝐥-𝐫𝐞𝐠𝐞𝐱 轉成重寫時, 必須要加 𝗱𝘀𝘁=𝐫𝐞𝐰𝐫𝐢𝐭𝐞;
  ❖ ⚠️ 把 𝐦𝐨𝐝𝐮𝐥𝐞 中的分流規則轉換時, 必須要加 𝗱𝘀𝘁=𝐟𝐢𝐥𝐭𝐞𝐫

3⃣️ 通知參數 𝗻𝘁𝗳=0/1, 用於 關閉/打開 資源解析器的提示通知
⦿ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 預設“開啟”通知提示, 以防規則誤刪除
⦿ 𝘀𝗲𝗿𝘃𝗲𝗿 資源解析則默認”關閉“通知提示
----------------------------------------------------------
*/


/**
* 使用說明，
0️⃣ 在QuantumultX 設定檔中[general] 部分，加入 
resource_parser_url = https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
⚠️⚠️如提示"沒有自訂解析器"，請長按右下角圖示後點擊左側刷新按鈕，更新資源，後臺退出 app，直到出現解析器說明
1️⃣ 假設原始訂閱連接為: https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt , 
2️⃣ 假設你想要保留的參數為 in=tls+ss, 想要過濾的參數為 out=http+2, 請注意下面訂閱連結後一定要加 ”#“ 符號
3️⃣ 則填入 Quanx 節點引用的的總連結為  https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt#in=tls+ss&out=http+2
4️⃣ 填入上述連結, 並打開的資源解析器開關
------------------------------
*/

var link0 = $resource.link;
var content0 = $resource.content;
const subinfo = $resource.info;
const subtag = $resource.tag != undefined ? $resource.tag : "";
// 非 raw 連結的沙雕情形
content0 = content0.indexOf("DOCTYPE html") != -1 && link0.indexOf("github.com") != -1 ? ToRaw(content0) : content0 ;

//debug
//const $resource={}
//const $done=function(snt){return snt}
//parameters

var para = (link0.indexOf("http") != -1 && link0.indexOf("://") != -1) ? link0 : link0 + content0.split("\n")[0];
var para1 = para.slice(para.indexOf("#") + 1) //防止參數中其它位置也存在"#"
var mark0 = para.indexOf("#") != -1 ? true : false;
var Pinfo = mark0 && para1.indexOf("info=") != -1 ? para1.split("info=")[1].split("&")[0] : 0;
var ntf_flow = 0;
//常用量
const Base64 = new Base64Code();
const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); //處理特殊符號以便正則匹配使用
var link1 = link0.split("#")[0]
const qxpng = "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png" // server sub-info link
const subinfo_link = { "open-url": "https://t.me/QuanX_API", "media-url": "https://shrtm.nu/ebAr" };
const subinfo_link1 = { "open-url": link1, "media-url": "https://shrtm.nu/uo13" } // server sub-info link(fake-nodes)
const rwrite_link = { "open-url": link1, "media-url": "https://shrtm.nu/x3o2" } // rewrite filter link
const rwhost_link = { "open-url": link1, "media-url": "https://shrtm.nu/0n5J" } // hostname filter link
const rule_link = { "open-url": link1, "media-url": "https://shrtm.nu/cpHD" } // rule filter link
const nan_link = { "open-url": link1, "media-url": qxpng } // nan error link
const bug_link = { "open-url": "https://t.me/Shawn_KOP_bot", "media-url": "https://shrtm.nu/obcB" } // bug link
const sub_link = { "open-url": link1, "media-url": "https://shrtm.nu/ebAr" } // server link


SubFlow() //流量通知


// 參數獲取
var Pin0 = mark0 && para1.indexOf("in=") != -1 ? (para1.split("in=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Pout0 = mark0 && para1.indexOf("out=") != -1 ? (para1.split("out=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Psfilter = mark0 && para1.indexOf("sfilter=") != -1 ? Base64.decode(para1.split("sfilter=")[1].split("&")[0]) : null; // script filter
var Preg = mark0 && para1.indexOf("regex=") != -1 ? decodeURIComponent(para1.split("regex=")[1].split("&")[0]) : null; //server正則過濾參數
var Pregdel = mark0 && para1.indexOf("delreg=") != -1 ? decodeURIComponent(para1.split("delreg=")[1].split("&")[0]) : null; // 正則刪除參數
var Phin0 = mark0 && para1.indexOf("inhn=") != -1 ? (para1.split("inhn=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null; //hostname 
var Phout0 = mark0 && para1.indexOf("outhn=") != -1 ? (para1.split("outhn=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null; //hostname
var Preplace = mark0 && para1.indexOf("replace=") != -1 ? decodeURIComponent(para1.split("replace=")[1].split("&")[0]) : null; //filter/rewrite 正則替換
var Pemoji = mark0 && para1.indexOf("emoji=") != -1 ? para1.split("emoji=")[1].split("&")[0] : null;
var Pudp0 = mark0 && para1.indexOf("udp=") != -1 ? para1.split("udp=")[1].split("&")[0] : 0;
var Ptfo0 = mark0 && para1.indexOf("tfo=") != -1 ? para1.split("tfo=")[1].split("&")[0] : 0;
var Prname = mark0 && para1.indexOf("rename=") != -1 ? para1.split("rename=")[1].split("&")[0].split("+") : null;
var Psrename = mark0 && para1.indexOf("srename=") != -1 ? Base64.decode(para1.split("srename=")[1].split("&")[0]) : null; // script rename
var Prrname = mark0 && para1.indexOf("rrname=") != -1 ? para1.split("rrname=")[1].split("&")[0].split("+") : null;
var Ppolicy = mark0 && para1.indexOf("policy=") != -1 ? decodeURIComponent(para1.split("policy=")[1].split("&")[0]) : "Shawn";
var Pcert0 = mark0 && para1.indexOf("cert=") != -1 ? para1.split("cert=")[1].split("&")[0] : 0;
var Psort0 = mark0 && para1.indexOf("sort=") != -1 ? para1.split("sort=")[1].split("&")[0] : 0;
var PTls13 = mark0 && para1.indexOf("tls13=") != -1 ? para1.split("tls13=")[1].split("&")[0] : 0;
var Pntf0 = mark0 && para1.indexOf("ntf=") != -1 ? para1.split("ntf=")[1].split("&")[0] : 2;
var Pb64 = mark0 && para1.indexOf("b64=") != -1 ? para1.split("b64=")[1].split("&")[0] : 0;
var emojino = [" 0️⃣ ", " 1⃣️ ", " 2⃣️ ", " 3⃣️ ", " 4⃣️ ", " 5⃣️ ", " 6⃣️ ", " 7⃣️ ", " 8⃣️ ", " 9⃣️ ", " 🔟 "]
var pfi = Pin0 ? "in=" + Pin0.join(", ") + ",  " : ""
var pfo = Pout0 ? "out=" + Pout0.join(", ") : ""
var pfihn = Phin0 ? "inhn=" + Phin0.join(", ") + ",  " : ""
var pfohn = Phout0 ? "outhn=" + Phout0.join(", ") : ""
var Pcnt =  para1.indexOf("cnt=") != -1 ? para1.split("cnt=")[1].split("&")[0] : 0;
var flow = "";
var exptime = "";

var type0 = Type_Check(content0); //  類型判斷
//$notify(type0,"hh",content0)

//flag=1,2,3分別為 server、rewrite、rule 類型
const errornode=""
var flag = 1

try {
  ResourceParse();
} catch (err) {
    $notify("❌ 解析出現錯誤", "", err);
}

if (flag == 1) { //server 類型統一處理
    total = total.filter(Boolean)
    if (Pinfo == 1 && ntf_flow == 0) { //假節點類型的流量通知
        flowcheck(total)
    }
    if (Pin0 || Pout0) { total = Filter(total, Pin0, Pout0) } // in & out 
    if (Preg) { total = total.map(Regex).filter(Boolean)  // regex
    	RegCheck(total, "節點訂閱", Preg)} 
    if (Psfilter) { total = FilterScript(total, Psfilter) }
    if (Prrname) {
        var Prn = Prrname;
        total = total.map(Rename);
    }
    if (Pemoji) { total = emoji_handle(total, Pemoji); }
    if (Prname) {
        var Prn = Prname;
        total = total.map(Rename);
    }
    if (Pregdel) {
        var delreg = Pregdel
        total = total.map(DelReg)
    }
    if (Preplace) { // server 類型也可用 replace 參數進行重命名操作
        total = ReplaceReg(total, Preplace)
    }
    if (Psrename) { total = RenameScript(total, Psrename) }
    if (Psort0) {
        total = QXSort(total, Psort0);
    }
    if (total.length > 0){
      if (Pcnt == 1) {$notify("Final Content" , "Nodes: " +total.length, total)}
      total = TagCheck_QX(total).join("\n") //節點名檢查
      total = Base64.encode(total) //強制節點類型 base64 加密後再導入 Quantumult X
      $done({ content: total });
    } else {
      $notify("❓❓ 友情提示", "⚠️⚠️ 解析後無有效內容", "🚥🚥 請自行檢查相關參數, 或者點擊通知跳轉回饋", bug_link)
      $done({ content: errornode })
    }
} else if (flag == 0){
  $done({ content: errornode })
} else if (flag == -1){
  $done({ content: content0 })
} else { $done({ content: total });}

/**
# 以下為具體的 function

*/

function ResourceParse() {
  if (type0 == "Subs-B64Encode") {
    total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "Subs") {
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "QuanX" || type0 == "Clash") {
    total = isQuanX(content0);
  } else if (type0 == "Surge") {
    total = Surge2QX(content0);
  } else if (type0 == "sgmodule") { // surge module 模組/含 url-regex 的 rule-set
    flag = 2 
    total = SGMD2QX(content0) // 轉換 
    total = Rewrite_Filter(total, Pin0, Pout0); // 篩選過濾
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    total = total.join("\n")
  } else if (type0 == "rewrite") { // rewrite 類型
    flag = 2;
    total = Rewrite_Filter(content0.split("\n"), Pin0, Pout0);
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    total = total.join("\n")
  } else if (type0 == "Rule") {  // rule 類型, 已處理完畢
    flag = 3;
    total = Rule_Handle(content0.split("\n"), Pout0, Pin0).filter(Boolean);
    if (Preg && total.length!=0) { // 正則篩選規則 filter
    total = total.map(Regex).filter(Boolean).join("\n") 
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    RegCheck(total, "分流引用", Preg)} 
    total = total.join("\n")
  } else if (content0.trim() == "") {
    $notify("‼️ 引用" + "⟦" + subtag + "⟧" + " 返回內容為空", "⁉️ 點通知跳轉以確認連結是否失效", para.split("#")[0], nan_link);
    flag = 0;
  } else if (type0 == "unknown") {
    $notify("😭 未能解析, 可能是 bug ⁉️  " + "⟦" + subtag + "⟧", "👻 本解析器 暫未支持/未能識別 該訂閱格式", "⚠️ 將直接導入Quantumult X \n 如認為是 BUG, 請點通知跳轉回饋", bug_link);
    flag = -1;
  } else { flag = 0 }
}

//回應頭流量處理部分
function SubFlow() {
  if (Pinfo == 1 && subinfo) {
    var sinfo = subinfo.replace(/ /g, "").toLowerCase();
    var total = "總流量: " + (parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)).toFixed(2) + "GB";
    var usd = "已用流量: " + ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3)).toFixed(2) + "GB"
    var left = "剩餘流量: " + ((parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)) - ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3))).toFixed(2) + "GB"
    if (sinfo.indexOf("expire=") != -1) {
      var epr = new Date(parseFloat(sinfo.split("expire=")[1].split(",")[0]) * 1000);
      var year = epr.getFullYear();  // 獲取完整的年份(4位,1970)
      var mth = epr.getMonth() + 1 < 10 ? '0' + (epr.getMonth() + 1) : (epr.getMonth() + 1);  // 獲取月份(0-11,0代表1月,用的時候記得加上1)
      var day = epr.getDate() < 10 ? "0" + (epr.getDate()) : epr.getDate();
      epr = "過期時間: " + year + "-" + mth + "-" + day
    } else {
      epr = ""; //"過期時間: ✈️ 未提供該資訊" //沒過期時間的顯示訂閱連結
    }
    var message = total + "\n" + usd + ", " + left;
    ntf_flow = 1;
    $notify("流量資訊: ⟦" + subtag + "⟧", epr, message, subinfo_link)
  }
}

//flowcheck-fake-server
function flowcheck(cnt) {
    for (var i = 0; i < cnt.length; i++) {
        var item = cnt[i];
        var nl = item.slice(item.indexOf("tag"))
        var nm = nl.slice(nl.indexOf("=") + 1)
        if (item.indexOf("剩餘流量") != -1) {
            flow = nm
        } else if (item.indexOf("過期時間") != -1) {
            exptime = nm
        }
    }
    if (flow != "") { $notify("流量資訊: ⟦" + subtag + "⟧", flow, exptime, subinfo_link1) }
}

// regex 後的檢查
function RegCheck(total, typen, regpara) {
	if(total.length == 0){ 
		$notify("‼️ " + typen + "  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選正則: regex=" + regpara, "⚠️ 篩選後剩餘項為 0️⃣ , 請檢查正則參數及原始連結", nan_link)
	}else if((typen != "節點訂閱" && Pntf0 !=0) || (typen == "節點訂閱" && Pntf0 ==1)){
		var nolist = total.length <= 10 ? emojino[total.length] : total.length
		$notify("🤖 " + typen + "  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選正則: regex=" + regpara, "⚠️ 篩選後剩餘以下" + nolist + "個匹配項 \\n ⨷ " + total.join("\n ⨷ "), sub_link)
	}
}
//判斷訂閱類型
function Type_Check(subs) {
    var type = "unknown"
    var RuleK = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,"];
    var DomainK = ["domain-set,"]
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,", "=https,", "=shadowsocks", "=shadowsocksr"];
    var ClashK = ["proxies:"]
    var SubK = ["dm1lc3M", "c3NyOi8v", "CnNzOi8", "dHJvamFu", "c3M6Ly", "c3NkOi8v", "c2hhZG93"];
    var RewriteK = [" url "]
    var SubK2 = ["ss://", "vmess://", "ssr://", "trojan://", "ssd://", "https://"];
    var ModuleK = ["[Script]", "[Rule]", "[URL Rewrite]", "[Map Local]", "[MITM]", "\nhttp-r"]
    var html = "DOCTYPE html"
    var subi = subs.replace(/ /g, "")
    const RuleCheck = (item) => subi.toLowerCase().indexOf(item) != -1;
    const NodeCheck = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
    const RewriteCheck = (item) => subs.indexOf(item) != -1;
    var subsn = subs.split("\n")
    if (subs.indexOf(html) != -1 && link0.indexOf("github.com" == -1)) {
      $notify("‼️ 該連結返回內容有誤", "⁉️ 點通知跳轉以確認連結是否失效", link0, nan_link);
      type = "web";
    }  else if (ClashK.some(NodeCheck)){ // Clash 類型節點轉換
      type = "Clash";
      content0 = Clash2QX(subs)
    } else if ( (ModuleK.some(RewriteCheck) || para1.indexOf("dst=rewrite") != -1) && (para1.indexOf("dst=filter") == -1) && subs.indexOf("[Proxy]") == -1) { // Surge 類型 module /rule-set(含url-regex) 類型
      type = "sgmodule"
    } else if ((subi.indexOf("hostname=") != -1 || RewriteK.some(RewriteCheck)) && subs.indexOf("[Proxy]") == -1 && subs.indexOf("[server_local]") == -1 && subs.indexOf("\nhttp-r") == -1 && para1.indexOf("dst=filter")==-1) {
      type = "rewrite" //Quantumult X 類型 rewrite
    } else if (RuleK.some(RuleCheck) && subs.indexOf(html) == -1 && subs.indexOf("[Proxy]") == -1 && subs.indexOf("[server_local]") == -1) {
      type = "Rule";
    } else if (DomainK.some(RuleCheck) && subs.indexOf("[Proxy]") == -1 ) {
      type = "Rule";
      content0 = Domain2Rule(content0) // 轉換 domain-set
    } else if (subsn.length >= 1 && SubK2.some(NodeCheck) && subs.indexOf("[Proxy]") == -1 && subs.indexOf("[filter_local]") == -1) { //未b64加密的多行URI 組合訂閱
      type = "Subs"
    } else if (SubK.some(NodeCheck)) {  //b64加密的訂閱類型
      type = "Subs-B64Encode"
    } else if (subi.indexOf("tag=") != -1 && QuanXK.some(NodeCheck) && subs.indexOf("[Proxy]") == -1 && subs.indexOf("[filter_local]") == -1) {
      type = "Subs" // QuanX list
    } else if (subs.indexOf("[Proxy]") != -1) {
      type = "Surge"; // Surge Profiles
    } else if (SurgeK.some(NodeCheck)  && subs.indexOf("[Proxy]") == -1 && subs.indexOf("[filter_local]") == -1) {
      type = "Subs" // Surge proxy list
    } else if (subs.indexOf("[server_local]") != -1) {
      type = "QuanX"  // QuanX Profile
    }
    return type
}

// 檢查節點名字(重複以及空名)等QuanX 不允許的情形
function TagCheck_QX(content) {
    var Olist = content
    var Nlist = []
    var nmlist = []
    var nulllist = []; //記錄空名字節點
    var duplist = [];  //記錄重名節點
    var no = 0;
    for (var i = 0; i < Olist.length; i++) {
        var item = Olist[i] ? Olist[i] : ""
        if (item.replace(/ /gm, "").indexOf("tag=") != -1) {
            var nl = item.slice(item.indexOf("tag"))
            var nm = nl.slice(nl.indexOf("=") + 1)
            if (nm == "") { //空名字
                nm = " [" + item.split("=")[0] + "] " + item.split("=")[1].split(",")[0].split(":")[0]
                item = item.split("tag")[0] + "tag=" + nm.replace("shadowsocks", "ss")
                nulllist.push(nm.replace("shadowsocks", "ss"))
            }
            var ni = 0
            while (nmlist.indexOf(nm) != -1) { //重名
                nm = ni <= 10 ? nm.split(" ⌘")[0] + " ⌘" + emojino[ni] : nm.split(" ⌘")[0] + " ⌘" + ni
                item = item.split("tag")[0] + "tag=" + nm
                ni = ni + 1
            }
            if (ni != 0) { duplist.push(nm) }
            nmlist.push(nm)
            ni = 0
            Nlist.push(item)
        }// if "tag="
    } // for
    if (nulllist.length >= 1) {
        no = nulllist.length <= 10 ? emojino[nulllist.length] : nulllist.length;
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 內有" + no + "個空節點名 ", "✅ 已將節點“類型+IP”設為節點名", " ⨁ " + nulllist.join("\n ⨁ "), nan_link)
    }
    if (duplist.length >= 1) {
        no = duplist.length <= 10 ? emojino[duplist.length] : duplist.length;
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 內有" + no + "個重複節點名 ", "✅ 已添加⌘符號作為區分:", " ⨁ " + duplist.join("\n ⨁ "), nan_link)
    }
    return Nlist
}

function Trim(item) {
    return item.trim()
}

// 用於某些奇葩使用者不使用 raw 連結的問題
function rawtest(cnt) {
  var Preg0 = RegExp(".*js-file-line\".*?\<\/td\>", "i")
  if (Preg0.test(cnt)) {
    return cnt.replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g,"$2").trim()
  }
}

function ToRaw(cnt) {
  cnt = cnt.split("\n").map(rawtest).filter(Boolean).join("\n")
  var rawlink = link0.replace("github.com","raw.githubusercontent.com").replace("/blob","")
  $notify( "⚠️⚠️ 將嘗試解析該資源" + "⟦" + subtag + "⟧" , "🚥 請正確使用GitHub的 raw 連結" , "❌ 你的連結："+link0+"\n✅ 正確連結："+rawlink, {"open-url":rawlink})
  return cnt
}


//url-regex 轉換成 Quantumult X
function URX2QX(subs) {
    var nrw = []
    var rw = ""
    subs = subs.split("\n")
    var NoteK = ["//", "#", ";"];  //排除注釋項
    for (var i = 0; i < subs.length; i++) {
        const notecheck = (item) => subs[i].indexOf(item) == 0
        if (!NoteK.some(notecheck)) {
        if (subs[i].slice(0, 9) == "URL-REGEX") {  // regex 類型
            rw = subs[i].replace(/ /g, "").split(",REJECT")[0].split("GEX,")[1] + " url " + "reject-200"
            nrw.push(rw)
        } else if (subs[i].indexOf("data=") != -1 && subs.indexOf("[Map Local]") != -1){ // Map Local 類型
            rw = subs[i].replace(/ /g, "").split("data=")[0] + " url " + "reject-dict"
            nrw.push(rw)
        } 
    }
    }
    return nrw
}

//script&rewrite 轉換成 Quantumult X
function SCP2QX(subs) {
    var nrw = []
    var rw = ""
    subs = subs.split("\n")
    for (var i = 0; i < subs.length; i++) {
        if (subs[i].slice(0, 8) == "hostname") {
            hn = subs[i].replace(/\%.*\%/g, "")
            nrw.push(hn)
        }
        var SC = ["type=", ".js", "pattern=", "script-path="]
        var NoteK = ["//", "#", ";"]; //排除注釋項
        const sccheck = (item) => subs[i].indexOf(item) != -1
        const notecheck = (item) => subs[i].indexOf(item) == 0
        if (!NoteK.some(notecheck)){
          if (SC.every(sccheck)) { // surge js 新格式
            ptn = subs[i].replace(/\s/gi,"").split("pattern=")[1].split(",")[0]
            js = subs[i].replace(/\s/gi,"").split("script-path=")[1].split(",")[0]
            type = subs[i].replace(/\s/gi,"").split("type=")[1].split(",")[0].trim()
            if (type == "http-response" && subs[i].indexOf("requires-body=1") != -1) {
              type = "script-response-body "
            } else if (type == "http-response" && subs[i].indexOf("requires-body=1") == -1) {
              type = "script-response-header "
            } else if (type == "http-request" && subs[i].indexOf("requires-body=1") != -1) {
              type = "script-request-body "
            } else if (type == "http-request" && subs[i].indexOf("requires-body=1") == -1) {
              type = "script-request-header "
            }
            rw = ptn + " url " + type + js
            nrw.push(rw)
          } else if (subs[i].indexOf(" 302") != -1 || subs[i].indexOf(" 307") != -1) { //rewrite 302&307 複寫
            rw = subs[i].split(" ")[0] + " url " + subs[i].split(" ")[2] + " " + subs[i].split(" ")[1]
            nrw.push(rw)
          } else if(subs[i].split(" ")[2] == "header") { // rewrite header 類型
            var pget = subs[i].split(" ")[0].split(".com")[1]
            var pgetn = subs[i].split(" ")[1].split(".com")[1]
            rw = subs[i].split(" ")[0] + " url request-header ^GET " + pget +"(.+\\r\\n)Host:.+(\\r\\n) request-header GET " + pgetn + "$1Host: " + subs[i].split(" ")[1].split("://")[1].split(".com")[0] + ".com$2"
            nrw.push(rw)
          } else if(subs[i].indexOf(" - reject") != -1) { // rewrite reject 類型
            rw = subs[i].split(" ")[0] + " url reject-200"
            nrw.push(rw)
          } else if (subs[i].indexOf("script-path") != -1) { //surge js 舊寫法
            type = subs[i].replace(/\s+/g," ").split(" ")[0]
            js = subs[i].split("script-path")[1].split("=")[1].split(",")[0]
            ptn = subs[i].replace(/\s+/g," ").split(" ")[1]
            if (type == "http-response" && subs[i].indexOf("requires-body=1") != -1) {
              type = "script-response-body "
            } else if (type == "http-response" && subs[i].indexOf("requires-body=1") == -1) {
              type = "script-response-header "
            } else if (type == "http-request" && subs[i].indexOf("requires-body=1") != -1) {
              type = "script-request-body "
            } else if (type == "http-request" && subs[i].indexOf("requires-body=1") == -1) {
              type = "script-request-header "
            }
            rw = ptn + " url " + type + js
            nrw.push(rw)
          }
        }

    }
    return nrw
}
// 如果 URL-Regex 跟 rewrite/script 都需要
function SGMD2QX(subs) {
    var nrw0 = URX2QX(subs)
    var nrw1 = SCP2QX(subs)
    var nrwt = [...nrw0, ...nrw1]
    return nrwt
}

//Rewrite過濾，使用+連接多個關鍵字(邏輯"或"):in 為保留，out 為排除
function Rewrite_Filter(subs, Pin, Pout) {
    var Nlist = [];
    var noteK = ["//", "#", ";"];
    var hnc = 0;
    var dwrite = []
    var hostname = ""
    for (var i = 0; i < subs.length; i++) {
        subi = subs[i].trim();
        var subii = subi.replace(/ /g, "")
        if (subi != "") {
            const notecheck = (item) => subi.indexOf(item) == 0
            if (noteK.some(notecheck)) { // 注釋項跳過 
                continue;
            } else if (hnc == 0 && subii.indexOf("hostname=") == 0) { //hostname 部分
                hostname = (Phin0 || Phout0) ? HostNamecheck(subi, Phin0, Phout0) : subi;//hostname 部分
            } else if (subii.indexOf("hostname=") != 0) { //rewrite 部分
                var inflag = Rcheck(subi, Pin);
                var outflag = Rcheck(subi, Pout);
                if (outflag == 1 || inflag == 0) {
                    dwrite.push(subi); //out 命中
                } else if (outflag == 0 && inflag != 0) { //out 未命中 && in 未排除
                    Nlist.push(subi);
                } else if (outflag == 2 && inflag != 0) { //無 out 參數 && in 未排除
                    Nlist.push(subi);
                }
            }
        }
    }
    if (Pntf0 != 0) {
        nowrite = dwrite.length <= 10 ? emojino[dwrite.length] : dwrite.length
        no1write = Nlist.length <= 10 ? emojino[Nlist.length] : Nlist.length
        if (Pin0 && no1write != " 0️⃣ ") { //有 in 參數就通知保留專案
            $notify("🤖 " + "重寫引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選參數: " + pfi + pfo, "☠️ 重寫 rewrite 中保留以下" + no1write + "個匹配項:" + "\n ⨷ " + Nlist.join("\n ⨷ "), rwrite_link)
        } else if (dwrite.length > 0) {
            $notify("🤖 " + "重寫引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選參數: " + pfi + pfo, "☠️ 重寫 rewrite 中已禁用以下" + nowrite + "個匹配項:" + "\n ⨷ " + dwrite.join("\n ⨷ "), rwrite_link)
        }
    }
    if (Nlist.length == 0) { $notify("🤖 " + "重寫引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選參數: " + pfi + pfo, "⚠️ 篩選後剩餘rewrite規則數為 0️⃣ 條, 請檢查參數及原始連結", nan_link) }
    if(Preg){ Nlist = Nlist.map(Regex).filter(Boolean) // regex to filter rewrites
    	RegCheck(Nlist, "重寫引用", Preg) }
    if (hostname != "") { Nlist.push(hostname) }
    return Nlist
}

// 主機名稱處理
function HostNamecheck(content, parain, paraout) {
    var hname = content.replace(/ /g, "").split("=")[1].split(",");
    var nname = [];
    var dname = []; //刪除項
    for (var i = 0; i < hname.length; i++) {
        dd = hname[i]
        const excludehn = (item) => dd.indexOf(item) != -1;
        if (paraout && paraout != "") { //存在 out 參數時
            if (!paraout.some(excludehn)) { //out 未命中🎯️
                if (parain && parain != "") {
                    if (parain.some(excludehn)) { //Pin 命中🎯️
                        nname.push(hname[i])
                    } else {
                        dname.push(hname[i])
                    } //Pin 未命中🎯️的記錄
                } else { nname.push(hname[i]) }	//無in 參數		
            } else { dname.push(hname[i]) } //out 參數命中
        } else if (parain && parain != "") { //不存在 out，但有 in 參數時
            if (parain.some(excludehn)) { //Pin 命中🎯️
                nname.push(hname[i])
            } else { dname.push(hname[i]) }
        } else {
            nname.push(hname[i])
        }
    } //for j
    if (Pntf0 != 0) {
        if (paraout || parain) {
            var noname = dname.length <= 10 ? emojino[dname.length] : dname.length
            var no1name = nname.length <= 10 ? emojino[nname.length] : nname.length
            if (parain && no1name != " 0️⃣ ") {
                $notify("🤖 " + "重寫引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選參數: " + pfihn + pfohn, "☠️ 主機名稱 hostname 中已保留以下" + no1name + "個匹配項:" + "\n ⨷ " + nname.join(","), rwhost_link)
            } else if (dname.length > 0) {
                $notify("🤖 " + "重寫引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選參數: " + pfihn + pfohn, "☠️ 主機名稱 hostname 中已刪除以下" + noname + "個匹配項:" + "\n ⨷ " + dname.join(","), rwhost_link)
            }
        }
    }
    if (nname.length == 0) {
        $notify("🤖 " + "重寫引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 篩選參數: " + pfihn + pfohn, "⚠️ 主機名稱 hostname 中剩餘 0️⃣ 項, 請檢查參數及原始連結", nan_link)
    }
    if(Preg){ nname = nname.map(Regex).filter(Boolean) 
    	RegCheck(nname, "主機名稱", Preg) }
    hname = "hostname=" + nname.join(", ");
    return hname
}

//Rewrite 篩選的函數
function Rcheck(content, param) {
    name = content.toUpperCase()
    if (param) {
        var flag = 0; //沒命中
        const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
        if (param.some(checkpara)) {
            flag = 1 //命中
        }
        return flag
    } else { //if param
        return 2
    } //無參數
}

//分流規則轉換及過濾，可用於 surge 及 quanx 的 rule-list
function Rule_Handle(subs, Pout, Pin) {
    cnt = subs //.split("\n");
    Tin = Pin; //保留參數
    Tout = Pout; //過濾參數
    ply = Ppolicy; //策略組
    var nlist = []
    var RuleK = ["//", "#", ";"];
    if (Tout != "" && Tout != null) { // 有 out 參數時
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
            const exclude = (item) => cc.indexOf(item) != -1; // 刪除項
            const RuleCheck = (item) => cc.indexOf(item) != -1; //無視注釋行
            if (Tout.some(exclude) && !RuleK.some(RuleCheck)) {
                dlist.push(Rule_Policy("-" + cc))
            } else if (!RuleK.some(RuleCheck) && cc) { //if Pout.some, 不操作注釋項
                dd = Rule_Policy(cc);
                if (Tin != "" && Tin != null) {
                    const include = (item) => dd.indexOf(item) != -1; // 保留項
                    if (Tin.some(include)) {
                        nlist.push(dd);
                    }
                } else {
                    nlist.push(dd);
                }
            } //else if cc
        }//for cnt
        var no = dlist.length <= 10 ? emojino[dlist.length] : dlist.length
        if (dlist.length > 0) {
            if (Pntf0 != 0) { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "☠️ 已禁用以下" + no + "條匹配規則:" + "\n ⨷ " + dlist.join("\n ⨷ "), rule_link) }
        } else { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "⚠️ 未發現任何匹配項, 請檢查參數或原始連結", nan_link) }
        if (Tin != "" && Tin != null) {  //有 in 跟 out 參數時
            if (nlist.length > 0) {
                var noin0 = nlist.length <= 10 ? emojino[nlist.length] : nlist.length
                if (Pntf0 != 0) {
                    $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "🎯 已保留以下 " + noin0 + "條匹配規則:" + "\n ⨁ " + nlist.join("\n ⨁ "), rule_link)
                }
            } else {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin + ",⛔️ 禁用: " + Tout, "⚠️ 篩選後剩餘規則數為 0️⃣ 條, 請檢查參數及原始連結", nan_link)
            }
        } else {// if Tin (No Tin)
            if (nlist.length == 0) {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "⚠️ 篩選後剩餘規則數為 0️⃣ 條, 請檢查參數及原始連結", nan_link)
            }
        }
        return [...dlist, ...nlist];
    } else if (Tin != "" && Tin != null) { //if Tout
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
            const RuleCheck = (item) => cc.indexOf(item) != -1; //無視注釋行
            if (!RuleK.some(RuleCheck) && cc) { //if Pout.some, 不操作注釋項
                dd = Rule_Policy(cc);
                const include = (item) => dd.indexOf(item) != -1; // 保留項
                if (Tin.some(include)) {
                    nlist.push(dd);
                } else { dlist.push("-" + dd) }
            }
        } // for cnt
        if (nlist.length > 0) {
            var noin = nlist.length <= 10 ? emojino[nlist.length] : nlist.length
            if (Pntf0 != 0) {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "🎯 已保留以下 " + noin + "條匹配規則:" + "\n ⨁ " + nlist.join("\n ⨁ "), rule_link)
            }
        } else { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "⚠️ 篩選後剩餘規則數為 0️⃣ 條, 請檢查參數及原始連結", nan_link) }
        return [...dlist, ...nlist];
    } else {  //if Tin
        return cnt.map(Rule_Policy)
    }
}

function Rule_Policy(content) { //增加、替換 policy
    var cnt = content.replace(/^\s*\-\s/g,"").replace(/REJECT-TINYGIF/gi,"reject").trim().split(",");
    var RuleK = ["//", "#", ";"];
    var RuleK1 = ["host", "domain", "ip-cidr", "geoip", "user-agent", "ip6-cidr"];
    const RuleCheck = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0; //無視注釋行
    const RuleCheck1 = (item) => cnt[0].trim().toLowerCase().indexOf(item) != -1; //無視 quanx 不支援的規則類別
    if (RuleK1.some(RuleCheck1)) {
        if (cnt.length == 3 && cnt.indexOf("no-resolve") == -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : cnt[2]
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0
        } else if (cnt.length == 2) { //Surge rule-set
            ply0 = Ppolicy != "Shawn" ? Ppolicy : "Shawn"
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0
        } else if (cnt.length == 3 && cnt[2].indexOf("no-resolve") != -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : "Shawn"
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0 + ", " + cnt[2]
        } else if (cnt.length == 4 && cnt[3].indexOf("no-resolve") != -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : cnt[2]
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0 + ", " + cnt[3]
        } else if (!RuleK.some(RuleCheck) && content) {
            //$notify("未能解析" + "⟦" + subtag + "⟧" + "其中部分規則:", content, nan_link);
            return ""
        } else { return "" }
        if (cnt[0].indexOf("URL-REGEX") != -1 || cnt[0].indexOf("PROCESS") != -1) {
            nn = ""
        } else { nn = nn.replace("IP-CIDR6", "ip6-cidr") }
        return nn
    } else { return "" }//if RuleK1 check	
}

// Domain-Set
function Domain2Rule(content) {
    var cnt = content.split("\n");
    var RuleK = ["//", "#", ";"]
    var nlist = []
    for (var i = 0; i< cnt.length; i++) {
        cc = cnt[i].trim();
        const RuleCheck = (item) => cc.indexOf(item) != -1; //無視注釋行
        if(!RuleK.some(RuleCheck) && cc) {
            if (cc[0] == "."){
                nlist.push("host-suffix, " + cc.slice(1 , cc.length) )
            } else {
                nlist.push("host, " + cc )
            }
        }
    }
    return nlist.join("\n")
}

// 正則替換 filter/rewrite 的部分
// 用途：如 tiktok 換區: JP -> KR ，如淘寶比價腳本 -> lite 橫幅通知版本
function ReplaceReg(cnt, para) {
    var cnt0 = cnt.join("\n")
    var pp = para.split("+")
    for (var i = 0; i < pp.length; i++) {
        var p1 = pp[i].split("@")[0]
        var p2 = pp[i].split("@")[1]
        p1 = new RegExp(p1, "gmi")
        cnt0 = cnt0.replace(p1, p2)
    }
    return cnt0.split("\n")
}

//混合訂閱類型，用於未整體進行 base64 encode 的類型
function Subs2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
    var list0 = subs.split("\n");
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http="];
    var SurgeK = ["=ss", "=vmess", "=trojan", "=http", "=custom"];
    var LoonK = ["=shadowsocks", "=shadowsocksr"]
    var QXlist = [];
    for (var i = 0; i < list0.length; i++) {
        var node = ""
        if (list0[i].trim().length > 3) {
            var type = list0[i].split("://")[0].trim()
            var listi = list0[i].replace(/ /g, "")
            const NodeCheck = (item) => listi.toLowerCase().indexOf(item) != -1;
            if (type == "vmess" && list0[i].indexOf("remarks=") == -1) {
                var bnode = Base64.decode(list0[i].split("vmess://")[1])
                if (bnode.indexOf("over-tls=") == -1) { //v2rayN
                    node = V2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
                } else { //quantumult 類型
                    node = VQ2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
                }
            } else if (type == "vmess" && list0[i].indexOf("remarks=") != -1) { //shadowrocket 類型
                node = VR2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
            } else if (type == "ssr") {
                node = SSR2QX(list0[i], Pudp, Ptfo)
            } else if (type == "ss") {
                node = SS2QX(list0[i], Pudp, Ptfo)
            } else if (type == "ssd") {
                node = SSD2QX(list0[i], Pudp, Ptfo)
            } else if (type == "trojan") {
                node = TJ2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
            } else if (type == "https" && list0[i].indexOf(",") == -1) {
                if (listi.indexOf("@") != -1) {
                  node = HPS2QX(list0[i], Ptfo, Pcert, Ptls13)
            } else {
                var listh = Base64.decode(listi.split("https://")[1].split("#")[0])
                listh = "https://" + listh + "#" + listi.split("https://")[1].split("#")[1]
                node = HPS2QX(listh, Ptfo, Pcert, Ptls13)
                }
            } else if (QuanXK.some(NodeCheck)) {
                node = isQuanX(list0[i])[0]
            } else if (SurgeK.some(NodeCheck)) {
                node = Surge2QX(list0[i])[0]
            } else if (LoonK.some(NodeCheck)) {
                node = Loon2QX(list0[i])
            }
            if (node instanceof Array) {
                for (var j in node) {
                  node[j] = Pudp != 0 ? XUDP(node[j],Pudp) : node[j]
                  node[j] = Ptfo != 0 ? XTFO(node[j],Ptfo) : node[j]
                    QXlist.push(node[j])
                }
            } else if (node != "") {
              node = Pudp != 0 ? XUDP(node,Pudp) : node
              node = Ptfo != 0 ? XTFO(node,Ptfo) : node
                QXlist.push(node)
            }
        }
    }
    return QXlist
}

//http=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, tls13=true, fast-open=false, udp-relay=false, tag=http-tls-02
//HTTPS 類型 URI 轉換成 QUANX 格式
function HPS2QX(subs, Ptfo, Pcert, Ptls13) {
    var server = subs.replace("https://", "").trim()//Base64.decode(subs.replace("https://", "")).trim().split("\u0000")[0];
    var nss = []
    if (server != "") {
        var ipport = "http=" + server.split("@")[1].split("#")[0].split("/")[0];
        var uname = "username=" + server.split(":")[0];
        var pwd = "password=" + server.split("@")[0].split(":")[1];
        var tag = "tag=" + server.split("#")[1];
        var tls = "over-tls=true";
        var cert = Pcert != 0 ? "tls-verification=true" : "tls-verification=false";
        var tfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
        var tls13 = Ptls13 == 1 ? "tls13=true" : "tls13=false";
        nss.push(ipport, uname, pwd, tls, cert, tfo, tls13, tag)
    }
    var QX = nss.join(",");
    return QX
}

//quantumult 格式的 vmess URI 轉換
function VQ2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
    var server = String(Base64.decode(subs.replace("vmess://", "").trim()).split("\u0000")[0])
    var node = ""
    var ip = "vmess=" + server.split(",")[1].trim() + ":" + server.split(",")[2].trim() + ", " + "method=aes-128-gcm, " + "password=" + server.split(",")[4].split("\"")[1] + ", "
    var tag = "tag=" + server.split("=")[0]
    var tfo = subs.indexOf("tfo=1") != -1 ? "fast-open=true, " : "fast-open=false, "
    var udp = Pudp == 1 ? "udp-relay=true, " : "udp-relay=false, ";
    node = ip + tfo + udp
    var obfs = ""
    if (server.indexOf("obfs=") == -1) { // 非 ws 類型
        obfs = server.indexOf("over-tls=true") != -1 ? "obfs=over-tls, " : "" //over-tls
        var host = server.indexOf("tls-host") != -1 ? "obfs-host=" + server.split("tls-host=")[1].split(",")[0] + ", " : ""
        obfs = obfs + host
    } else if (server.indexOf("obfs=ws") != -1) {
        obfs = server.indexOf("over-tls=true") != -1 ? "obfs=wss, " : "obfs=ws, " //ws,wss 類型
        var uri = server.indexOf("obfs-path=") != -1 ? "obfs-uri=" + server.split("obfs-path=")[1].split("\"")[1] + ", " : "obfs-uri=/, "
        obfs = obfs + uri
        var host = server.indexOf("obfs-header=") != -1 ? "obfs-host=" + server.split("obfs-header=\"Host:")[1].split("[")[0].trim() + ", " : ""
        obfs = obfs + host
    }
    if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
        var cert = Pcert != 0 || subs.indexOf("allowInsecure=1") != -1 ? "tls-verification=false, " : "tls-verification=true, "
        var tls13 = Ptls13 == 1 ? "tls13=true, " : ""
        obfs = obfs + cert + tls13
    }
    node = node + obfs + tag
    return node
}

//Shadowrocket 格式的 vmess URI 轉換
function VR2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
    var server = String(Base64.decode(subs.replace("vmess://", "").split("?remarks")[0]).trim()).split("\u0000")[0]
    var node = ""
    var ip = "vmess=" + server.split("@")[1] + ", " + "method=aes-128-gcm, " + "password=" + server.split("@")[0].split(":")[1] + ", "
    var tag = "tag=" + decodeURIComponent(subs.split("remarks=")[1].split("&")[0])
    var tfo = subs.indexOf("tfo=1") != -1 ? "fast-open=true, " : "fast-open=false, "
    var udp = Pudp == 1 ? "udp-relay=true, " : "udp-relay=false, ";
    node = ip + tfo + udp
    var obfs = subs.split("obfs=")[1].split("&")[0]
    if (obfs == "none") { //
        obfs = subs.indexOf("tls=1") != -1 ? "obfs=over-tls, " : "" //over-tls
    } else if (obfs == "websocket") {
        obfs = subs.indexOf("tls=1") != -1 ? "obfs=wss, " : "obfs=ws," //ws,wss 類型
        var ouri = subs.indexOf("&path=") != -1 ? subs.split("&path=")[1].split("&")[0] : "/" //ws,wss 類型
        obfs = obfs + "obfs-uri=" + ouri + ", "
        var host = subs.indexOf("&obfsParam=") != -1 ? "obfs-host=" + subs.split("&obfsParam=")[1].split("&")[0] + ", " : ""
        obfs = obfs + host
    }
    if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
        var cert = Pcert != 0 || subs.indexOf("allowInsecure=1") != -1 ? "tls-verification=false, " : "tls-verification=true, "
        var tls13 = Ptls13 == 1 ? "tls13=true, " : ""
        obfs = obfs + cert + tls13
    }
    node = node + obfs + tag
    return node
}

//V2RayN uri轉換成 QUANX 格式
function V2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
    var cert = Pcert
    var tls13 = Ptls13
    var server = String(Base64.decode(subs.replace("vmess://", "")).trim()).split("\u0000")[0];
    var nss = [];
    if (server != "") {
        ss = JSON.parse(server);
        ip = "vmess=" + ss.add + ":" + ss.port;
        pwd = "password=" + ss.id;
        mtd = "method=aes-128-gcm"
        tag = "tag=" + decodeURIComponent(ss.ps);
        udp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
        tfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
        obfs = Pobfs(ss, cert, tls13);
        if (obfs == "" || obfs == undefined) {
            nss.push(ip, mtd, pwd, tfo, udp, tag)
        } else if(obfs != "NOT-SUPPORTTED"){
            nss.push(ip, mtd, pwd, obfs, tfo, udp, tag);
        }
        QX = nss.join(", ");
    }
    return QX
}

// Vmess obfs 參數
function Pobfs(jsonl, Pcert, Ptls13) {
    var obfsi = [];
    var cert = Pcert;
    tcert = cert == 0 ? "tls-verification=false" : "tls-verification=true";
    tls13 = Ptls13 == 1 ? "tls13=true" : "tls13=false"
    if (jsonl.net == "ws" && jsonl.tls == "tls") {
        obfs0 = "obfs=wss, " + tcert + ", " + tls13 + ", ";
        uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
        host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
        obfsi.push(obfs0 + host0 + uri0)
        return obfsi.join(", ")
    } else if (jsonl.net == "ws") {
        obfs0 = "obfs=ws";
        uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
        host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
        obfsi.push(obfs0, host0 + uri0);
        return obfsi.join(", ")
    } else if (jsonl.tls == "tls" && jsonl.net == "tcp") { // 過濾掉 h2/http 等類型 
        obfs0 = "obfs=over-tls, " + tcert + ", " + tls13;
        uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "";
        host0 = jsonl.host && jsonl.host != "" ? ", obfs-host=" + jsonl.host : "";
        obfsi.push(obfs0 + host0)
        return obfsi.join(", ")
    } else if(jsonl.net !="tcp"){ // 過濾掉 h2/http 等類型
      return "NOT-SUPPORTTED"
    } else {return ""}
}

//對.的特殊處理(in/out & rename中)
function Dot2(cnt) {
    cnt = cnt ? cnt.replace(/\\\./g, "這是個點") : ""
    return cnt
}

function ToDot(cnt) {
    cnt = cnt ? cnt.replace(/這是個點/g, ".") : ""
    return cnt
}

//正則篩選, 完整內容匹配
function Regex(content) {
    var Preg0 = RegExp(Preg, "i")
    cnt = content //.split("tag=")[1]
    if (Preg0.test(cnt)) {
        return content
    }
}

// 判斷節點過濾的函數
function Scheck(content, param) {
    name = content.split("tag=")[1].toUpperCase()
    param = param ? param.map(Dot2) : param // 對符號.的特殊處理
    if (param) {
        var flag = 0;
        for (var i = 0; i < param.length; i++) {
            var params = param[i].split(".").map(ToDot);
            const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
            if (params.every(checkpara)) {
                flag = 1
            }
        }//for
        return flag
    } else { //if param
        return 2
    }
}

//節點過濾，使用+連接多個關鍵字(邏輯"或"):in 為保留，out 為排除, "與"邏輯請用符號"."連接
function Filter(servers, Pin, Pout) {
    var Nlist = [];
    var Delist = [];
    var Nname = [];
    servers = servers.filter(Boolean)
    for (var i = 0; i < servers.length; i++) {
        if (Scheck(servers[i], Pin) != 0 && Scheck(servers[i], Pout) != 1) {
            Nlist.push(servers[i])
            Nname.push(servers[i].replace(/ /g, "").split("tag=")[1])
        } else { Delist.push(servers[i].replace(/ /g, "").split("tag=")[1]) } //記錄未被保留節點
    }//for
    var no = Delist.length <= 10 ? emojino[Delist.length] : Delist.length;
    var no1 = Nlist.length <= 10 ? emojino[Nlist.length] : Nlist.length;
    if (Pntf0 == 1 && Delist.length >= 1) {//通知部分
        if (Pin && no1 > 0) { //有 in 參數就通知保留部分
            $notify("👥 引用" + "⟦" + subtag + "⟧" + " 開始節點篩選", "🕹 篩選關鍵字: " + pfi + pfo, "☠️ 已保留以下 " + no1 + "個節點\n" + Nname.join(", "), sub_link);
        } else if (Pout && no > 0) {
            $notify("👥 引用" + "⟦" + subtag + "⟧" + " 開始節點篩選", "🕹 篩選關鍵字: " + pfi + pfo, "☠️ 已刪除以下 " + no + "個節點\n" + Delist.join(", "), sub_link);
        }
    } else if (no1 == 0 || no1 == null) { //無剩餘節點時強制通知
        $notify("‼️ ⟦" + subtag + "⟧" + "篩選後節點數為0️⃣", "⚠️ 請自行檢查原始連結以及篩選參數", link0, sub_link);
    }
    return Nlist
}

function FilterScript(servers, script) {
    $notify("🤖 啟用腳本進行篩選", "", script);
    try {
        const $ = Tools();
        eval(script);
        // extract server tags
        const nodes = Tools().getNodeInfo(servers);
        const IN = filter(nodes);
        const res = servers.filter((_, i) => IN[i]);
        if (res.length === 0) {
            $notify("‼️ ⟦" + subtag + "⟧" + "篩選後節點數為0️⃣", "⚠️ 請自行檢查原始連結以及篩選參數", link0, sub_link);
        }
        return res;
    } catch (err) {
        $notify("❌ 腳本篩選出現錯誤", "", err);
        return servers;
    }
}

//SSR 類型 URI 轉換 quanx 格式
function SSR2QX(subs, Pudp, Ptfo) {
    var nssr = []
    var cnt = Base64.decode(subs.split("ssr://")[1].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0]
    var obfshost = '';
    var oparam = '';
    if (cnt.split(":").length <= 6) { //排除難搞的 ipv6 節點
        type = "shadowsocks=";
        ip = cnt.split(":")[0] + ":" + cnt.split(":")[1];
        pwd = "password=" + Base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0];
        mtd = "method=" + cnt.split(":")[3];
        obfs = "obfs=" + cnt.split(":")[4] + ", ";
        ssrp = "ssr-protocol=" + cnt.split(":")[2];
        if (cnt.indexOf("obfsparam=") != -1) {
            obfshost = cnt.split("obfsparam=")[1].split("&")[0] != "" ? "obfs-host=" + Base64.decode(cnt.split("obfsparam=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/")).split(",")[0].split("\u0000")[0] + ", " : ""
        }
        if (cnt.indexOf("protoparam=") != -1) {
            oparam = cnt.split("protoparam=")[1].split("&")[0] != "" ? "ssr-protocol-param=" + Base64.decode(cnt.split("protoparam=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/")).split(",")[0].split("\u0000")[0] + ", " : ""
        }
        tag = "tag=" + (Base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/"))).split("\u0000")[0]
        pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
        ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
        nssr.push(type + ip, pwd, mtd, obfs + obfshost + oparam + ssrp, pudp, ptfo, tag)
        QX = nssr.join(", ")
    } else { QX = "" }
    return QX;
}

//Trojan 類型 URI 轉換成 QX
function TJ2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
    var ntrojan = []
    var cnt = subs.split("trojan://")[1]
    type = "trojan=";
    if (cnt.indexOf(":443") != -1) {
        ip = cnt.split("@")[1].split(":443")[0] + ":443";
    } else {
        ip = cnt.split("@")[1].split("?")[0].split("\n")[0].trim(); //非 443 埠的奇葩機場？
    }
    pwd = "password=" + cnt.split("@")[0];
    obfs = "over-tls=true";
    pcert = cnt.indexOf("allowInsecure=0") != -1 ? "tls-verification=true" : "tls-verification=false";
    thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split("&")[0]:""
    ptls13 = Ptls13 == 1 ? "tls13=true" : "tls13=false"
    if (Pcert == 0) { pcert = "tls-verification=false" }
    pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
    ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
    tag = cnt.indexOf("#") != -1 ? "tag=" + decodeURIComponent(cnt.split("#")[1]) : "tag= [trojan]" + ip
    ntrojan.push(type + ip, pwd, obfs, pcert, thost, ptls13, pudp, ptfo, tag)
    QX = ntrojan.filter(Boolean).join(", ");
    return QX;
}

//SS 類型 URI 轉換 quanx 格式
function SS2QX(subs, Pudp, Ptfo) {
    var nssr = []
    var cnt = subs.split("ss://")[1]
    if (cnt.split(":").length <= 6) { //排除難搞的 ipv6 節點
        type = "shadowsocks=";
        if (cnt.indexOf("@") != -1) {
            ip = cnt.split("@")[1].split("#")[0].split("/")[0];
            pwdmtd = Base64.decode(cnt.split("@")[0].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0].split(":")
        } else {
            var cnt0 = Base64.decode(cnt.split("#")[0].replace(/-/g, "+").replace(/_/g, "/").split("\u0000")[0]);
            ip = cnt0.split("@")[1].split("#")[0].split("/")[0];
            pwdmtd = cnt0.split("@")[0].split(":")
        }
        pwd = "password=" + pwdmtd[1];
        mtd = "method=" + pwdmtd[0];
        obfs = cnt.split("obfs%3D")[1] != null ? ", obfs=" + cnt.split("obfs%3D")[1].split("%3B")[0] : "";
        obfshost = cnt.split("obfs-host%3D")[1] != null ? ", obfs-host=" + cnt.split("obfs-host%3D")[1].split("&")[0].split("#")[0] : "";
        tag = "tag=" + decodeURIComponent(cnt.split("#")[1])
        pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
        ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
        nssr.push(type + ip, pwd, mtd + obfs + obfshost, pudp, ptfo, tag)
        QX = nssr.join(", ")
        return QX;
    }
}

//SSD 類型 URI 轉換 quanx 格式
function SSD2QX(subs, Pudp, Ptfo) {
    var j = 0
    var QX = []
    var cnt = JSON.parse(Base64.decode(subs.split("ssd://")[1]))
    var type = "shadowsocks=";
    var pwd = "password=" + cnt.password;
    var mtd = "method=" + cnt.encryption;
    var obfs = ""
    var obfshost = ""
    var port = cnt.port ? ":" + cnt.port : ""
    if (cnt.plugin_options) {
        obfs = cnt.plugin_options.split(";")[0] != null ? ", " + cnt.plugin_options.split(";")[0] : "";
        obfshost = cnt.plugin_options.split(";")[1] != null ? ", " + cnt.plugin_options.split(";")[1] : "";
    }
    pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
    ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
    for (var i in cnt.servers) {
        ip = cnt.servers[i].server;
        if (cnt.servers[i].plugin_options) {
            obfs = cnt.servers[i].plugin_options.split(";")[0] != null ? ", " + cnt.servers[i].plugin_options.split(";")[0] : "";
            obfshost = cnt.servers[i].plugin_options.split(";")[1] != null ? ", " + cnt.servers[i].plugin_options.split(";")[1] : "";
        }
        if (cnt.servers[i].encryption) {  //獨立的加密方式
            mtd = "method=" + cnt.servers[i].encryption
        }
        if (cnt.servers[i].password) {  //獨立的密碼
            pwd = "password=" + cnt.servers[i].password
        }
        if (ip.indexOf(".") > 0) { //排除難搞的 ipv6 節點
            port = cnt.servers[i].port ? ":" + cnt.servers[i].port : port;
            tag = "tag=" + cnt.servers[i].remarks;
            QX[j] = type + ip + port + ", " + pwd + ", " + mtd + obfs + obfshost + ", " + pudp + ", " + ptfo + ", " + tag;
            var j = j + 1;
        }
    }
    return QX;
}

// 糾正部分不規範的寫法(沒有把 tag 寫在最後)
function QXFix(cntf) {
  var cnti = cntf.replace(/tag\s+\=/,"tag=").replace("chacha20-poly","chacha20-ietf-poly")
  var hd = cnti.split("tag=")[0]
  var tag = "tag="+cnti.split("tag=")[1].split(",")[0]
  var tail = cnti.split(tag+",")
  cnti = tail.length<=1?  cntf : cntf //String(hd + tail[1] +"," + tag)
  return cnti
}

// 用於過濾非節點部分（比如整份配置中其它內容）,同時糾正部分不規範的寫法(沒有把 tag 寫在最後)
function isQuanX(content) {
    var cnts = content.split("\n");
    var nlist = []
    for (var i = 0; i < cnts.length; i++) {
        var cnti = cnts[i];
        if (cnti.indexOf("=") != -1 && cnti.indexOf("tag") != -1) {
            var cnt = cnti.split("=")[0].trim()
            if (cnt == "http" || cnt == "shadowsocks" || cnt == "trojan" || cnt == "vmess") {
                nlist.push(QXFix(cnti))
            }
        }
    }
    return nlist
}

//根據節點名排序(不含emoji 部分)
function QXSort(content, para) {
    var nlist = content;//.split("\n");
    if (para == 1) {
        return nlist.sort(ToTag)
    } else if (para == -1) {
        return nlist.sort(ToTagR)
    } else if(para == "x") {
        return shuffle(nlist)
    } else if(para == "0") {
        return nlist
    } else {
      return Sort_KWD (nlist,para) //關鍵字排序
    }
}
//正序
function ToTag(elem1, elem2) {
    var tag1 = elem1.split("tag")[1].split("=")[1].trim()
    var tag2 = elem2.split("tag")[1].split("=")[1].trim()
    res = tag1 > tag2 ? 1 : -1
    return res
}
//逆序
function ToTagR(elem1, elem2) {
    var tag1 = elem1.split("tag")[1].split("=")[1].trim()
    var tag2 = elem2.split("tag")[1].split("=")[1].trim()
    res = tag1 > tag2 ? -1 : 1
    return res
}
// 隨機洗牌排序
function shuffle(arr) {
    var input = arr;
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

//根據指定規則排序
function Sort_KWD (cnt,strs) {
  strlist = strs.indexOf("<") != -1 ? strs.split("<"):strs.split(">")
  regj = strlist.map(item => RegExp(item, "i"))
  dir = strs.indexOf("<") != -1 ? -1:1
  var arr =  new Array(strlist.length+1);   //表格有n行
  for(var i = 0;i < arr.length; i++){
    arr[i] = [];    //每行有列
  }
  for (var i =0; i<cnt.length ; i++) {
    flag = 0
    for (var j=0; j<strlist.length ; j++){
      if(regj[j].test(cnt[i])) {
        arr[j].push(cnt[i])
        flag = 1
        break
      } 
    }
    if (flag != 1){
      arr[strlist.length].push(cnt[i]) } // 不匹配項
  }
  //console.log(arr)
  newarr = MixArr(arr,dir)
  return newarr
}

function MixArr(cnt,dir){
  var cnt0=[]
  for (i=0; i<cnt.length-1; i++){
    //console.log(dir)
    cnt0 = dir ==1? cnt0.concat(cnt[i]):cnt0.concat(cnt[cnt.length-2-i])
  }
  cnt0 = dir ==1? cnt0.concat(cnt[cnt.length-1].sort(ToTag)):(cnt[cnt.length-1].sort(ToTagR)).concat(cnt0)
  return cnt0
}


//正則刪除節點名內的字元
function DelReg(content) {
    delreg = RegExp(delreg, "gmi")
    cnt0 = content.split("tag=")[0]
    cnt1 = content.split("tag=")[1]
    cnt = cnt0 + "tag=" + cnt1.replace(delreg, "")
    return cnt
}

//節點重命名
function Rename(str) {
    var server = str;
    if (server.indexOf("tag=") != -1) {
        hd = server.split("tag=")[0]
        name = server.split("tag=")[1].split(",")[0].trim()
        tail = server.split("tag=")[1].split(",").length <=1 ? "" : server.split("tag=")[1].split(name)[1]
        for (var i = 0; i < Prn.length; i++) {
            nname = Prn[i].split("@")[1] ? decodeURIComponent(Prn[i].split("@")[1]) : Prn[i].split("@")[1];
            oname = Prn[i].split("@")[0] ? decodeURIComponent(Prn[i].split("@")[0]) : Prn[i].split("@")[0];
            if (oname && nname) { //重命名
                var rn = escapeRegExp(oname)
                name = name.replace(new RegExp(rn, "gmi"), nname)
            } else if (oname && nname == "") {//首碼
                var nemoji = emoji_del(name)
                if (Pemoji == 1 || Pemoji == 2) { //判斷是否有重複 emoji，有則刪除舊有
                    name = name.replace(name.split(" ")[0] + " ", name.split(" ")[0] + " " + oname)
                } else { name = oname + name }
            } else if (nname && oname == "") {//尾碼
                name = name + nname
            } else if (oname && oname.indexOf("☠️") != -1) { //刪除特定字元，多字元用.連接
                hh = Dot2(oname.slice(0, oname.length - 2)).split(".") //符號.的特殊處理
                for (j = 0; j < hh.length; j++) {
                    var nn = escapeRegExp(ToDot(hh[j]))
                    var del = new RegExp(nn, "gmi");
                    name = name.replace(del, "")
                }
            } else if (oname == "" && nname == "") { //僅有@時，刪除@符號
                name = name.replace(/@/g, "")
            } else {
                name = name
            }
            nserver = hd + "tag=" + name + tail
        }
    } return nserver
}

function RenameScript(servers, script) {
    $notify("🤖 啟用腳本進行重命名", "", script);
    try {
        const $ = Tools().rename;
        // extract server tags
        const nodes = Tools().getNodeInfo(servers);
        eval(script);
        const newNames = rename(nodes);
        // rename nodes
        return servers.map((s, i) => s.split("tag=")[0] + "tag=" + newNames[i]);
    } catch (err) {
        $notify("❌ 腳本重命名出現錯誤", "", err);
        return servers;
    }

}

//刪除 emoji 
function emoji_del(str) {
    return str.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim();//unescape(escape(str).replace(/\%uD.{3}/g, ''));
}

//為節點名添加 emoji
function get_emoji(source, sname) {
    var cnt = source;
    var flag = 0;
    for (var key in cnt) {
        dd = cnt[key]
        for (i in dd) {
            if (sname.indexOf(dd[i]) != -1) {
                flag = 1;
                nname = key + " " + sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim(); // use regex to remove the original flag
                return nname
            }
        }
    }
    if (flag == 0) { return "🏴‍☠‍ " + sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim() }
}

//emoji 處理
function emoji_handle(servers, Pemoji) {
    var nlist = []
    var ser0 = servers
    for (var i = 0; i < ser0.length; i++) {
        if (ser0[i].indexOf("tag=") != -1) {
            var oname = ser0[i].split("tag=")[1].trim();
            var hd = ser0[i].split("tag=")[0];
            var nname = oname;//emoji_del(oname);
            var Lmoji = { "🏳️‍🌈": ["流量", "時間", "應急", "過期", "Bandwidth", "expire"], "🇦🇨": ["AC"], "🇦🇹": ["奧地利", "維也納"], "🇦🇺": ["AU", "Australia", "Sydney", "澳大利亞", "澳洲", "墨爾本", "悉尼"], "🇧🇪": ["BE", "比利時"], "🇧🇬": ["保加利亞", "Bulgaria"], "🇧🇷": ["BR", "Brazil", "巴西", "聖保羅"], "🇨🇦": ["Canada", "Waterloo", "加拿大", "蒙特利爾", "溫哥華", "楓葉", "楓葉", "滑鐵盧", "多倫多"], "🇨🇭": ["瑞士", "蘇黎世", "Switzerland"], "🇩🇪": ["DE", "German", "GERMAN", "德國", "德國", "法蘭克福"], "🇩🇰": ["丹麥"], "🇪🇸": ["ES", "西班牙", "Spain"], "🇪🇺": ["EU", "歐盟", "歐羅巴"], "🇫🇮": ["Finland", "芬蘭", "赫爾辛基"], "🇫🇷": ["FR", "France", "法國", "法國", "巴黎"], "🇬🇧": ["UK", "GB", "England", "United Kingdom", "英國", "倫敦", "英"], "🇲🇴": ["MO", "Macao", "澳門", "澳", "CTM"], "🇰🇿": ["哈薩克"], "🇭🇺": ["匈牙利", "Hungary"], "🇭🇰": ["HK", "Hongkong", "Hong Kong", "香港", "深港", "滬港", "呼港", "HKT", "HKBN", "HGC", "WTT", "CMI", "穗港", "京港", "港"], "🇮🇩": ["Indonesia", "印尼", "印尼", "雅加達"], "🇮🇪": ["Ireland", "愛爾蘭", "都柏林"], "🇮🇳": ["India", "印度", "孟買", "Mumbai"], "🇰🇵": ["KP", "朝鮮"], "🇰🇷": ["KR", "Korea", "KOR", "韓國", "首爾", "韓", "韓"], "🇱🇻": ["Latvia", "Latvija", "拉脫維亞"], "🇲🇽️": ["MEX", "MX", "墨西哥"], "🇲🇾": ["MY", "Malaysia", "馬來西亞", "吉隆玻"], "🇳🇱": ["NL", "Netherlands", "荷蘭", "荷蘭", "尼德蘭", "阿姆斯特丹"], "🇵🇭": ["PH", "Philippines", "菲律賓"], "🇷🇴": ["RO", "羅馬尼亞"], "🇷🇺": ["RU", "Russia", "俄羅斯", "俄羅斯", "伯力", "莫斯科", "聖彼德堡", "西伯利亞", "新西伯利亞", "京俄", "杭俄"], "🇸🇦": ["沙特", "迪拜"], "🇸🇪": ["SE", "Sweden"], "🇸🇬": ["SG", "Singapore", "新加坡", "獅城", "滬新", "京新", "泉新", "穗新", "深新", "杭新", "廣新"], "🇹🇭": ["TH", "Thailand", "泰國", "泰國", "曼谷"], "🇹🇷": ["TR", "Turkey", "土耳其", "伊斯坦布爾"], "🇹🇼": ["TW", "Taiwan", "臺灣", "臺北", "台中", "新北", "彰化", "CHT", "台", "HINET"], "🇺🇸": ["US", "USA", "America", "United States", "美國", "美", "京美", "波特蘭", "達拉斯", "俄勒岡", "鳳凰城", "費利蒙", "矽谷", "矽穀", "拉斯維加斯", "洛杉磯", "聖約瑟", "聖克拉拉", "西雅圖", "芝加哥", "滬美", "哥倫布", "紐約"], "🇻🇳": ["VN", "越南", "胡志明市"], "🇮🇹": ["Italy", "IT", "Nachash", "義大利", "米蘭", "義大利"], "🇿🇦": ["South Africa", "南非"], "🇦🇪": ["United Arab Emirates", "阿聯酋"], "🇯🇵": ["JP", "Japan", "日", "日本", "東京", "大阪", "埼玉", "滬日", "穗日", "川日", "中日", "泉日", "杭日", "深日", "遼日", "廣日"], "🇦🇷": ["AR", "阿根廷"], "🇳🇴": ["Norway", "挪威", "NO"], "🇨🇳": ["CN", "China", "回國", "中國", "江蘇", "北京", "上海", "廣州", "深圳", "杭州", "徐州", "青島", "寧波", "鎮江", "back"] }
            if (Pemoji == 1) {
                str1 = JSON.stringify(Lmoji)
                aa = JSON.parse(str1)
                var nname = get_emoji(aa, nname)
            } else if (Pemoji == 2) {
                str1 = JSON.stringify(Lmoji)
                bb = JSON.parse(str1.replace(/🇹🇼/g, " 🇨🇳"))
                var nname = get_emoji(bb, nname)
            } else if (Pemoji == -1) {
                nname = emoji_del(oname);
            }
            var nserver = hd + "tag=" + nname.replace(" ️", " ").trim()
            nlist.push(nserver)
        }
    }
    return nlist
}

//Surge2QX 轉換主函數
function Surge2QX(conf) {
    var QXlist = conf.split("\n").map(isSurge).filter(Boolean)
    var Nlist = []
    var node=""
    for (var i = 0; i < QXlist.length; i++) {
        var cnt = QXlist[i];
        if (cnt.split("=")[1].split(",")[0].indexOf("trojan") != -1) {
            node = Strojan2QX(cnt)//surge 3的trojan
        } else if (cnt.split("=")[1].split(",")[0].indexOf("http") != -1) {
            node = Shttp2QX(cnt) //surge 3的http
        } else if (cnt.split("=")[1].split(",")[0].indexOf("vmess") != -1) {
            node = SVmess2QX(cnt) //surge 3的Vmess
        } else if (cnt.split("=")[1].split(",")[0].indexOf("ss") != -1) {
            node = SSS2QX(cnt) //surge 3的SS
        } else if (cnt.split("=")[1].split(",")[0].indexOf("custom") != -1) {
            node = SCT2QX(cnt) //surge2寫法
        }
        node = Pudp0 != 0 ? XUDP(node,Pudp0) : node
        node = Ptfo0 != 0 ? XTFO(node,Ptfo0) : node
        Nlist.push(node)
    }
    return (Nlist)
}

// surge2 中的 SS 類型寫法(custom)
//🇷🇺 俄羅斯 GIA = custom, ip, 152, aes-128-gcm, password123, https://xxx/download/SSEncrypt.module, obfs=tls, obfs-host=xxx.windows.com, udp-relay=true
function SCT2QX(content) {
    var cnt = content;
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var pmtd = "method=" + cnt.split(",")[3].trim();
    var pwd = "password=" + cnt.split(",")[4].trim();
    if (cnt.indexOf("obfs") != -1) {
        pobfs = "obfs=" + cnt.replace(/obfs-host/, "").split("obfs")[1].split(",")[0].split("=")[1]
    } else { pobfs = "" }
    var phost = cnt.indexOf("obfs-host") != -1 ? "obfs-host" + cnt.split("obfs-host")[1].split(",")[0].trim() : "";
    if (phost != "") {
        pobfs = pobfs + ", " + phost
    }
    var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var pudp = paraCheck(cnt, "udp-relay") == "true" ? "udp-relay=true" : "udp-relay=false";
    var nserver = pobfs != "" ? "shadowsocks= " + [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(", ") : "shadowsocks= " + [ipport, pmtd, pwd, ptfo, pudp, tag].join(", ");
    return nserver
}


// surge3 中的 SS 類型
function SSS2QX(content) {
    var cnt = content;
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var pmtd = "method=" + cnt.split("encrypt-method")[1].split(",")[0].split("=")[1];
    var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1];
    if (cnt.indexOf("obfs") != -1) {
        pobfs = "obfs=" + cnt.replace(/obfs-host/, "").split("obfs")[1].split(",")[0].split("=")[1]
    } else { pobfs = "" }
    var phost = cnt.indexOf("obfs-host") != -1 ? "obfs-host" + cnt.split("obfs-host")[1].split(",")[0].trim() : "";
    if (phost != "") {
        pobfs = pobfs + ", " + phost
    }
    var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var pudp = paraCheck(cnt, "udp-relay") == "true" ? "udp-relay=true" : "udp-relay=false";
    var nserver = pobfs != "" ? "shadowsocks= " + [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(", ") : "shadowsocks= " + [ipport, pmtd, pwd, ptfo, pudp, tag].join(", ");
    return nserver
}

// surge 中的 Vmess 類型
function SVmess2QX(content) {
    var cnt = content;
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var puname = cnt.indexOf("username") != -1 ? "password=" + cnt.split("username")[1].split(",")[0].split("=")[1].trim() : "";
    var pmtd = "method=aes-128-gcm";
    var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
    var pverify = paraCheck(cnt, "skip-cert-verify") == "true" ? "tls-verification=false" : "tls-verification=true";
    if (paraCheck(cnt.replace(/tls13/, ""), "tls") == "true" && paraCheck(cnt.replace(/ws-header/, ""), "ws") == "true") {
        pobfs = "obfs=wss" + ", " + ptls13 + ", " + pverify
    } else if (paraCheck(cnt.replace(/ws-header/, ""), "ws") == "true") {
        pobfs = "obfs=ws"
    } else if (paraCheck(cnt.replace(/tls13/, ""), "tls") != "false") {
        pobfs = "obfs=over-tls" + ", " + ptls13 + ", " + pverify
    } else if (paraCheck(cnt.replace(/ws-header/, ""), "ws") == "false") {
        pobfs = ""
    }
    var puri = paraCheck(cnt, "ws-path") != "false" ? "obfs-uri=" + cnt.split("ws-path")[1].split(",")[0].split("=")[1].trim() : "obfs-uri=/"
    var phost = cnt.indexOf("ws-headers") != -1 ? "obfs-host=" + cnt.split("ws-headers")[1].split(",")[0].split("=")[1].split(":")[1].trim() : "";
    if (pobfs.indexOf("ws" || "wss") != -1) {
        if (phost != "") {
            pobfs = pobfs + ", " + puri + ", " + phost
        } else { pobfs = pobfs + ", " + puri }
    }
    var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var nserver = pobfs != "" ? "vmess= " + [ipport, puname, pmtd, pobfs, ptfo, tag].join(", ") : "vmess= " + [ipport, puname, pmtd, ptfo, tag].join(", ");
    return nserver
}

// 用於過濾非節點部分（比如整份配置中其它內容）
function isSurge(content) {
  if (content.indexOf("=") != -1) {
    cnt = content.split("=")[1].split(",")[0].trim()
    if (cnt == "http" || cnt == "ss" || cnt == "trojan" || cnt == "vmess" || cnt == "custom") {
        return content
    }
  }
}
// 用於參數檢查
function paraCheck(content, para) {
  content=content.replace(/ /g,"")
  if (content.indexOf(para+"=") == -1) {
    return "false"
  } else {
      //console.log(para)
    return content.split(para+"=")[1].split(",")[0].trim()
  }
}
//surge中 trojan 類型轉換
function Strojan2QX(content) {
  var cnt = content;
  var tag = "tag=" + cnt.split("=")[0].trim();
  var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
  var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim();
  var ptls = "over-tls=true";
  var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
  var pverify = paraCheck(cnt, "skip-cert-verify") == "true" ? "tls-verification=false" : "tls-verification=true";
  var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
  var nserver = "trojan= " + [ipport, pwd, ptls, ptfo, ptls13, pverify, tag].join(", ");
  return nserver
}
// surge 中的 http 類型
function Shttp2QX(content) {
  var cnt = content;
  var tag = "tag=" + cnt.split("=")[0].trim();
  var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
  var puname = cnt.indexOf("username") != -1 ? "username=" + cnt.split("username")[1].split(",")[0].split("=")[1].trim() : "";
  var pwd = cnt.indexOf("password") != -1 ? "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim() : "";
  var ptls = cnt.split("=")[1].split(",")[0].trim() == "https" ? "over-tls=true" : "over-tls=false";
  var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
  if (ptls == "over-tls=true") {
    var pverify = paraCheck(cnt, "skip-cert-verify") == "true" ? "tls-verification=false" : "tls-verification=true";
    var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
    ptls = ptls + ", " + pverify + ", " + ptls13
  }
  var nserver = puname != "" ? "http= " + [ipport, puname, pwd, ptls, ptfo, tag].join(", ") : "http= " + [ipport, ptls, ptfo, tag].join(", ");
  return nserver
}

function Loon2QX(cnt) {
  var type = cnt.split("=")[1].split(",")[0].trim()
  var node = ""
  if (type == "Shadowsocks") { //ss 類型
      node = LoonSS2QX(cnt)
  } else if (type == "ShadowsocksR") { //ssr 類型
      node = LoonSSR2QX(cnt)
  }
  return node
}
//Loon 的 ss 部分
function LoonSS2QX(cnt) {
  var node = "shadowsocks="
  var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
  var mtd = "method=" + cnt.split(",")[3].trim()
  var pwd = "password=" + cnt.split(",")[4].trim().split("\"")[1]
  var obfs = cnt.split(",").length == 7 ? ", " + ["obfs=" + cnt.split(",")[5].trim(), "obfs-host=" + cnt.split(",")[6].trim()].join(",") : ""
  var tag = ", tag=" + cnt.split("=")[0].trim()
  node = node + [ip, mtd, pwd].join(", ") + obfs + tag
  return node
}

//Loon 的 ssr 部分
//# SSR 格式：名稱=協定類型,位址,埠,加密方式,密碼,協定類型,{協定參數},混淆類型,{混淆參數}
//3 = ShadowsocksR, 1.2.3.4, 443, aes-256-cfb,"password",auth_aes128_md5,{},tls1.2_ticket_auth,{}
function LoonSSR2QX(cnt) {
  var node = "shadowsocks="
  var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
  var mtd = "method=" + cnt.split(",")[3].trim()
  var pwd = "password=" + cnt.split(",")[4].trim().split("\"")[1]
  var ssrp = "ssr-protocol=" + cnt.split(",")[5].trim()
  var ssrpara = "ssr-protocol-param=" + cnt.split(",")[6].replace(/\{|\}/g, "").trim()
  var obfs = "obfs=" + cnt.split(",")[7].trim()
  var obfshost = "obfs-host=" + cnt.split(",")[8].replace(/\{|\}/g, "").trim()
  var tag = ", tag=" + cnt.split("=")[0].trim()
  node = node + [ip, mtd, pwd, ssrp, ssrpara, obfs, obfshost].join(", ") + tag
  return node
}


// fix yaml parse mistakes
function YAMLFix(cnt){
  if (cnt.indexOf("{") != -1){
      cnt = cnt.replace(/(^|\n)- /g, "$1  - ").replace(/    - /g,"  - ").replace(/:(?!\s)/g,": ").replace(/\,\"/g,", \"").replace(/: {/g, ": {,     ").replace(/, (host|path|tls|mux|skip)/g,",     $1")
      //console.log(cnt)
      cnt = cnt.replace(/{name: /g,"{name: \"").replace(/, server:/g,"\", server:")
      cnt = cnt.replace(/{|}/g,"").replace(/,/g,"\n   ")
    }
    cnt = cnt.replace(/  -\n.*name/g,"  - name").replace(/\$|\`/g,"").split("proxy-providers:")[0].split("proxy-groups:")[0].replace(/\"(name|type|server|port|cipher|password|)\"/g,"$1")
    //console.log(cnt)
    cnt = cnt.indexOf("proxies:") == -1? "proxies:\n" + cnt :"proxies:"+cnt.split("proxies:")[1]
    return cnt
}

// Clash parser
function Clash2QX(cnt) {
  const yaml = new YAML()
  var aa = JSON.stringify(yaml.parse(YAMLFix(cnt)))
  var bb = JSON.parse(aa).proxies
  //$notify("YAML Parse", "content", JSON.stringify(bb))
  //console.log(bb)
  var nl = bb.length
  var nodelist=[]
  var node=""
  for (i=0; i<nl; i++){
    node=bb[i]
    typec = node.type
    if (typec == "ss") {
      node = CSS2QX(node)
    } else if (typec == "ssr"){
      node = CSSR2QX(node)
    } else if (typec == "vmess"){
      node = CV2QX(node)
    } else if (typec == "trojan"){
      node = CT2QX(node)
    } else if (typec == "http"){
      node = CH2QX(node)
    }
    node = Pudp0 != 0 ? XUDP(node,Pudp0) : node
    node = Ptfo0 != 0 ? XTFO(node,Ptfo0) : node
    nodelist.push(node)
  }
  return nodelist.join("\n")
}

//Clash ss type server
function CSS2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi,"")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  mtd = "method="+ cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  obfs = cnt["plugin-opts"] ? "obfs=" + cnt["plugin-opts"].mode : ""
  ohost = cnt["plugin-opts"] ? "obfs-host=" + cnt["plugin-opts"].host : ""
  ouri = ""
  cert = ""
  if (obfs.indexOf("websocket") != -1) {
      obfs = cnt["plugin-opts"].tls? "obfs=wss" : "obfs=ws"
      ohost = cnt["plugin-opts"].host? "obfs-host=" + cnt["plugin-opts"].host:""
      ouri = cnt["plugin-opts"].path? "obfs-uri=" + cnt["plugin-opts"].path: ""
    if (obfs == "obfs=wss") { // tls verification
      cert = Pcert0 == 1? "" : "tls-verification =false"}
  }
  node = "shadowsocks="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, tag].filter(Boolean).join(", ")
  return node
}

//Clash ssr type server
function CSSR2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi,"")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  mtd = "method="+ cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  prot = "ssr-protocol=" + cnt.protocol 
  ppara = "ssr-protocol-param=" + cnt["protocol-param"]
  obfs = "obfs=" + cnt.obfs
  ohost = "obfs-host=" + cnt["obfs-param"]
  node = "shadowsocks="+[ipt, pwd, mtd, udp, tfo, prot, ppara, obfs, ohost, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}

//Clash vmess type server
function CV2QX(cnt) {
	tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
	ipt = cnt.server+":"+cnt.port
	pwd = "password=" + cnt.uuid
	mtd = "method="+ "aes-128-gcm" //cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  obfs = ""
  if (cnt.network == "ws" && cnt.tls) {
      obfs = "obfs=wss"
  } else if (cnt.network == "ws"){
      obfs = "obfs=ws"
  } else if (cnt.tls){
      obfs = "obfs=over-tls"
  }
  ohost = cnt["ws-headers"]? "obfs-host=" + cnt["ws-headers"]["Host"] : ""
  ouri = cnt["ws-path"]? "obfs-uri="+cnt["ws-path"] : ""
  cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
  if (Pcert0 == 0 && cnt.tls) {cert = "tls-verification=false"}
  node = "vmess="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}

//Clash Trojan
function CT2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  otls = "over-tls=true"
  cert = cnt["skip-cert-verify"] ? "tls-verification=false" : "tls-verification=true"
  if (Pcert0 == 0) { 
    cert = "tls-verification=false" }
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  node = "trojan="+[ipt, pwd, otls, cert, udp, tfo, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node

}

// Clash http
function CH2QX(cnt){
    tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
    ipt = cnt.server+":"+cnt.port
    uname = cnt.username ? "username=" + cnt.username : ""
    pwd = cnt.password ? "password=" + cnt.password : ""
    tls = cnt.tls ? "over-tls=true" : ""
    cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
    if (Pcert0 == 0) { cert = "tls-verification=false" }
    node = "http="+[ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(", ")
    //console.log(node)
    return node
}

// UDP/TFO 參數 (強制 surge/quanx 類型轉換)
function XUDP(cnt,pudp) {
    var udp = pudp == 1? "udp-relay=true, " : "udp-relay=false, "
    if(cnt.indexOf("udp-relay") != -1){
        var cnt0 = cnt.replace(RegExp("udp\-relay.*?\,", "gmi"), udp)
    }else{
        var cnt0 = cnt.replace(new RegExp("tag.*?\=", "gmi"), udp+"tag=")
    }
    return cnt0
}

function XTFO(cnt,ptfo) {
    var tfo = ptfo == 1? "fast-open=true, " : "fast-open=false, "
    if(cnt.indexOf("fast-open") != -1){
        var cnt0 = cnt.replace(RegExp("fast\-open.*?\,", "gmi"), tfo)
    }else{
        var cnt0 = cnt.replace(RegExp("tag.*?\=", "gmi"), tfo+"tag=")
    }
    return cnt0
}

//比較完美的一款 base64 encode/decode 工具
/*
 *  base64.js: https://github.com/dankogai/js-base64#readme
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
//base64 完畢
function Base64Code() {
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function (bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                    + fromCharCode(0x80 | (cc & 0x3f)))
                    : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                        + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                        + fromCharCode(0x80 | (cc & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                + fromCharCode(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function (u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
            ord = ccc.charCodeAt(0) << 16
                | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
                | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
            chars = [
                b64chars.charAt(ord >>> 18),
                b64chars.charAt((ord >>> 12) & 63),
                padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
                padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
            ];
        return chars.join('');
    };
    var btoa = function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    // var _encode = function(u) {
    // 	var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
    // 	return isUint8Array ? u.toString('base64')
    // 		: btoa(utob(String(u)));
    // }
    this.encode = function (u) {
        var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
        return isUint8Array ? u.toString('base64')
            : btoa(utob(String(u)));
    }
    var uriencode = function (u, urisafe) {
        return !urisafe
            ? _encode(u)
            : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function (u) { return uriencode(u, true) };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)),
                    offset = cp - 0x10000;
                return (fromCharCode((offset >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
            case 3:
                return fromCharCode(
                    ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2))
                );
            default:
                return fromCharCode(
                    ((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1))
                );
        }
    };
    var btou = function (b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function (cccc) {
        var len = cccc.length,
            padlen = len % 4,
            n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
                | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
                | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0)
                | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
            chars = [
                fromCharCode(n >>> 16),
                fromCharCode((n >>> 8) & 0xff),
                fromCharCode(n & 0xff)
            ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = function (a) {
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function (a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    // var _decode = buffer ?
    // 	buffer.from && Uint8Array && buffer.from !== Uint8Array.from
    // 	? function(a) {
    // 		return (a.constructor === buffer.constructor
    // 				? a : buffer.from(a, 'base64')).toString();
    // 	}
    // 	: function(a) {
    // 		return (a.constructor === buffer.constructor
    // 				? a : new buffer(a, 'base64')).toString();
    // 	}
    // 	: function(a) { return btou(_atob(a)) };
    var _decode = function (u) {
        return btou(_atob(u))
    }
    this.decode = function (a) {
        return _decode(
            String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        ).replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    };
}


/*
YAML parser for Javascript
Author: Diogo Costa

This program is released under the MIT License as follows:

Copyright (c) 2011 Diogo Costa (costa.h4evr@gmail.com)

*/

function YAML() {
        var errors = [],
                reference_blocks = [],
                processing_time = 0,
                regex =
                {
                        "regLevel" : new RegExp("^([\\s\\-]+)"),
                        "invalidLine" : new RegExp("^\\-\\-\\-|^\\.\\.\\.|^\\s*#.*|^\\s*$"),
                        "dashesString" : new RegExp("^\\s*\\\"([^\\\"]*)\\\"\\s*$"),
                        "quotesString" : new RegExp("^\\s*\\\'([^\\\']*)\\\'\\s*$"),
                        "float" : new RegExp("^[+-]?[0-9]+\\.[0-9]+(e[+-]?[0-9]+(\\.[0-9]+)?)?$"),
                        "integer" : new RegExp("^[+-]?[0-9]+$"),
                        "array" : new RegExp("\\[\\s*(.*)\\s*\\]"),
                        "map" : new RegExp("\\{\\s*(.*)\\s*\\}"),
                        "key_value" : new RegExp("([a-z0-9_-][ a-z0-9_-]*):( .+)", "i"),
                        "single_key_value" : new RegExp("^([a-z0-9_-][ a-z0-9_-]*):( .+?)$", "i"),
                        "key" : new RegExp("([a-z0-9_-][ a-z0-9_-]+):( .+)?", "i"),
                        "item" : new RegExp("^-\\s+"),
                        "trim" : new RegExp("^\\s+|\\s+$"),
                        "comment" : new RegExp("([^\\\'\\\"#]+([\\\'\\\"][^\\\'\\\"]*[\\\'\\\"])*)*(#.*)?")
                };
 
         /**
            * @class A block of lines of a given level.
            * @param {int} lvl The block's level.
            * @private
            */
        function Block(lvl) {
                return {
                        /* The block's parent */
                        parent: null,
                        /* Number of children */
                        length: 0,
                        /* Block's level */
                        level: lvl,
                        /* Lines of code to process */
                        lines: [],
                        /* Blocks with greater level */
                        children : [],
                        /* Add a block to the children collection */
                        addChild : function(obj) {
                                this.children.push(obj);
                                obj.parent = this;
                                ++this.length;
                        }
                };
        }

        // function to create an XMLHttpClient in a cross-browser manner

        function fromURL(src, ondone) {
                var client = createXMLHTTPRequest();
                client.onreadystatechange = function() {
                        if (this.readyState == 4 || this.status == 200) {
                                var txt = this.responseText;
                                ondone(YAML.eval0(txt));
                        }
                };
                client.open('GET', src);
                client.send();
        }

        function parser(str) {
                var regLevel = regex["regLevel"];
                var invalidLine = regex["invalidLine"];
                var lines = str.split("\n");
                var m;
                var level = 0, curLevel = 0;
                
                var blocks = [];
                
                var result = new Block(-1);
                var currentBlock = new Block(0);
                result.addChild(currentBlock);
                var levels = [];
                var line = "";
                
                blocks.push(currentBlock);
                levels.push(level);
                
                for(var i = 0, len = lines.length; i < len; ++i) {
                        line = lines[i];
                        
                        if(line.match(invalidLine)) {
                                continue;
                        }
                
                        if(m = regLevel.exec(line)) {
                                level = m[1].length;
                        } else
                                level = 0;
                        
                        if(level > curLevel) {
                                var oldBlock = currentBlock;
                                currentBlock = new Block(level);
                                oldBlock.addChild(currentBlock);
                                blocks.push(currentBlock);
                                levels.push(level);
                        } else if(level < curLevel) {                
                                var added = false;

                                var k = levels.length - 1;
                                for(; k >= 0; --k) {
                                        if(levels[k] == level) {
                                                currentBlock = new Block(level);
                                                blocks.push(currentBlock);
                                                levels.push(level);
                                                if(blocks[k].parent!= null)
                                                        blocks[k].parent.addChild(currentBlock);
                                                added = true;
                                                break;
                                        }
                                }
                                
                                if(!added) {
                                        errors.push("Error: Invalid indentation at line " + i + ": " + line);
                                        return;
                                }
                        }
                        
                        currentBlock.lines.push(line.replace(regex["trim"], ""));
                        curLevel = level;
                }
                
                return result;
        }
        
        function processValue(val) {
                val = val.replace(regex["trim"], "");
                var m = null;

                if(val == 'true') {
                        return true;
                } else if(val == 'false') {
                        return false;
                } else if(val == '.NaN') {
                        return Number.NaN;
                } else if(val == 'null') {
                        return null;
                } else if(val == '.inf') {
                        return Number.POSITIVE_INFINITY;
                } else if(val == '-.inf') {
                        return Number.NEGATIVE_INFINITY;
                } else if(m = val.match(regex["dashesString"])) {
                        return m[1];
                } else if(m = val.match(regex["quotesString"])) {
                        return m[1];
                } else if(m = val.match(regex["float"])) {
                        return parseFloat(m[0]);
                } else if(m = val.match(regex["integer"])) {
                        return parseInt(m[0]);
                } else if( !isNaN(m = Date.parse(val))) {
                        return new Date(m);
                } else if(m = val.match(regex["single_key_value"])) {
                        var res = {};
                        res[m[1]] = processValue(m[2]);
                        return res;
                } else if(m = val.match(regex["array"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                                } else if(str === false && (c == '[' || c == '{')) {
                                        ++count;
                                } else if(str === false && (c == ']' || c == '}')) {
                                        --count;
                                } else if(str === false && count == 0 && c == ',') {
                                        res.push(processValue(content));
                                        content = "";
                                        continue;
                                }
                                
                                content += c;
                        }
                        
                        if(content.length > 0)
                                res.push(processValue(content));
                        return res;
                } else if(m = val.match(regex["map"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                                } else if(str === false && (c == '[' || c == '{')) {
                                        ++count;
                                } else if(str === false && (c == ']' || c == '}')) {
                                        --count;
                                } else if(str === false && count == 0 && c == ',') {
                                        res.push(content);
                                        content = "";
                                        continue;
                                }
                                
                                content += c;
                        }
                        
                        if(content.length > 0)
                                res.push(content);
                                
                        var newRes = {};
                        for(var j = 0, lenJ = res.length; j < lenJ; ++j) {
                                if(m = res[j].match(regex["key_value"])) {
                                        newRes[m[1]] = processValue(m[2]);
                                }
                        }
                        
                        return newRes;
                } else 
                        return val;
        }
        
        function processFoldedBlock(block) {
                var lines = block.lines;
                var children = block.children;
                var str = lines.join(" ");
                var chunks = [str];
                for(var i = 0, len = children.length; i < len; ++i) {
                        chunks.push(processFoldedBlock(children[i]));
                }
                return chunks.join("\n");
        }
        
        function processLiteralBlock(block) {
                var lines = block.lines;
                var children = block.children;
                var str = lines.join("\n");
                for(var i = 0, len = children.length; i < len; ++i) {
                        str += processLiteralBlock(children[i]);
                }
                return str;
        }
        
        function processBlock(blocks) {
                var m = null;
                var res = {};
                var lines = null;
                var children = null;
                var currentObj = null;
                
                var level = -1;
                
                var processedBlocks = [];
                
                var isMap = true;
                
                for(var j = 0, lenJ = blocks.length; j < lenJ; ++j) {
                        
                        if(level != -1 && level != blocks[j].level)
                                continue;
                
                        processedBlocks.push(j);
                
                        level = blocks[j].level;
                        lines = blocks[j].lines;
                        children = blocks[j].children;
                        currentObj = null;
                
                        for(var i = 0, len = lines.length; i < len; ++i) {
                                var line = lines[i];

                                if(m = line.match(regex["key"])) {
                                        var key = m[1];
                                        
                                        if(key[0] == '-') {
                                                key = key.replace(regex["item"], "");
                                                if (isMap) { 
                                                        isMap = false;
                                                        if (typeof(res.length) === "undefined") {
                                                                res = [];
                                                        } 
                                                }
                                                if(currentObj != null) res.push(currentObj);
                                                currentObj = {};
                                                isMap = true;
                                        }
                                        
                                        if(typeof m[2] != "undefined") {
                                                var value = m[2].replace(regex["trim"], "");
                                                if(value[0] == '&') {
                                                        var nb = processBlock(children);
                                                        if(currentObj != null) currentObj[key] = nb;
                                                        else res[key] = nb;
                                                        reference_blocks[value.substr(1)] = nb;
                                                } else if(value[0] == '|') {
                                                        if(currentObj != null) currentObj[key] = processLiteralBlock(children.shift());
                                                        else res[key] = processLiteralBlock(children.shift());
                                                } else if(value[0] == '*') {
                                                        var v = value.substr(1);
                                                        var no = {};
                                                        
                                                        if(typeof reference_blocks[v] == "undefined") {
                                                                errors.push("Reference '" + v + "' not found!");
                                                        } else {
                                                                for(var k in reference_blocks[v]) {
                                                                        no[k] = reference_blocks[v][k];
                                                                }
                                                                
                                                                if(currentObj != null) currentObj[key] = no;
                                                                else res[key] = no;
                                                        }
                                                } else if(value[0] == '>') {
                                                        if(currentObj != null) currentObj[key] = processFoldedBlock(children.shift());
                                                        else res[key] = processFoldedBlock(children.shift());
                                                } else {
                                                        if(currentObj != null) currentObj[key] = processValue(value);
                                                        else res[key] = processValue(value);
                                                }
                                        } else {
                                                if(currentObj != null) currentObj[key] = processBlock(children);
                                                else res[key] = processBlock(children);                        
                                        }
                                } else if(line.match(/^-\s*$/)) {
                                        if (isMap) { 
                                                isMap = false;
                                                if (typeof(res.length) === "undefined") {
                                                        res = [];
                                                } 
                                        }
                                        if(currentObj != null) res.push(currentObj);
                                        currentObj = {};
                                        isMap = true;
                                        continue;
                                } else if(m = line.match(/^-\s*(.*)/)) {
                                        if(currentObj != null) 
                                                currentObj.push(processValue(m[1]));
                                        else {
                                                if (isMap) { 
                                                        isMap = false;
                                                        if (typeof(res.length) === "undefined") {
                                                                res = [];
                                                        } 
                                                }
                                                res.push(processValue(m[1]));
                                        }
                                        continue;
                                }
                        }
                        
                        if(currentObj != null) {
                                if (isMap) { 
                                        isMap = false;
                                        if (typeof(res.length) === "undefined") {
                                                res = [];
                                        } 
                                }
                                res.push(currentObj);
                        }
                }
                
                for(var j = processedBlocks.length - 1; j >= 0; --j) {
                        blocks.splice.call(blocks, processedBlocks[j], 1);
                }

                return res;
        }
                
        function semanticAnalysis(blocks) {
                var res = processBlock(blocks.children);
                return res;
        }
        
        function preProcess(src) {
                var m;
                var lines = src.split("\n");
                
                var r = regex["comment"];
                
                for(var i in lines) {
                        if(m = lines[i].match(r)) {
/*                var cmt = "";
                                if(typeof m[3] != "undefined")
                                        lines[i] = m[1];
                                else if(typeof m[3] != "undefined")
                                        lines[i] = m[3]; 
                                else
                                        lines[i] = "";
                                        */
                                if(typeof m[3] !== "undefined") {
                                        lines[i] = m[0].substr(0, m[0].length - m[3].length);
                                }
                        }
                }
                
                return lines.join("\n");
        }
        
        this.parse = function eval0(str) {
                errors = [];
                reference_blocks = [];
                processing_time = (new Date()).getTime();
                var pre = preProcess(str)
                var doc = parser(pre);
                var res = semanticAnalysis(doc);
                processing_time = (new Date()).getTime() - processing_time;
                
                return res;
        }

};


/***********************************************************************************************/
function Tools() {
    const filter = (src, ...regex) => {
        const initial = [...Array(src.length).keys()].map(() => false);
        return regex.reduce((a, expr) => OR(a, src.map(item => expr.test(item))), initial)
    }

    const rename = {
        replace: (src, old, now) => {
            return src.map(item => item.replace(old, now));
        },

        delete: (src, ...args) => {
            return src.map(item => args.reduce((now, expr) => now.replace(expr, ''), item));
        },

        trim: (src) => {
            return src.map(item => item.trim().replace(/[^\S\r\n]{2,}/g, ' '));
        }
    }

    const getNodeInfo = servers => {
        const nodes = {
            names: servers.map(s => s.split("tag=")[1]),
            types: servers.map(s => {
                const type = s.match(/^(vmess|trojan|shadowsocks|http)=/);
                return type ? type[1] : 'unknown';
            })
        };
        return nodes;
    }


    return {
        filter, rename, getNodeInfo
    }
}

function AND(...args) {
    return args.reduce((a, b) => a.map((c, i) => b[i] && c));
}

function OR(...args) {
    return args.reduce((a, b) => a.map((c, i) => b[i] || c))
}

function NOT(array) {
    return array.map(c => !c);
}

