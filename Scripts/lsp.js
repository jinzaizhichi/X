/******************************************
 * @name 绿色产业链通杀脚本
 * @description 好男人专用脚本
 * @statement 仅供学习交流|禁止用于商业用途|违者后果自负|转载请注明来源
 * @author 𝒀𝒖𝒉𝒆𝒏𝒈
 * @channel https://t.me/yqc_123
 * @update 20231018 删除91av, 增加抖阴Porn
 * @version 1.0.3
 * @url https://50.aff009.net/af/jDM3U        | 50度灰
        https://dbf4801.zfijby.com/aff-hVbkx  | 91短视频
        http://b.sir010.co/                   | 撸先生
        https://ttt.aff009.net/af/caJtT       | 汤头条
        https://app.wmq.life/aff-nVJM         | 微密圈
        https://p4.gv009.fun/#/home           | 小蓝视频
        https://app.xttworld.com/af/bnjU      | 她趣
        https://dypj.app004.me/aff-atdvk      | 抖阴Porn
******************************************

[mitm]
hostname = *50a*,*yiqiapi*,*jiujiao*,*myb*api*,*hichatapi*,*tbrapi*,*wmqapi*,*gvlan*,*ksapi*,*xtt*,*dyweb*

[rewrite_local]
^http[s]?:\/\/.*((50(aa|ab|apia)pi|xtt.*)\.com|tbrapi\.org)\/pwa\.php\/api\/(user\/userinfo|MvDetail\/(detail|xiao_detail)|home\/(getOpenAdsAndVersion|appcenter)|system\/getad)$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
^http[s]?:\/\/.*(yiqiapi|jiujiao|myb[0-9]+api|wmqapi).*\/pwa\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
^http[s]?:\/\/.*hichatapi.+\/api\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
^http[s]?:\/\/.*(gvlan|ksapi).*pwa\.php.*(home\/getConfig|user(s)?\/getBaseInfo|(mv|manhua|story)\/detail|mv\/(pwa_main|listOfFeature|getFeature)|ChargeVideo\/(upIndex|vipIndex|recommend))$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
^http[s]?:\/\/.+dyweb.+\/pwa.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js

******************************************/
