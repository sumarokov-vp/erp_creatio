# erp_creatio

## Installation

Set up file design mode:
```bash
vim ~/creatio/Terrasoft.WebHost.dll.config
```

set parameters:
```xml
<fileDesignMode enabled="true" />
...
<add key="UseStaticFileContent" value="false" />
```
> I hope, you know, how to exit vim $-)

Create package "ERP" with dependencies:
- NUI
- Base
- UIv2

Download package to the file system

Clone repo to the temp dir "erp_creatio" (you can fork it before, for your own development):
```
git clone https://github.com/sumarokov-vp/erp_creatio.git
```

Copy all files including hidden files and directories (.git) into ERP package folder and remove temp dir:
```bash
cp -r erp_creatio/. ~/creatio/Terrasoft.Configuration/Pkg/ERP/.
rm -r erp_creatio
```

Upload package from file system

Copy connection string file end edit:
```bash
cd ~/creatio/Terrasoft.Configuration/Pkg/ERP
cp install_db_triggers/database_template.py install_db_triggers/database.py
vim install_db_triggers/database.py
```
