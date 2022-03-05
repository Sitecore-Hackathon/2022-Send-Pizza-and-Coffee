@ECHO OFF

REM /O - Copies file ownership and ACL information.
REM /X - Copies file audit settings (implies /O).
REM /E - Copies folders and subfolders, including empty ones.
REM /H - Copies hidden and system files also.
REM /K - Copies attributes. Typically, Xcopy resets read-only attributes.
REM /Y - Overwrite all without prompt.
REM /C - Ignore errors.
REM /I - Creates any missing folders and copy files into said new folder.

set FEE_PATH="C:\Projects\SendPizza\FrontEnd\dist"
set WEBROOT_PATH="C:\inetpub\wwwroot\sendpizza.dev\dist"

REM XCOPY %FEE_PATH% %ENG_PATH% /O /X /E /H /K /Y /C /I
XCOPY %FEE_PATH% %WEBROOT_PATH% /O /X /E /H /K /Y /C /I
