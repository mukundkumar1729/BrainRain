const cuewidgets = [
    {
        url:"https://widget.cuelinks.com/widgets/50038?cid=117192",
        text:"Health and Beauty Products"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50037?cid=117192",
        text:"Trending Books"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50035?cid=117192",
        text:"Electronics Items"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50034?cid=117192",
        text:"Kids Essentials"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50056?cid=117192",
        text:"Fashion Items"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50058?cid=117192",
        text:"Flowers & Gifts"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50060?cid=117192",
        text:"Home & Kitchen"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50062?cid=117192",
        text:"Services"
    }
];

const affiliateAds1= [
    {
        url:``,
        text:``,
        info:``
    }
];

const affiliateAds2 =[];

const cueLinksAds = [
    {
       url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.rufilo.user",
       image:"rufilo.png",
       text:"Rufilo - India’s first SMaRT credit card discovery and instant credit line based personal loan platform." 
    },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nextbillion.groww",
        image:"groww.png",
        text:"invest in direct mutual funds with zero commission for free. Switch your regular investments to direct." 
     },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dio.chingari.app",
        image:"chingari.png",
        text:"The Chingari App allows users to record and share short videos with incredible filters and games.It also provides users with a platform to connect with people through the Direct Message feature." 
     },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fthemomsco.com%2F",
        image:`theMomsCo.png`,
        text:"Buy natural products Online" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.shopclues.com%2F",
        image:`shopclues.png`,
        text:"" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.voot.com%2F",
        image:`vootKids.png`,
        text:"vootkids provides entertaining & learning experience for the kids" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.unacademyapp",
        image:`unacademy.png`,
        text:"Unacademy is a learning platform" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fstore.adda247.com%2Fhome",
        image:`adda247.jpg`,
        text:"Adda247 is examination specific" 
     },
     {
        url:"",
        image:`edureka.png`,
        text:"edureka!" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.testbook.tbapp",
        image:`testbook.png`,
        text:"Testbook is for Online Exam Preparation, provides Free Mock Tests" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fgoprep.co%2F",
        image:`goprep.png`,
        text:"Goprep is e-learning platform for Classes 8th to 12th" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dco.gradeup.k12",
        image:`goprep.png`,
        text:"Install Goprep App" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.skillzcafe.com%2F",
        image:`skillzCafe.png`,
        text:"Skillzcafe is an online learning market place" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Ftestseries.edugorilla.com%2F",
        image:`eduGorilla.png`,
        text:"EduGorilla is an educational community, encapsulates every exam held in the country" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.vidyakul.com%2F",
        image:`vidyakul.png`,
        text:"Vidyakul is an interactive e-learning platform" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.vidyakul.com%2F",
        image:`DataCamp.png`,
        text:"DataCamp lets us to understand the language of data" 
     },
     {
        url:"",
        image:``,
        text:"" 
     }
];

function CueLinksWidgets() {
    let html = "";
    for(let i in cuewidgets){
        debugger;
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                    <span style='color:${(i%3==1)?"red":(i%3==2)?"green":"white"}'> ${cuewidgets[i].text}</span><br/>
                    <iframe width='375' height='250' frameborder='0' scrolling='no' src='${cuewidgets[i].url}'></iframe>
                 </div>
        `;
    }
    return html;
}

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

function CueLinksAdsScript() {
    var n = document.createElement("script");
    n.type = "text/javascript", n.async = !0, n.src = ("https:" == document.location.protocol ? "https://cdn0.cuelinks.com/js/" : "http://cdn0.cuelinks.com/js/") + "cuelinksv2.js", document.getElementsByTagName("body")[0].appendChild(n)
}

function CueLinksAds() {
    let html = "";
    let isApplycolour = false;
    for(let prop of cueLinksAds){
        isApplycolour = !isApplycolour;
        if(prop.url !=""){
        html += `
        <div class="row">
            <div class="col-md-6 col-6">
                <a onclick="RedirectTo('${prop.url}')"><img src="${baseUrl}/image/${prop.image}" style="height:75px;width:125px"/></a>
            </div>
            <div class="col-md-6 col-6">
                <span style="color:${isApplycolour?"white":"black"}">${prop.text}</span>
            </div>
        </div>
        `;
        }
    }
    return html;
}

$(document).ready(function() {
    const url = window.location.href.toLowerCase();
    CueLinksAdsScript();
    $("#adsSection #cueLinksCarousel .carousel-inner").html(CueLinksWidgets());
    $("#cueLinksAds").html(CueLinksAds());
    if(url.includes("https://brainrain.netlify.app")){
        $("#adsSection #affiliateCarousel1 .carousel-inner").html(AffiliateAds1());
        $("#adsSection #affiliateCarousel2 .carousel-inner").html(AffiliateAds2());
    }
    $("adsSection").show();

});