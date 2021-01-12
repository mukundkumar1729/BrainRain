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

const cueLinksAds = [
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fmamaearth.in%2F",
        image:`mamaEarth.jpg`,
        text:"Mama Earth honest, natural and Toxin-free safe products, for a little bit of heaven, sent down to earth" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fstore.jiva.com%2F",
        image:`jivaAyurveda.jpg`,
        text:"jiva ayurved" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fstore.adda247.com%2Fhome",
        image:`adda247.jpg`,
        text:"Adda247 is examination specific" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fpizzaonline.dominos.co.in%2F",
        image:`dominos.png`,
        text:"Dominos - One of India’s best pizza restaurants" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dco.gradeup.k12",
        image:`goprep.png`,
        text:"Install Goprep App" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fwww.skillzcafe.com%2F",
        image:`skillzCafe.png`,
        text:"Skillzcafe is an online learning market place" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.dreamplug.androidapp",
        image:`cred.jpg`,
        text:"CRED's credit card spend tracking and management features provide simple, yet powerful tools for its members to manage their credit card more efficiently" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fwww.datacamp.com%2F",
        image:`DataCamp.png`,
        text:"DataCamp lets us to understand the language of data" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fwww.amazon.in%2F",
        image:`amazonProducts.jpg`,
        text:"amazon" 
     },
     {
        url:"https://linksredirect.com/?cid=117192&source=linkkit&url=https%3A%2F%2Fwww.flipkart.com%2F",
        image:`flipkart.png`,
        text:"flipkart" 
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
        <div class='carousel-item ${html==""?"active":""}'>
        <div class="row">
            <div class="col-md-12 col-12">
                <a onclick="RedirectTo('${prop.url}')"><img src="${baseUrl}/image/${prop.image}" style="height:75px;width:375px"/></a>
            </div>
            <div class="col-md-12 col-12">
                <span style="color:${isApplycolour?"white":"black"}">${prop.text}</span>
            </div>
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
    CueLinksAdsScript();
    $("#adsSection #cueLinksCarousel .carousel-inner").html(CueLinksWidgets());
    $("#adsSection #affiliateCarousel1 .carousel-inner").html(CueLinksAds());
    $("adsSection").show();
    $("#adsSection").css({"margin-bottom":"60px"});
});