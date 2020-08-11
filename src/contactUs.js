
$(document).ready(function(){
    AppsLink();
    ContactUsSocialMediaLinks();
});

function AppsLink(){
const appsLink = `
<a onclick="Transfer('${variables.urls.brainrain_Aapp}')" title="${variables.title.brainrain}" class="btn btn-info" style="border-radius:25px;">Get BrainRain App Here</a><br/>
<a onclick="Transfer('${variables.urls.all_Aapp}')" title="${variables.title.all}" class="btn btn-info" style="border-radius:25px;margin-top:5px;">Get all App</a><br/>
`; 

let qrCodeEl = $('.contacts .qrCode');
$(qrCodeEl).append(appsLink);
}

function ContactUsSocialMediaLinks(){
    const links = `
    <a onclick="Transfer('https://kmukund439@gmail.com/')" title="kmukund439@gmail.com"><img src="image/gmail.png" alt="gmail"/></a><span class="space"></span>
    <a onclick="Transfer('https://www.linkedin.com/in/mukundkumar1729/?originalSubdomain=in')"><img src="image/LinkedIn.png" alt="linkedIn"/></a><span class="space"></span>
    <a onclick="Transfer('https://twitter.com/mukundkumar1729')"><img src="image/twitter.png" alt="twitter"/> </a><span class="space"></span>
    <a onclick="Transfer('https://www.facebook.com/mukundkumar1729')"><img src="image/fb-art.png" alt="facebook"/></a>
    <span class="line-break"><br/><br/></span>
    <a onclick="Transfer('https://www.hackerearth.com/@kmukund439')"><img src="image/hackerEarth.png" alt="HackerEarth"/></a>
    <a onclick="Transfer('https://www.instagram.com/_mukundkumar1729/')"><img src="image/instagram.jpg" alt="Instagram"/></a>
    <a onclick="Transfer('https://in.pinterest.com/kmukund439/boards/')"><img src="image/pinterestLogo.jpg" alt="pinterest"/></a>
    <br/><br/>
    `;
    let linksEL = $('.contacts .contactUs');
    $(linksEL).append(links);
}