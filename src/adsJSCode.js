const widgets = [
    {
        url:"https://widget.cuelinks.com/widgets/50038?cid=97511",
        text:"Health and Beauty Products",
        color:"redColor"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50037?cid=97511",
        text:"Trending Books",
        color:"greenColor"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50035?cid=97511",
        text:"Electronics Items",
        color:"whiteColor"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50034?cid=97511",
        text:"Kids Essentials"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50056?cid=97511",
        text:"Fashion Items"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50058?cid=97511",
        text:"Flowers & Gifts"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50060?cid=97511",
        text:"Home & Kitchen"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50062?cid=97511",
        text:"Services"
    }
];

const staticAds = [
    {
       url:"",
       image:"jiva-ayurveda-logo.jpg",
       text:"" 
    },
    {
        url:"",
        image:"MedicalDeparture.png",
        text:"Find a Medical Doctor" 
     },
    {
        url:"",
        image:"Lenskart.jpg",
        text:"Lenskart is India’s online shopping portal for eyewear" 
     },
    {
        url:"",
        image:"paytmmall.png",
        text:"" 
     },
    {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fthemomsco.com%2F",
        image:"theMomsCo.png",
        text:"Buy natural products Online" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.shopclues.com%2F",
        image:"shopclues.png",
        text:"" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.voot.com%2F",
        image:"vootKids.png",
        text:"vootkids provides entertaining & learning experience for the kids" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.unacademyapp",
        image:"unacademy.png",
        text:"Unacademy is a learning platform" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fstore.adda247.com%2Fhome",
        image:"adda247.jpg",
        text:"Adda247 is examination specific" 
     },
     {
        url:"",
        image:"edureka.png",
        text:"edureka!" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.testbook.tbapp",
        image:"testbook.png",
        text:"Testbook is for Online Exam Preparation, provides Free Mock Tests" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fgoprep.co%2F",
        image:"goprep.png",
        text:"Goprep is e-learning platform for Classes 8th to 12th" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dco.gradeup.k12",
        image:"goprep.png",
        text:"Install Goprep App" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.skillzcafe.com%2F",
        image:"skillzCafe.png",
        text:"Skillzcafe is an online learning market place" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Ftestseries.edugorilla.com%2F",
        image:"eduGorilla.png",
        text:"EduGorilla is an educational community, encapsulates every exam held in the country" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.vidyakul.com%2F",
        image:"vidyakul.png",
        text:"Vidyakul is an interactive e-learning platform" 
     },
     {
        url:"https://linksredirect.com/?cid=97511&source=linkkit&url=https%3A%2F%2Fwww.vidyakul.com%2F",
        image:"DataCamp.png",
        text:"DataCamp lets us to understand the language of data" 
     }
];

function CueLinksWidgets() {
    let html = "";
    for(let i in widgets){
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                 <span class='${widgets[i%3].color}'> ${widgets[i].text}</span><br/>
                 <iframe width='300' height='250' src='${widgets[i].url}'></iframe></div>
        `
    }
    return html;
}

function AmazonSearchScript() {
    return '<script type="text/javascript">amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="mukundkumar17-21"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="IN"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="micromax";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF"; <\/script>\n<script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN"><\/script>'
}

function CueLinksAds() {
    var n = document.createElement("script");
    n.type = "text/javascript", n.async = !0, n.src = ("https:" == document.location.protocol ? "https://cdn0.cuelinks.com/js/" : "http://cdn0.cuelinks.com/js/") + "cuelinksv2.js", document.getElementsByTagName("body")[0].appendChild(n)
}

function StaticAdsSection() {
    let html = "";
    for(let prop of staticAds){
        if(prop.url !=""){
        html += `
        <div class="row">
            <div class="col-md-6 col-6">
                <a onclick="Transfer('${prop.url}')"><img src="image/${prop.image}"/></a>
            </div>
            <div class="col-md-6 col-6">
                <span>${prop.text}</span>
            </div>
        </div>
        `;
        }
    }

    let amazonScript = `<script type="text/javascript">var aax_size=\'300x250\';var aax_pubname = \'mukundkumar17-21\';var aax_src=\'302\';<\/script><script type="text/javascript" src="https://c.amazon-adsystem.com/aax2/assoc.js"><\/script>'`;
    return html+amazonScript;
}

$(document).ready(function() {
    CueLinksAds(), $("#adsSection #carousel123 .carousel-inner").html(CueLinksWidgets()), $("#adsSection #staticAds").html(StaticAdsSection()), $(".amazonSearch").html(AmazonSearchScript())
});