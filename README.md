# BrowserScriptsForFSM

Use a Browser Extension to have these executed when you load certain web pages. 
Each script is configured to only act on specific URLs. It will tap in and inject page elements.

## Installation

There's many Extensions to do this, look for a [Userscript Manager](https://en.wikipedia.org/wiki/Userscript_manager) to find your favorite.

To name a few:
* Greasemonkey - The original evolved to this
* Violentmonkey - I use this for MS Edge
* Tampermonkey - Seems to have a large user base
* Firemonkey - If you prefer FireFox

Once you got the extension installed, use it to create and save a new script. Copy and paste the code over and save. 

*This is only relevant for SAP Employees:* 
ISE comes with a Userscript Manager installed out of the box. Copy your scripts to `%APPDATA%/ISE/scripts/dev/` (create the *dev* folder first).

## Use

### FailedErpImportsParser.js

When using the FSM Admin *Audit Logs*, if you open a message related to Object Type *FailedERPImport*, This script will show the error more clearly. It will look for the words "Caused by:" in the stack trace and diplay only that line.
