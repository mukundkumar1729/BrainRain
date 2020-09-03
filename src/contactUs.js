$(document).ready(function(){
    AppsLink();
    ContactUsSocialMediaLinks();
    $("#contactUsSection img:not(.noImageStyle)").css({"height": "40px", "width": "50px", "border-radius": "50%"})
    $(".space").css({"width":"60px"});
    $("#contactUsSection").show();
});

function AppsLink(){
const appsLink = `
<a onclick="RedirectToCurrentApp();"><img src="${baseUrl}image/googlePlayBadge.jpg" class="noImageStyle" alt="Google Play"/></a><span style="margin-right:5px;"></span>
`; 

$('#contactUsSection').append(appsLink);
}

function ContactUsSocialMediaLinks(){
    const socialMediaLinks = `
    <a onclick="RedirectTo('https://play.google.com/store/apps/developer?id=Mukund+Kumar/')" title="Visit Google Play"><img src="${baseUrl}image/googlePlay.jpg" alt="Google Play"/></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://kmukund439@gmail.com/')" title="kmukund439@gmail.com"><img src="${baseUrl}image/gmail.png" alt="gmail"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://www.linkedin.com/in/mukundkumar1729/?originalSubdomain=in')"><img src="${baseUrl}image/LinkedIn.png" alt="linkedIn"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://twitter.com/mukundkumar1729')"><img src="${baseUrl}image/twitter.png" alt="twitter"/> </a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://www.facebook.com/mukundkumar1729')"><img src="${baseUrl}image/fb-art.png" alt="facebook"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://www.hackerearth.com/@kmukund439')"><img src="${baseUrl}image/hackerEarth.png" alt="HackerEarth"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://www.instagram.com/_mukundkumar1729/')"><img src="${baseUrl}image/instagram.jpg" alt="Instagram"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://in.pinterest.com/kmukund439/boards/')"><img src="${baseUrl}image/pinterestLogo.jpg" alt="pinterest"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://rapidapi.com/user/mukundKumar')"><img src="${baseUrl}image/rapidApi.jpg" alt="Rapid API"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://github.com/mukundkumar1729')"><img src="${baseUrl}image/github.png" alt="github"/></a></a><span style="margin-right:5px;"></span>
    <a onclick="RedirectTo('https://www.quora.com/profile/Mukund-Kumar-107')"><img src="${baseUrl}image/quora.jpg" alt="quora"/></a></a><span style="margin-right:5px;"></span>

    <br/><br/>
    `;
    
    $('#contactUsSection').append(socialMediaLinks);
}

function RedirectToCurrentApp(){
    if(!appUrl || appUrl.trim() == ""){
        window.location.href= 'https://play.google.com/store/apps/developer?id=Mukund+Kumar/';
    }else{
        window.location.href=appUrl;
    }
}