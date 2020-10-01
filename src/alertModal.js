const AlertModal = (() => {
  let aAppUrl = "";
  let alertDiv = document.createElement("div");
  alertDiv.id = "alertModal";
  document.body.appendChild(alertDiv);
  debugger;
  // fetch("https://brainrain.in/data/commonurls.json")
  fetch("https://commonurls.p.rapidapi.com/", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "commonurls.p.rapidapi.com",
              "x-rapidapi-key": "uidfLUjLRFmshP9SqtRp4Dantn62p1IGMXsjsnj5i41NHnvqKG"
          }
      })
      .then(response => response.json())
      .then(data => {
        debugger;
          let appLinkHtml = "";
          let keys = Object.keys(data.urls);
          keys.forEach(key => {
              if (key.includes("_Aapp")) {
                  appLinkHtml += `<div class="row" style="margin-top:10px"><div class="col-12">
                              <button type="button" onclick="RedirectTo('${data.urls[key]}')" class="form-control btn btn-info">
                              ${key.replace('_Aapp','')}</button>
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

              appUrl = data.urls[constant.page + '_Aapp'];
          document.getElementById("alertModal").innerHTML = html;
          $("#appAlertModal").modal("show");
      })
      .catch((error, err1, err2) =>{
        debugger;
        console.log(error)
      });
});

(function(){
  setTimeout(AlertModal(), 25000);
})();