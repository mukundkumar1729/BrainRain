const AlertModal = (() => {
    let appUrl = "";
    let alertDiv = document.createElement("div");
    alertDiv.id = "alertModal";
    document.body.appendChild(alertDiv);
    let appLinkHtml = "";
            let keys = Object.keys(commonUrlData.urls);
            keys.forEach(key => {
                if (key.includes("_Aapp")) {
                    appLinkHtml += `<div class="row" style="margin-top:10px"><div class="col-12">
                                <button type="button" onclick="RedirectTo('${commonUrlData.urls[key]}')" class="form-control btn btn-info">
                                ${key.replace('_Aapp','')}</button>
                            </div></div>`;
                }
            });
  debugger;
            const html = `
    <div id="appAlertModal" class="modal fade" role="dialog" tabindex="-1" style="z-index:19999 !important;">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-primary">BrainRain Apps</h5>
          <button type="button" class="close btn btn-danger" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <p>Download and Install / Update App for better browsing </p>
            <button style="margin-top:5px;" onclick="RedirectTo('${commonUrlData.urls[constant.page + '_Aapp']}')" class="form-control btn btn-info">Download App</button>
            ${appLinkHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
                `;
                appUrl = commonUrlData.urls[constant.page + '_Aapp'];
            document.getElementById("alertModal").innerHTML = html;
            $("#appAlertModal").modal("show");
  });
  
  (function(){
    setTimeout(AlertModal(), 1000);
  })();