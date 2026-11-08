@echo off
cd /d "%~dp0"
echo ===================================================
echo  [36XT.COM] 36星途 - Pushing to GitHub
echo  Target: https://github.com/junjiezxl/36xt-site.git
echo ===================================================
echo.
git add .
git commit -m "update 36xt site"
echo.
echo [1/1] Pushing code to GitHub origin main...
git push -u origin main
echo.
echo ===================================================
echo  Done! Please check the output above.
echo ===================================================
pause
