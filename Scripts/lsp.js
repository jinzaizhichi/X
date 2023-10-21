/******************************************
 * @name 绿色产业链通杀
 * @description 好男人专用脚本
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.4
******************************************
## 更新日志
### 20231021
  #### 适配Surge
  > 可以使用👉[模块](https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/lsp.sgmodule)

  > 亦可使用Script Hub直接转换该脚本
### 20231018
  > 删除91av, 增加抖阴Porn

## 脚本注明
  1. 脚本只是针对基于Quantumult X和Surge对Javascript和WEB逆向的学习，不得用于商业用途，否则后果自负。
  2. 不保证脚本合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
  3. 本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
  4. 转载脚本请注明来源，欢迎分享，拒绝倒卖，倒卖🐕必死🐎。
  5. 如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
  6. 所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明, 本人保留随时更改或补充此声明的权利, 一旦您使用或复制了此脚本，即视为您已接受此免责声明。
  7. 欢迎对[本仓库](https://github.com/Yuheng0101/X)Star✅，但请不要Fork❌。

## 脚本描述
  解锁下方所有APP(仅限轻量版)

## 下载地址
  [50度灰](https://50.aff009.net/af/jDM3U)

  [91短视频](https://dbf4801.zfijby.com/aff-hVbkx)

  [汤头条](https://ttt.aff009.net/af/caJtT)

  [微密圈](https://app.wmq.life/aff-nVJM)

  [小蓝视频](https://p4.gv009.fun/#/home)

  [她趣](https://app.xttworld.com/af/bnjU)

  [撸先生](http://b.sir010.co/)

  [抖阴Porn](https://dypj.app004.me/aff-atdvk)
******************************************

hostname = *50a*,*bmafdxt*,*psovzwr*,*yxlauhm*,*yiqiapi*,*jiujiao*,*myb*api*,*hichatapi*,*tbrapi*,*wmqapi*,*gvlan*,*91av*,*xtt*,*dyweb*,*argaxqn*,*eoeicmg*

# 50度灰/汤头条/他趣
^http[s]?:\/\/.*((50(aa|ab|apia)pi|xtt.*)\.com|tbrapi\.org)\/pwa\.php\/api\/(user\/userinfo|MvDetail\/(detail|xiao_detail)|home\/(getOpenAdsAndVersion|appcenter)|system\/getad)$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
# 91短视频/微密圈
^http[s]?:\/\/.*(yiqiapi|jiujiao|myb[0-9]+api|wmqapi|psovzwr|bmafdxt|yxlauhm).*\/pwa\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
# 撸先生
^http[s]?:\/\/.*hichatapi.+\/api\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
# 小蓝视频/快手
^http[s]?:\/\/.*(gvlan|ksapi).*pwa\.php.*(home\/getConfig|user(s)?\/getBaseInfo|(mv|manhua|story)\/detail|mv\/(pwa_main|listOfFeature|getFeature)|ChargeVideo\/(upIndex|vipIndex|recommend))$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js
# 抖阴Porn
^http[s]?:\/\/.*(dyweb|argaxqn|eoeicmg).+\/pwa\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/code.js

******************************************/
