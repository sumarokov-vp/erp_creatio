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
> I hope, you know, how to exit vim 🤪 

Restart creatio. I suggest use tmux.
```bash
tmux
cd ~/creatio/ 
COMPlus_ThreadPool_ForceMinWorkerThreads=100 dotnet Terrasoft.WebHost.dll
```

Create package "ERP" with dependencies (you can use option "Compile into a separate assembly"):
- NUI
- Base
- UIv2
- ProductBase

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

Prepare python environment:
```bash
cd ~/creatio/Terrasoft.Configuration/Pkg/ERP/install_db_triggers
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Install postgre sql functions and triggers:
```bash
python set_triggers.py
```

### Lookups

### System settings:
- ErpCurrencyRateRatio
- ErpAccountingCurrency