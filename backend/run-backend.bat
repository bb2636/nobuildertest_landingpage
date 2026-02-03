@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Running from: %CD%
echo.
echo Starting Spring Boot (stacktrace on error)...
call gradlew.bat bootRun --stacktrace
pause
