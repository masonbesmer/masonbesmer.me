@echo off
echo Mason Besmer Website - One-Click VS Code Setup
echo ============================================
echo.
echo This will run the PowerShell setup script.
echo.
pause
echo.
echo Running setup script...
powershell.exe -ExecutionPolicy Bypass -File "%~dp0setup.ps1"
echo.
echo Setup complete! Press any key to exit.
pause >nul