const AlertModal = (() => {
  let aAppUrl = "";
  let alertDiv = document.createElement("div");
  alertDiv.id = "alertModal";
  document.body.appendChild(alertDiv);
  fetch("https://commonurls.p.rapidapi.com/", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "commonurls.p.rapidapi.com",
              "x-rapidapi-key": "uidfLUjLRFmshP9SqtRp4Dantn62p1IGMXsjsnj5i41NHnvqKG"
          }
      })
      .then(response => response.json())
      .then(data => {
          let appLinkHtml = "";
          let keys = Object.keys(data.urls);
          keys.forEach(key => {
              if (key.includes("_Aapp")) {
                  appLinkHtml += `<div class="row"><div class="col-12">
                              <button type="button" onclick="RedirectToApp('${data.urls[key]}')" class="form-control btn btn-info">
                              ${key.replace('_Aapp','').replace("_","")}</button>
                          </div></div>`;
              }
          });

          const html = `
  <div id="appAlertModal" class="modal fade" role="dialog" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="text-primary">BrainRain Apps</h5>
        <button type="button" class="close btn btn-danger" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
          <p>Download and Install / Update App for better browsing </p>
          <button style="margin-top:5px;" onclick="RedirectTo('${data.urls[constant.page + '_Aapp']}')" class="form-control btn btn-info">Download App</button>
          ${appLinkHtml}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              `;
          document.getElementById("alertModal").innerHTML = html;
          $("#appAlertModal").modal("show");
      })
      .catch(error => console.log(error));
});

(function(){
  setTimeout(AlertModal(), 25000);
})();