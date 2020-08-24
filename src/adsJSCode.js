const colour =["redColor", "greenColor", "whiteColor"];

const widgets = [
    {
        url:"https://widget.cuelinks.com/widgets/50038?cid=97511",
        text:"Health and Beauty Products"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50037?cid=97511",
        text:"Trending Books"
    },
    {
        url:"https://widget.cuelinks.com/widgets/50035?cid=97511",
        text:"Electronics Items"
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


const amazonAds= [
    // {
    //     url:`<script type="text/javascript">amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="mukundkumar17-21"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="IN"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="micromax";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF"; <\/script>\n<script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN"><\/script>`,
    //     text:`Search Amazon`,
    //     info:``
    // },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B075NKHHBV&asins=B075NKHHBV&linkId=e6ab4e7d80ba588204f3dd567884b69f&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Canvas Infinity 18:9`,
        info:`5.7-inch Screen, 13MP | 16MP Camera, 3GB | 32GB, 1.4GHz Quad-Core Processor, 2900 mAh Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B010JMMW9A&asins=B010JMMW9A&linkId=c2cb5f6d1951471db6c23e4ed09fbc21&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`micromax canvas spark`,
        info:`4.7-inch Screen, 2MP | 8MP Camera, 1GB | 8GB, 1.3 Ghz Quad Core Processor, 2000mAh  Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B07N1FR7N9&asins=B07N1FR7N9&linkId=f71aee671bc54bc9f4e25638ebf6dabc&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Infinity N12 (Viola, 3GB, 32GB Storage) (Viola)`,
        info:`3 GB | 32GB , 2.0 GHz Octa Core Processor, 4000mAh Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B00X1KGBJU&asins=B00X1KGBJU&linkId=51d247438a696384e2e04e8c5e0228cf&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Canvas Nitro 2 E311 (Grey-Silver)`,
        info:`5-inch Screen, 5MP Camera, 1GB | 8GB, 1.4 Ghz Octa Core Processor, 2400mAh  Battery`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&marketplace=amazon&region=IN&placement=B07CJFKN5X&asins=B07CJFKN5X&linkId=da7828dafaff8ec556896f18277284f9&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Micromax Canvas IN8INITY Life(Black)`,
        info:`5.45 inch HD+ Display, 2 GB RAM | 16 GB ROM | Expandable Upto 128 G, 13MP Rear Camera | 8MP Front Camera, MediaTek MT6737 Cortex-A53 64-bit Processor`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B075V7T4F4&asins=B075V7T4F4&linkId=40564c02227faef708f24ea72514bee9&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`DI GRAZIA Tactical Outdoor Sports Organizer Waist Bag Pack with Cell Phone Holster, Camping Hiking Running Pouch (Black)`,
        info:`2 zippered compartments with 1 interior and 1 mesh pockets that can fit in your Cell phone, Camera, Earphone, Cable, Charger, MP3, MP4, IPod, Keys, and ID cards, cards and other accessories. 1 outer pocket for cell phones, 1 Pen/Tactical Torch Latch, Key ring hook, Durable Zippers, Ultra Lightweight for Speed and Comfort during All Activities`
    },
    {
        url:`<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mukundkumar17-21&language=en_IN&marketplace=amazon&region=IN&placement=B073JWDLXZ&asins=B073JWDLXZ&linkId=939631059610ef30044868914b652752&show_border=true&link_opens_in_new_window=true"></iframe>`,
        text:`Skybags Rubik Polyester 68 Cms Blue Softsided Check-in Luggage (STRUW68EBLU)`,
        info:`Capacity: 66 liters; Weight: 4500 grams; Dimensions: 46.5 cms x 31.5 cms x 68.5 cms (LxWxH), Number Lock, Number of Wheels: 4`
    }
];

const cueLinksAds = [
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
                    <span class='${colour[i%3]}'> ${widgets[i].text}</span><br/>
                    <iframe width='300' height='250' src='${widgets[i].url}'></iframe>
                 </div>
        `;
    }
    return html;
}

function AmazonAds() {
    debugger;
    let html = "";
    for(let i in amazonAds){
        if(amazonAds[i].url != ''){
        html += `
                 <div class='carousel-item ${html==""?"active":""}'>
                    <span class='${colour[i%3]}'> ${amazonAds[i].text}</span><br/>
                    <div class="row">
                        <div class="col-md-6 col-6">${amazonAds[i].url}</div>
                        <div class="col-md-6 col-6"><span class='${colour[i%3]}'> ${amazonAds[i].info}</span><br/></div>
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
                <a onclick="Transfer('${prop.url}')"><img src="image/${prop.image}"/></a>
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
    CueLinksAdsScript
    $("#adsSection #cueLinksCarousel .carousel-inner").html(CueLinksWidgets());
    $("#adsSection #amazonCarousel .carousel-inner").before(`<h3 style="margin-top:25px;">Get Best Shopping Deals at amazon</h3>`);
    $("#adsSection #amazonCarousel .carousel-inner").html(AmazonAds());
    $("#cueLinksAds").html(CueLinksAds());
    
});