let baseUrl = "https://brainrain.netlify.app/";
let _timerCounter = sessionStorage.getItem('_timerCounter');
if(isNaN(_timerCounter)){
    _timerCounter = 0;
}
let _functionCounter = 0;

const RedirectTo = (url) => {
    if(url.includes('undefined')){
      window.location.href = baseUrl;
    }else{
      window.location.href = url;
    }
  }

(function SetAdsContactsHTML(){
    if(document.getElementById("contactUsSection")){
        document.getElementById("contactUsSection").style.display ='none';
        document.getElementById("contactUsSection").innerHTML = `<hr class="rounded"/>
                  <div class="col-md-6 col-6 qrCode">
                     <h5>Get App</h5>
                  </div>
                  <div class="col-md-6 col-6 contactUs">
                     <h5>Contact Us:</h5>
                  </div>`;
    }

    if(document.getElementById("adsSection")){
      document.getElementById("adsSection").style.display = 'none';
        document.getElementById("adsSection").innerHTML = `<div id="amazonCarousel" class ="carousel slide" data-ride="carousel">
        <div  class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#amazonCarousel" data-slide="prev">
           <span class="carousel-control-prev-icon"></span>
         </a>
         <a class="carousel-control-next" href="#amazonCarousel" data-slide="next">
           <span class="carousel-control-next-icon"></span>
         </a>
        </div>
        <div id="cueLinksCarousel" class ="carousel slide" data-ride="carousel">
        <div  class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#cueLinksCarousel" data-slide="prev">
           <span class="carousel-control-prev-icon"></span>
         </a>
         <a class="carousel-control-next" href="#cueLinksCarousel" data-slide="next">
           <span class="carousel-control-next-icon"></span>
         </a>
        </div>
        <div id="cueLinksAds">
        </div>`;
    }
})();

setInterval(function(){
    let _d = (new Date()).toLocaleTimeString();
    const _timerID = document.getElementById("timer");

    if(_timerID != null){
        _timerID.innerHTML = `${_d} (${_timerCounter}s)`;
}

switch(_functionCounter){
    case 5 :
        $.getScript(`${baseUrl}src/contactUs.js`);
        break;
    case 7 :
        $.getScript(`${baseUrl}src/adsJSCode.js`);
        break;
    case 30 :
        $.getScript(`${baseUrl}src/alertModal.js`);
        break;
    default :
        break;
}
_timerCounter++;
_functionCounter++;
sessionStorage.setItem('_timerCounter', _timerCounter);
}, 1000);