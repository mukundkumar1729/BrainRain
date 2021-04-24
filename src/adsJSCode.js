const affiliateAds1= [
    {
        url:"",
        image:"",
        text:"" 
     }, 
];

function AffiliateAds1(affiliateAds) {
    let html = "";
    affiliateAds = affiliateAds??affiliateAds1;
    for(let i in affiliateAds){
        if(affiliateAds[i].url != ''){
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                    <span style='${((i)%3==1)?"color:red":((i)%3==2)?"color:green":"color:white"}'> ${affiliateAds[i].text}</span><br/>
                    <div class="row">
                        <div class="col-md-6 col-6">${affiliateAds[i].url}</div>
                        <div class="col-md-6 col-6">
                            <span style=${((i)%3==1)?"color:red":((i)%3==2)?"color:green":"color:white"}> ${affiliateAds[i].info}</span><br/>
                        </div>
                    </div>
                 </div>
        `;
    }
}
    return html;
}

function AffiliateAds2(affiliateAds) {
    let html = "";
    affiliateAds = affiliateAds??affiliateAds2;
    let adsCount = Object.keys(affiliateAds).length
    for(let i in affiliateAds){
        if(affiliateAds[i].url != '' && i%2 == 1){
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                    <div class="row">
                        <div class="col-md-6 col-6">${affiliateAds[i-1].url}</div>
                        <div class="col-md-6 col-6">${affiliateAds[i].url}</div>
                    </div>
                 </div>
        `;
    }
}
    return html;
}

$(document).ready(function() {
    const url = window.location.href.toLowerCase();
    if(url.includes("https://brainrain.netlify.app")){}
    // CueLinksAdsScript();
   // $("#adsSection #cueLinksCarousel .carousel-inner").html(CueLinksAds());
   // $("adsSection").show();
   // $("#adsSection").css({"margin-bottom":"60px"});
});