# 网上国网

> 20231101 修复1号出问题的情况

> 20231023 考虑到Surge通知不全, 去掉几个无用字段。

> 20231019 新增boxjs订阅点击跳转通知即可。

> 20231018 优化多户查找默认户号的逻辑, 增加一层过滤非住宅的情况。

> 绑定多户显示默认户号信息, 处理文案使其更加优雅~

> 可查询电费、用电量、账户余额、预存电费、预计可用天数等信息。

> 代码兼容Surge & QuanX & Loon, 其他工具可自行测试。

## Quantumult X 配置

```
[task_local]
5 21 * * * https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/95598/95598.js, tag=网上国网查询, img-url=https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/83/d8/8a/83d88a92-5a4d-7a2f-118c-80d795e7a9f6/AppIcon-0-0-1x_U007emarketing-0-5-0-0-sRGB-85-220.png/144x144.png, enabled=true
```
## Surge 配置

```
[Panel]
策略面板 = script-name=网上国网,update-interval=7200
[Script]
网上国网 = type=cron,cronexp=0 5 21 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/95598/95598.js,timeout=60
```

## Loon 配置
```
[Script]
cron "5 21 * * *" script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/95598/95598.js, timeout=10, tag=网上国网, img-url=https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/83/d8/8a/83d88a92-5a4d-7a2f-118c-80d795e7a9f6/AppIcon-0-0-1x_U007emarketing-0-5-0-0-sRGB-85-220.png/144x144.png
```
## 说明

> 仅实现查询类功能

> 务必添加 [BoxJS订阅](https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/boxjs.json)

> 应@小白脸要求添加Surge Panel面板支持

    1.修改字段Surge Panel配置的值: {'title':'','content':'截至到{date},账户余额还有{sumMoney},上月用电{totalPq}','icon':'bolt.circle.fill','icon-color':'#ff0000'}

    2.面板可用字段 totalPq -> 上月用电量 | sumMoney -> 账户余额 | prepayBal -> 预存电费 | dayNum -> 预计可用天数 | date -> 截止日期

## 感谢

[@小白脸](https://t.me/yqc_123)

[@Mutu888](https://github.com/githubdulong/Script)

[@chavyleung](https://github.com/chavyleung)