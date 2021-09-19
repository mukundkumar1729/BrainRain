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
"news1729":"https://news.brainrain.in/",
"news1729_netlify":"https://brainrain-news.netlify.app/",
"news1729_Aapp":"https://play.google.com/store/apps/details?id=com.wBrainRainNews_11941331",
"trivia":"https://trivia.brainrain.in/",
"trivia_netlify":"https://brainrain-trivia.netlify.app/",
"trivia_Aapp":"https://play.google.com/store/apps/details?id=com.wtrivia_12102649",
"factsFinder":"https://factsfinder.brainrain.in/",
"factsFinder_netlify":"https://brainrain-factsfinder.netlify.app/",
"factsFinder_Aapp":"https://play.google.com/store/apps/details?id=com.wFactsFinder_12183319",
"WebEditor":"https://webeditor.brainrain.in/",
"WebEditor_netlify":"https://webeditor.brainrain.in/",
"WebEditor_Aapp":"https://play.google.com/store/apps/details?id=com.wwebeditor_12857094"
  }
};

(function BindGoToPageDdl(urls){
  let ddl = $('#goToDdl')[0];
  ddl.options.length = 0;
  let options = {};
  let pageUrl = window.location.href;
  if(pageUrl.includes("https://brainrain.in") || pageUrl.includes("https://brainrain.netlify.app") || pageUrl.includes("127.0.0.1:550")){
      if(constant)  {
              commonUrlData.urls["Interview Questions"] = constant["listing"];
              commonUrlData.urls["Programming Section"] = constant["programmingSection"];
      }
    }
    commonUrlData.urls["Contact Us"] = constant.contactUsSection??"contactUsSection";
    let urlsKeys = Object.keys(commonUrlData.urls);
    $.each(urlsKeys, function(index, value){
        if(!value.substring(1).includes('_') ){
          ddl.options[ddl.options.length] = new Option(value, commonUrlData.urls[value]);
        }
    });
    if(constant.page=='brainrain'){
      $('select').find(`option[value="https://brainrain.in/"]`).attr('selected','selected');
    }else{
      $('select').find(`option[value*="${constant.page.replace("_","").toLowerCase()}"]`).attr('selected','selected');
    }

    HideGoToDropdownInApp();
  })();

  
(function SetAdsContactsHTML(){
  if(document.getElementById("contactUsSection")){
      $("#contactUsSection").hide();
      document.getElementById("contactUsSection").innerHTML = `
                <div class="col-md-12 col-12 contactUs">
                   <h5>Contact Us:</h5>
                </div>`;
  }
})();

const RedirectTo = (sender) => {
  if(typeof(sender) == "string"){
    window.location.href = sender;
    return;
  }
  let url = sender.value;
    if(! sender.value){
      sessionStorage.BrainRainPage = "brainrain";
      window.location.href = baseUrl;
    }else if(url.toLowerCase() == "contactussection"){
      document.getElementById("contactUsSection").scrollIntoView(true);
    }else{
      sessionStorage.BrainRainPage = constant.page;
      window.location.href = url;
    }
  }

const StartModalLocalCounter = (sender) => {
  if(sender.innerText == "Start"){
    sender.innerText = "Stop";
  }else{
    sender.innerText = "Start";
    let modalLocalCounter = document.getElementById("modalLocalCounter");
    document.getElementById("lastModalLocalCounter").innerText = modalLocalCounter.innerText;
    modalLocalCounter.innerText = "0";
    modalLocalCounter.setAttribute("timeElapsed", 0);
  }
}

const DetailedTimerModal = () => {
  let timerModalDiv = document.createElement("div");
  timerModalDiv.id = "timerModalDiv";
  document.body.appendChild(timerModalDiv);
  const html = `
    <div id="detailedTimerModal" class="modal" role="dialog" tabindex="-1" style="margin-top:40px;">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <div class="row">
                <div class="col-11 bg-secondary text-center"><h5 id="timerModal">Today</h5></div>
                <div class="col-1"><button type="button" class="close btn btn-danger" data-dismiss="modal">&times;</button></div>
            </div>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-12 bg-light text-center">Using for <span id="timerCounterModal" class="text-info"></span>s</div>
            </div>
        </div>
        <div class="row">
                <div class="col-2"><span id="lastModalLocalCounter"></span></div>
                <div class="col-4 text-right"><h5 id="modalLocalCounter" class="text-info" timeElapsed="0">0</h5></div>
                <div class="col-4"><label id="modalLocalCounterText" class="text-primary" onclick="StartModalLocalCounter(this);">Start</label></div>
            </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
                `;
  timerModalDiv.innerHTML = html;
  $("#detailedTimerModal").modal("show"); 
}

setInterval(function(){
    let _date = new Date();
    const _timerID = document.getElementById("timer");

    if(_timerID != null){
        _timerID.innerHTML = _date.toString().split(' ')[0] +'&nbsp;' + _date.toTimeString().split("GMT")[0];
        _timerID.setAttribute("title", _timerCounter + 's');

        let timerCounterModal = document.getElementById("timerCounterModal");
        let modalLocalCounter = document.getElementById("modalLocalCounter")
        if(timerCounterModal){
          timerCounterModal.innerText = _functionCounter;
          document.getElementById("timerModal").innerText = _date;
          if(document.getElementById("modalLocalCounterText").innerText == "Stop"){
            let timeElapsed = modalLocalCounter.getAttribute("timeElapsed");
            let fTimeElapsed = "";
            timeElapsed++;
            if(timeElapsed >= 60){
                let minutes = parseInt(timeElapsed / 60);
                 if(minutes >= 60){
                    let hour = parseInt(minutes / 60);
                    let hourMinutes = minutes % 60;
                    fTimeElapsed += `${hour} : ${hourMinutes} : `;
                 }else{
                  fTimeElapsed += `${minutes} : `;
                }
            }
            let seconds = timeElapsed % 60;
            fTimeElapsed += `${seconds}`;
            modalLocalCounter.innerText = fTimeElapsed;
            modalLocalCounter.setAttribute("timeElapsed", timeElapsed);
          }
        }
}

switch(_functionCounter){
    case 2:
        $.getScript(`${baseUrl}src/contactUs.js`);
        break;
    case 7 :
       // $.getScript(`${baseUrl}src/adsJSCode.js`);
        break;
    case 30 :
       // $.getScript(`${baseUrl}src/alertModal.js`);
        break;
    default :
        break;
}
_timerCounter++;
_functionCounter++;
sessionStorage.setItem('_timerCounter', _timerCounter);
}, 1000);

const  SetStyleSheet = () =>{
  $("#adsSection").css({"margin-top": "60px", "position": "relative","display":"none"});
  $("#adsSection img").css({"height":"75px","width":"125px"});
  $("#staticAds .row").css({"margin-top": "10px","margin-bottom": "10px"});
  $("#staticAds .row:nth-child(odd) div span:nth-child(odd)").css({"color":"white"});
  }

  
 const HideGoToDropdownInApp = () => {
  const appParamValue = GetQueryStringParamValue('app');
  if(appParamValue && appParamValue == 1){
     document.getElementById("goToDdl").style.display = "none";
  }
}

const GetQueryStringParamValue = (paramName) => {
  debugger;
 let params = window.location.href.split('?');
 if(params.length > 1){
    const param = params[1].split('&').find(x => x.split('=')[0].toLowerCase() == paramName.toLowerCase())?.split('=');
    if(param.length > 1){
      return param[1];
    }
 }
}