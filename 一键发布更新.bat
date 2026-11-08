@echo off
chcp 65001 >nul
echo ======================================================
echo    36星途 36XT (36xt.com) - 一键发布更新到线上
echo    探索世界，连接未来。
echo ======================================================
echo.

cd /d "%~dp0"

:: 检查是否已初始化 git
if not exist ".git" (
    echo [提示] 检测到本地尚未初始化 Git 仓库，正在初始化...
    git init
    git branch -M main
    echo.
    echo ------------------------------------------------------
    echo 首次发布前，请先在 GitHub 创建一个新仓库，并输入远程仓库地址：
    echo (例如: https://github.com/你的用户名/36xt-site.git)
    echo ------------------------------------------------------
    set /p remoteUrl="请输入 GitHub 仓库地址: "
    if not "%remoteUrl%"=="" (
        git remote add origin %remoteUrl%
    ) else (
        echo [错误] 仓库地址不能为空，已取消。
        pause
        exit /b
    )
)

echo [1/3] 正在暂存所有更新的 Markdown 文章与配置文件...
git add .

echo.
set /p commitMsg="请输入本次更新说明 (直接回车默认: '更新36星途站点内容'): "
if "%commitMsg%"=="" set commitMsg=更新36星途站点内容

echo.
echo [2/3] 正在记录版本: "%commitMsg%"...
git commit -m "%commitMsg%"

echo.
echo [3/3] 正在推送代码至 GitHub (Cloudflare 将在 30 秒内自动发布上线)...
git push origin main
if %ERRORLEVEL% neq 0 (
    echo.
    echo [提示] 首次推送或未设置上游分支，正在尝试强制关联推送...
    git push -u origin main
)

echo.
echo ======================================================
echo  恭喜！代码已成功推送到 GitHub。
echo  Cloudflare Pages 会在 30~60 秒内全自动构建发布到 https://36xt.com ！
echo ======================================================
echo.
pause
