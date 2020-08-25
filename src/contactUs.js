$(document).ready(function(){
    AppsLink();
    ContactUsSocialMediaLinks();
    $(".contactUs img").css({"height": "40px", "width": "50px", "border-radius": "50%"})
    $(".space").css({"width":"60px"});
});

function AppsLink(){
const appsLink = `
<a onclick="RedirectToCurrentApp();"><img src="${baseUrl}image/googlePlayBadge.jpg" alt="Google Play"/></a><br/>
`; 

let qrCodeEl = $('#contactUsSection .qrCode');
$(qrCodeEl).append(appsLink);
}

function ContactUsSocialMediaLinks(){
    const links = `
    <a onclick="RedirectTo('https://play.google.com/store/apps/developer?id=Mukund+Kumar/')" title="Visit Google Play"><img src="${baseUrl}image/googlePlay.jpg" alt="Google Play"/></a><span class="space"></span>
    <a onclick="RedirectTo('https://kmukund439@gmail.com/')" title="kmukund439@gmail.com"><img src="${baseUrl}image/gmail.png" alt="gmail"/></a><span class="space"></span>
    <a onclick="RedirectTo('https://www.linkedin.com/in/mukundkumar1729/?originalSubdomain=in')"><img src="${baseUrl}image/LinkedIn.png" alt="linkedIn"/></a><span class="space"></span>
    <a onclick="RedirectTo('https://twitter.com/mukundkumar1729')"><img src="${baseUrl}image/twitter.png" alt="twitter"/> </a><span class="space"></span>
    <a onclick="RedirectTo('https://www.facebook.com/mukundkumar1729')"><img src="${baseUrl}image/fb-art.png" alt="facebook"/></a>
    <span class="line-break"><br/><br/></span>
    <a onclick="RedirectTo('https://www.hackerearth.com/@kmukund439')"><img src="${baseUrl}image/hackerEarth.png" alt="HackerEarth"/></a>
    <a onclick="RedirectTo('https://www.instagram.com/_mukundkumar1729/')"><img src="${baseUrl}image/instagram.jpg" alt="Instagram"/></a>
    <a onclick="RedirectTo('https://in.pinterest.com/kmukund439/boards/')"><img src="${baseUrl}image/pinterestLogo.jpg" alt="pinterest"/></a>
    <a onclick="RedirectTo('https://rapidapi.com/user/mukundKumar')"><img src="${baseUrl}image/rapidApi.jpg" alt="Rapid API"/></a>

    <br/><br/>
    `;
    
    let linksEL = $('#contactUsSection .contactUs');
    $(linksEL).append(links);
    $("contactUsSection").show();
}

function RedirectToCurrentApp(){
    window.location.href = appUrl;
}