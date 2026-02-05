@echo off
chcp 65001 >nul
cd /d "%~dp0backend"
echo Starting Spring Boot...
call gradlew.bat bootRun
pause
