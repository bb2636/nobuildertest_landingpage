@echo off
chcp 65001 >nul
echo DB 연결 확인: GET http://localhost:8081/api/db-check
echo.
curl -s http://localhost:8081/api/db-check
echo.
echo.
pause
