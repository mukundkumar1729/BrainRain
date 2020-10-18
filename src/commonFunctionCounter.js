let baseUrl = "https://brainrain.in/";
let appUrl = "";
let _timerCounter = sessionStorage.getItem('_timerCounter');
if(isNaN(_timerCounter)){
    _timerCounter = 0;
}
let _functionCounter = 0;
let commonUrlData = {
  urls:{
  "all_Aapp":"https://play.google.com/store/apps/developer?id=Mukund+Kumar",
"brainrain":"http://brainrain.in/",
"brainrain_netlify":"https://brainrain.netlify.app/",
"brainrain_Aapp":"https://play.google.com/store/apps/details?id=com.wBrainRain_11045965",
"tictactoe":"https://tictactoe.brainrain.in/",
"tictactoe_netlify":"https://brainrain-tictactoe.netlify.app/",
"tictactoe_Aapp":"https://play.google.com/store/apps/details?id=com.wTicTacToe_11438924",
"_2048":"https://2048.brainrain.in/",
"_2048_netlify":"https://brainrain-2048.netlify.app/",
"_2048_Aapp":"https://play.google.com/store/apps/details?id=com.ww2048BrainRainGame_11611166",
"pairup":"https://pairup.brainrain.in/",
"pairup_netlify":"https://brainrain-pairup.netlify.app/",
"pairup_Aapp":"https://play.google.com/store/apps/details?id=com.wPairUpBrainRainGame_11608416",
"numberSignificance":"https://brainrain-numberssignificance.netlify.app/",
"numberSignificance_netlify":"https://brainrain-numberssignificance.netlify.app/",
"numberSignificance_Aapp":"https://play.google.com/store/apps/details?id=com.wNumbersSignificance_11716054",
"wordsGame":"https://wordsgame.brainrain.in/",
"wordsGame_netlify":"https://brainrain-wordsgame.netlify.app/",
"wordsGame_Aapp":"https://play.google.com/store/apps/details?id=com.wWordsSearch_11772740",
"periodicTable":"https://periodictable.brainrain.in/",
"periodicTable_netlify":"https://brainrain-periodictable.netlify.app/",
"periodicTable_Aapp":"https://play.google.com/store/apps/details?id=com.wperiodictable_11819465",
"mobileStore":"https://mobilestore.brainrain.in/",
"mobileStore_netlify":"https://brainrain-mobilestore.netlify.app/",
"mobileStore_Aapp":"https://play.google.com/store/apps/details?id=com.wElectronicsStore_11905302",
"news1729":"https://brainrain-news.netlify.app/",
"news1729_netlify":"https://brainrain-news.netlify.app/",
"news1729_Aapp":"https://play.google.com/store/apps/details?id=com.wBrainRainNews_11941331",
"trivia":"https://trivia.brainrain.in/",
"trivia_netlify":"https://brainrain-trivia.netlify.app/",
"trivia_Aapp":"https://play.google.com/store/apps/details?id=com.wtrivia_12102649",
"factsFinder":"https://factsfinder.brainrain.in/",
"factsFinder_netlify":"https://brainrain-factsfinder.netlify.app/",
"factsFinder_Aapp":"https://play.google.com/store/apps/details?id=com.wFactsFinder_12183319"
  }
};

(function BindGoToPageDdl(urls){
  let ddl = $('#goToDdl')[0];
  ddl.options.length = 0;
  let options = {};
  let pageUrl = window.location.href;
  if(pageUrl.includes("https://brainrain.in") || pageUrl.includes("https://brainrain.netlify.app") || pageUrl.includes("127.0.0.1:550")){
               commonUrlData.urls["Interview Questions"] = constant.listing;
               commonUrlData.urls["Programming Section"] = constant.programmingSection;
    }
    commonUrlData.urls["Contact Us"] = constant.contactUsSection??"contactUsSection";
    let urlsKeys = Object.keys(commonUrlData.urls);
    $.each(urlsKeys, function(index, value){
        if(!value.includes('_')){
            ddl.options[ddl.options.length] = new Option(value, commonUrlData.urls[value]);
        }
    });
   let currentPage = constant.page.toLowerCase()??":https//brainrain.in";
   let currentPageOption = $("option[value*=" + currentPage + "]");
   $(currentPageOption).attr("selected","selected");
  })();

const RedirectTo = (url) => {
  debugger;
    if(url.includes('undefined')){
      sessionStorage.BrainRainPage = "brainrain";
      window.location.href = baseUrl;
    }else{
      sessionStorage.BrainRainPage = constant.page;
      window.location.href = url;
    }
  }

(function SetAdsContactsHTML(){
    if(document.getElementById("contactUsSection")){
        $("#contactUsSection").hide();
        document.getElementById("contactUsSection").innerHTML = `
                  <div class="col-md-12 col-12 contactUs">
                     <h5>Contact Us:</h5>
                  </div>`;
    }

    if(document.getElementById("adsSection")){
      $("adsSection").hide();
        document.getElementById("adsSection").innerHTML = `
        <div id="medCarousel" class ="carousel slide" data-ride="carousel">
        <div  class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#medCarousel" data-slide="prev">
           <span class="carousel-control-prev-icon"></span>
         </a>
         <a class="carousel-control-next" href="#medCarousel" data-slide="next">
           <span class="carousel-control-next-icon"></span>
         </a>
        </div>
        <div id="amazonCarousel1" class ="carousel slide" data-ride="carousel">
        <div  class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#amazonCarousel1" data-slide="prev">
           <span class="carousel-control-prev-icon"></span>
         </a>
         <a class="carousel-control-next" href="#amazonCarousel1" data-slide="next">
           <span class="carousel-control-next-icon"></span>
         </a>
        </div>
        <div id="amazonCarousel2" class ="carousel slide" data-ride="carousel">
        <div  class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#amazonCarousel2" data-slide="prev">
           <span class="carousel-control-prev-icon"></span>
         </a>
         <a class="carousel-control-next" href="#amazonCarousel2" data-slide="next">
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
    let _date = new Date();
    let _d = (_date.toString().split('GMT')[0].trim());
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

function SetStyleSheet(){
  $("#adsSection").css({"margin-top": "60px", "position": "relative","display":"none"});
  $("#adsSection img").css({"height":"75px","width":"125px"});
  $("#staticAds .row").css({"margin-top": "10px","margin-bottom": "10px"});
  $(".amazonSearch iframe").css({"width": "100% !important"});
  $("iframe").css({"border": "none"});
  $("#staticAds .row:nth-child(odd) div span:nth-child(odd)").css({"color":"white"});
  }
