@echo off
chcp 65001 >nul
cd /d "%~dp0"
if exist "gradle\wrapper\gradle-wrapper.jar" (
  echo gradle-wrapper.jar already exists.
  pause
  exit /b 0
)
echo Downloading gradle-wrapper.jar ...
if not exist "gradle\wrapper" mkdir "gradle\wrapper"
powershell -NoProfile -Command "Invoke-WebRequest -Uri 'https://github.com/gradle/gradle/raw/v8.5.0/gradle/wrapper/gradle-wrapper.jar' -OutFile (Join-Path (Get-Location) 'gradle\wrapper\gradle-wrapper.jar') -UseBasicParsing"
if %ERRORLEVEL% equ 0 (
  echo Done. You can now run: gradlew.bat bootRun
) else (
  echo Download failed. Save manually from:
  echo https://github.com/gradle/gradle/raw/v8.5.0/gradle/wrapper/gradle-wrapper.jar
  echo to: gradle\wrapper\gradle-wrapper.jar
)
pause
