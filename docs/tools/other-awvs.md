# 网站漏洞扫描工具

## 作用

- WVS 可以通过检查 SQL·注入攻击漏洞、跨站脚本攻击漏洞等来审核你的 Web 应用程序。
- 它可以扫描任何可通过 Web 浏览器访问的和遵循 HTTP/HTTPS 规则的 Web 站点和 Web 应用程序。
- 除了自动化地扫描可以利用的漏洞，WVS 还提供了分析现有通用产品和客户定制产品（包括那些依赖于 JavaScript 的程序即 AJAX 应用程序）的一个强健的解决方案。

## 安装

1. 启动 `acunetix_14.1.210316110.exe` ，注册 admin@qq.com / 123_ksvd@
2. `net stop acunetix` 任务管理器，停止 acunetix 相关服务（2 个）
3. 替换补丁文件

- wvsc.exe 替换到 `C:\Program Files (x86)\Acunetix\14.1.210316110`
- path 破解脚本也替换到 `C:\Program Files (x86)\Acunetix\14.1.210316110`

4. 运行 `patch.exe`, Input your \*\*\* 的内容随便填可以都填 99999（尽量大点）
5. 运行 `Acunetix Premium Activation Tool.exe`
6. 开启第二步停止的服务 `net start acunetix`
7. 修改为中文

## 使用教程

可参考：
https://blog.csdn.net/qq_38484679/article/details/117658326
