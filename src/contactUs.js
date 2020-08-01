
$(document).ready(function(){
    AppsLink();
    ContactUsSocialMediaLinks();
});

function AppsLink(){
const appsLink = `
<a href="${constant.urls.brainrain_Aapp}" title="${constant.title.brainrain}" target="_blank" class="btn btn-info" style="border-radius:25px;">Get BrainRain App Here</a><br/>
<a href="${constant.urls.all_Aapp}" title="${constant.title.all}" target="_blank" class="btn btn-info" style="border-radius:25px;margin-top:5px;">Get all App</a>
`; 

let qrCodeEl = $('.contacts .qrCode');
$(qrCodeEl).append(appsLink);
}

function ContactUsSocialMediaLinks(){
    const links = `
    <a href="https://kmukund439@gmail.com/" target="_blank" title="kmukund439@gmail.com"><img src="image/gmail.png" alt="gmail"/></a><span class="space"></span>
    <a href="https://www.linkedin.com/in/mukundkumar1729/?originalSubdomain=in" target="_blank"><img src="image/LinkedIn.png" alt="linkedIn"/></a><span class="space"></span>
    <a href="https://twitter.com/mukundkumar1729" target="_blank"><img src="image/twitter.png" alt="twitter"/> </a><span class="space"></span>
    <a href="https://www.facebook.com/mukundkumar1729" target="_blank"><img src="image/fb-art.png" alt="facebook"/></a>
    <span class="line-break"><br/><br/></span>
    <a href="https://www.hackerearth.com/@kmukund439" target="_blank"><img src="image/hackerEarth.png" alt="HackerEarth"/></a>
    <a href="https://www.instagram.com/_mukundkumar1729/" target="_blank"><img src="image/instagram.jpg" alt="Instagram"/></a>
    <a href="https://in.pinterest.com/kmukund439/boards/" target="_blank"><img src="image/pinterestLogo.jpg" alt="pinterest"/></a>
    <br/><br/>
    `;
    let linksEL = $('.contacts .contactUs');
    $(linksEL).append(links);
}