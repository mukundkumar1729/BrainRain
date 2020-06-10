$(document).ready(function(){
    debugger;
    CueLinksAds();
    $('#adsSection #carousel123 .carousel-inner').html(CueLinksWidgets());
    $('#adsSection #staticAds').html(StaticAdsSection());
    $('.amazonSearch').html(AmazonSearchScript());
});

function CueLinksWidgets(){
const ads = `<div class='carousel-item active'>
<span>Health and Beauty Products</span><br/>
<iframe width='300' height='250' src='https://widget.cuelinks.com/widgets/50038?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span>Trending Books</span><br/>
<iframe width='300' height='250' src='https://widget.cuelinks.com/widgets/50037?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span>Electronics Items</span><br/>
<iframe width='300' height='250' src='https://widget.cuelinks.com/widgets/50035?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span>Fashion Items</span><br/>
<iframe width='300' height='250' src='https://widget.cuelinks.com/widgets/50056?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span>Health & Beauty</span><br/>
<iframe width='300' height='250'  src='https://widget.cuelinks.com/widgets/50057?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span>Flowers & Gifts</span><br/>
<iframe width='300' height='250'  src='https://widget.cuelinks.com/widgets/50058?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span>Home & Kitchen</span><br/>
<iframe width='300' height='250'  src='https://widget.cuelinks.com/widgets/50060?cid=84555'></iframe>
</div>
<div class='carousel-item'>
<span></span><br/>
<iframe width='300' height='250'  src='https://widget.cuelinks.com/widgets/50062?cid=84555'></iframe>
</div>`;
return ads;
}

function AmazonSearchScript(){
const ads = `<script type="text/javascript">amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="mukundkumar17-21"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="IN"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="auto"; amzn_assoc_height ="auto"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="micromax";amzn_assoc_theme ="light"; amzn_assoc_bg_color ="FFFFFF"; </script>
<script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN"></script>`;
return ads;
}

function CueLinksAds(){
    var cId =  "84555";
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://cdn0.cuelinks.com/js/" : "http://cdn0.cuelinks.com/js/")  + "cuelinksv2.js";
    document.getElementsByTagName("body")[0].appendChild(s);
}

function StaticAdsSection(){
    const ads = `<p>
    <a href="https://linksredirect.com/?cid=84555&source=linkkit&url=https%3A%2F%2Fstore.jiva.com%2F">
    <img src="image/jiva-ayurveda-logo.jpg" alt="jiva Ayurved"/></a>
</p>
<p>
    <a href="https://linksredirect.com/?cid=84555&source=linkkit&url=https%3A%2F%2Fwww.medicaldepartures.com%2F">
    <img src="image/MedicalDeparture.png" alt="MedicalDeparture"/> Find a Medical Doctor</a>
</p>
<p>
    <a target="_blank" href="https://linksredirect.com/?pub_id=21531&url=https://www.lenskart.com/eyeq-contest%3Futm_source=">
    <img src="image/Lenskart.jpg" alt="Lenskart"/></a>
</p>
<p>
    <a target="_blank" href="https://linksredirect.com/?pub_id=21531&url=https://testbook.com/referrals">
    <img src="image/testbook.png" alt="TextBook"/></a>
</p>
<p>
    <a target="_blank" href="https://linksredirect.com/?cid=20477&source=linkkit&url=https%3A%2F%2Fpaytmmall.com">
        <img src="image/paymall.png" alt="Paytm Mall"/></a>
</p>
<p>
    <a target="_blank" href="https://linksredirect.com/?pub_id=21531&url=https://www.adda247.com/">
        <img src="image/adda247.jpg" alt="Add247"/></a>
</p>
<p>
    <script type="text/javascript">var aax_size='300x250';var aax_pubname = 'mukundkumar17-21';var aax_src='302';</script>
    <script type="text/javascript" src="https://c.amazon-adsystem.com/aax2/assoc.js"></script>
</p>
<p>
    <a href="https://linksredirect.com/?pub_id=21531&url=https://themomsco.com/baby-products.html">
        <img src="image/theMomsCo.png" alt="the moms co."/>
    </a>
</p>
<p>
    <a href="https://linksredirect.com/?pub_id=21531&url=https://www.edureka.co/">
        <span>Edureka</span>
    </a>
</p>
<p>
    <a href="https://linksredirect.com/?pub_id=21531&url=https://www.shopclues.com/branded-products.html">
        <img src="image/shopclues.png" alt="Shop Clues"/>
    </a>
</p>
<p>
    <iframe width='300' height='600' src='https://widget.cuelinks.com/widgets/50034?cid=84555'></iframe>
</p>`;
return ads;
}