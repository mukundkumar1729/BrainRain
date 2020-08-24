let _timerCounter = sessionStorage.getItem('_timerCounter');
if(isNaN(_timerCounter)){
    _timerCounter = 0;
}
let _functionCounter = 0;

setInterval(function(){
    let _d = (new Date()).toLocaleTimeString();
    const _timerID = document.getElementById("timer");

    if(_timerID != null){
        _timerID.innerHTML = `${_d} (${_timerCounter}s)`;
}

switch(_functionCounter){
    case 5 :
        $.getScript("src/contactUs.js");
        break;
    case 7 :
        $.getScript( "src/adsJSCode.js");
        break;
    case 30 :
        $.getScript("https://brainrain.netlify.app/src/alertModal.js");
        break;
    default :
        break;
}
_timerCounter++;
_functionCounter++;
sessionStorage.setItem('_timerCounter', _timerCounter);
}, 1000);