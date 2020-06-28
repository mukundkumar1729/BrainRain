
$(document).ready(function(){
    AppsQRCode();
    ContactUsSocialMediaLinks();
});

function AppsQRCode(){
const qrCode = `
<a href="https://app.appsgeyser.com/11045965/BrainRain" target="_blank">Download Here</a><br/>
<iframe src="https://appsgeyser.com/social_widget/social_widget.php?width=100&height=100&apkName=BrainRain_11045965&simpleVersion=yes" 
                        width="180" height="150"   title="Scan QR Code to download and browse in our app"></iframe>
                `;
let qrCodeEl = $('.contacts .qrCode');
$(qrCodeEl).append(qrCode);
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