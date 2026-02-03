@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules call npm install
echo.
echo 개발 서버: http://localhost:5173
echo 브라우저에서 접속해 주세요.
echo.
call npm run dev
pause
