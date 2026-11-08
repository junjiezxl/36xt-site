@echo off
chcp 65001 >nul
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
echo ======================================================
echo    36星途 36XT (36xt.com) - 正在准备部署上线...
echo    探索世界，连接未来。
echo ======================================================
echo.

cd /d "%~dp0"

echo [1/2] 正在进行生产环境编译构建...
call npm.cmd run build
if %ERRORLEVEL% neq 0 (
    echo [错误] 编译失败，请检查错误提示！
    pause
    exit /b
)

echo.
echo [2/2] 正在上传部署至 Cloudflare Pages 全球网络...
echo (如果是首次部署，浏览器会自动弹出 Cloudflare 登录授权页面，请点击"允许/Allow")
echo.
call npx.cmd wrangler pages deploy docs/.vitepress/dist --project-name 36xt-site --commit-dirty=true

echo.
echo ======================================================
echo  部署指令已执行完毕！请查看上方输出的线上访问网址。
echo ======================================================
echo.
pause
