@echo off
echo Opening SRC Sports Academy in multiple browsers...

:: Get the absolute path of index.html in the current folder
set "WEBSITE_PATH=%~dp0index.html"

:: Open in Microsoft Edge
start msedge "%WEBSITE_PATH%"

:: Open in Google Chrome
start chrome "%WEBSITE_PATH%"


:: Open in Brave
start Brave "%WEBSITE_PATH%"

echo Browsers launched!
exit
