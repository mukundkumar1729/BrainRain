$(document).ready(function(){
    GetNews();
});
let isProgrammingSection = false;

function GetNews(page){
    let newsArticles = JSON.parse(sessionStorage.getItem(constant.newsArticles));
    if(page == constant.programmingSection){
        isProgrammingSection = true;
        newsArticles = JSON.parse(sessionStorage.getItem(constant.pNewsArticles)); 
    }else{
        isProgrammingSection = false;
    }

    if(!newsArticles){
        $.ajax({
            url: isProgrammingSection ? (constant.newsAPI.replace("software","programming")) : constant.newsAPI,
            type:'GET',
            success: function(data, status) {
                 SetNewsMarquee(data);
                 if(isProgrammingSection)
                     sessionStorage.setItem(constant.pNewsArticles, JSON.stringify(data));
                 else
                    sessionStorage.setItem(constant.newsArticles, JSON.stringify(data));
            },
            error: function(err, status) {
            }
        });
    }else{
         SetNewsMarquee(newsArticles);
    }
}

function SetNewsMarquee(data){
    html = '';
    for(let article of data.articles){
        html += `<a href='javascript:void(0)' title='click to get details' onclick='SetNewsDetails("${article.title}")'>
                 <span>${article.title}</span>
                </a>`;
    }
    $(control.marqueeContent).html(html);
}

function SetAllNewsDetails(){
    ShowSingleDiv(control.newsSection);
    let ind = 0;
    let newsArticles = {};
    if(isProgrammingSection){
        newsArticles = JSON.parse(sessionStorage.getItem(constant.pNewsArticles)).articles;
    }else{
        newsArticles = JSON.parse(sessionStorage.getItem(constant.newsArticles)).articles;
    }
    let newsTitle = $(control.newsTitle).clone();
    let newsDescription = $(control.newsDescription).clone();
    let newsImage = $(control.newsImage).clone();

    for(let article of newsArticles){
        if(ind == 0){
            $(control.newsTitle).html(article.title);
            $(control.newsDescription).html(article.description).after(`<a href='${article.url}'>${article.url}</a>`);
            $(control.newsImage).attr('src',article.image);
        }else{
        let html = `<div class="allNewsDetails">
                    <div class="row">
                        <div class="col-md-12">
                        <h3 id="newsTitle">${article.title}</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <h4 id="newsDescription">${article.description}</h4>
                        <a href="${article.url}"></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <img id="newsImage" src="${article.image}" alt="${article.url}" width="100%" height="100%" />
                        </div>
                    </div></div>`;
                    $(control.newsSectionHL).before(html);
        }
        ind++;
    }
}

function SetNewsDetails(title){
    ShowSingleDiv(control.newsSection);
    $('.allNewsDetails').remove();
    let newsArticles = {};
    if(isProgrammingSection){
        newsArticles = JSON.parse(sessionStorage.getItem(constant.pNewsArticles)).articles;
    }else{
        newsArticles = JSON.parse(sessionStorage.getItem(constant.newsArticles)).articles;
    }
    for(let article of newsArticles){
        if(article.title.toLowerCase() == title.toLowerCase()){
            $(control.newsTitle).html(article.title);
            $(control.newsDescription).html(article.description).after(`<a href='${article.url}'>${article.url}</a>`);;
            $(control.newsImage).attr('src', article.image);
            break;
        }
    }
}