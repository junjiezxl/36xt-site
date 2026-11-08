@echo off
chcp 65001 >nul
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
echo ======================================================
echo   正在启动「36星途 36XT (36xt.com)」本地实时预览服务...
echo   探索世界，连接未来。
echo   启动后请在浏览器打开下方显示的 http://localhost:5173
echo   按 Ctrl + C 可随时停止服务
echo ======================================================
cd /d "%~dp0"
call npm.cmd run dev
pause
