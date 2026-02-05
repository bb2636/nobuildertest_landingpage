@echo off
chcp 65001 >nul
cd /d "%~dp0page"
if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
)
start "" cmd /k "npm run dev"
echo Frontend starting at http://localhost:5173
