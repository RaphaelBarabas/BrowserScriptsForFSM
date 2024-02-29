// ==UserScript==
// @name         FSM FailedERPImport Error Details
// @namespace    Violentmonkey Scripts
// @version      2024-02-29
// @description  Parse error message from the stack trace
// @author       r.barabas@sap.com
// @match        https://*.fsm.cloud.sap/admin/accounts/*/companies/*/changelog/audit-logs*
// @match        https://*.coresystems.net/admin/accounts/*/companies/*/changelog/audit-logs*
// @icon         https://eu.fsm.cloud.sap/admin/assets/favicon-01882ee1e5f3dc07a9f20581845c1585.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.getElementById("objectName").getInnerHTML() === "FailedERPImport")
    {
        const re = /Caused by:.*/g
        const emsg = document.getElementsByName("fields[2].oldValue")[1].defaultValue.match(re).join('</div><div id="parsedError" class="form-control-static" data-value="">');
        const div = document.createElement("div");
        div.setAttribute("class", "form-group form-group-md");
        div.innerHTML = `<label class="col-md-4 control-label">Parsed Error</label><div class="col-md-7"><div id="parsedError" class="form-control-static" data-value="">${emsg}</div></div>`;
        document.getElementsByClassName("panel-body")[0].appendChild(div);
    }
})();
