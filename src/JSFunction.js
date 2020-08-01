const constant = {
    update: "Update",
    create: "Create",
    add: "Add",
    all: "All",
    misc: "Misc",
    ques: "ques",
    ans: "ans",
    empty: "",
    domain:"domain",
    dataDomain: "data-domain",
    confirmDelete: "Are you sure to delete ?",
    confirmListing: "Do you want to go to ques ans lists ?",
    alertNoChange: "you didn't made any change to update",
    qnaEmpty: "Question and answer can't be empty",
    lastChild:"nth-last-child(1)",
    secondLastChild:"nth-last-child(2)",
    nextQuestion:"Next Question",
    newsArticles:"newsArticles",
    pNewsArticles:"pNewsArticles",
    newsAPI:"https://gnews.io/api/v3/search?q=software&token=a200bb11d1b6155caffd725d56755f7a",
    listing:"listing",
    programmingSection:"programmingSection",
    newsSection:"newsSection",
    PrePageLoad:"PrePageLoad",
    loader:"loader",
    contactUsSection:"contactUsSection",
    urls:{
        all_Aapp:"https://play.google.com/store/apps/developer?id=Mukund+Kumar",
        brainrain:"https://brainrain.netlify.app/",
        brainrain_AGapp:"http://app.appsgeyser.com/11045965/BrainRain",
        brainrain_Aapp:"https://play.google.com/store/apps/details?id=com.wBrainRain_11045965",
        tictactoe:"https://brainrain-tictactoe.netlify.app/",
        tictactoe_AGapp:"http://app.appsgeyser.com/11438924/TicTacToe",
        tictactoe_Aapp:"https://play.google.com/store/apps/details?id=com.wTicTacToe_11438924",
        _2048:"https://brainrain-2048.netlify.app/",
        _2048_AGapp:"http://app.appsgeyser.com/11611166/2048%20BrainRain%20Game",
        _2048_Aapp:"https://play.google.com/store/apps/details?id=com.ww2048BrainRainGame_11611166",
        pairup:"https://brainrain-pairup.netlify.app/",
        pairup_AGapp:"http://app.appsgeyser.com/11608416/PairUp%20BrainRain%20Game",
        pairup_Aapp:"https://play.google.com/store/apps/details?id=com.wPairUpBrainRainGame_11608416"
    },
    title:{
        all:"Get all apps fom the same developer",
        brainrain:"The app lets user to prepare for programming techincal interview related to .net, C#, Javascript, SQL, MVC and also provides programs in C#. Also, let him edit existing question - answer, add one or multiple question - answer at a time or by importing from excel file. Also, the app shows the latest information related to software programming.",
        tictactoe:"Tic-tac-toe, also known as crosses or Xs and Os is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
        _2048:"2048 is a pair up game with 2 and its exponential multiple where adjacent numbers in the same row or column merge into one i.e. add if the they are same. With each slide or arrow triggered, 2 or 4 is generated at a random cell / block.",
        pairup:"Pairup is a board game played on 3X3 grid by a single player. The target for this game is to form a number from the preloaded/initial numbers 1 to 9"
    }

}

const control = {
    spaDiv: ".spa-div",
    user:".user",
    listing: "#listing",
    dvQuesAnsTable: "#dvQuesAnsTable",
    dvQuesAns: "#dvQuesAns",
    dvQuesAnsTable_filter: "#dvQuesAnsTable_filter",
    updateBrainRain: "#updateBrainRain",
    saveButton: "#saveButton",
    label: "label",
    question: "input#question",
    answer: "textarea#answer",
    dvAddEditQnsAnsBySave:"#dvAddEditQnsAnsBySave",
    dvAddQnsAnsByUpload:"#dvAddQnsAnsByUpload",
    AddQnsAnsTable:"#QuesAnsAddTable",
    dvAddQuesAns:"#dvQuesAnsAdd",
    dvAddQnsAnsByUploadLoader:"#dvAddQnsAnsByUploadLoader",
    addMoreButton:"#addMoreButtonTemplate",
    removeLastButton:"#removeLastButtonTemplate",
    brainRainNews:".brainRainNews",
    marqueeContent:".brainRainNews marquee span",
    newsSection:"#newsSection",
    newsTitle:"#newsSection #newsTitle",
    newsDescription:"#newsSection #newsDescription",
    newsImage:"#newsSection #newsImage",
    newsSectionHL:"#newsSection #newsSectionHL",
    gotoDdl:"select.page",
    CSharpProgramming:"#programmingSection #CSharpProgramming",
    summaryEl:"details summary",
    searchForQuestions:"input#searchForQuestions",
    PrePageLoadText:"#PrePageLoadText"
}
const firebaseConfig = {
    apiKey: "AIzaSyBN3vM2XOK7uXSgI-KmPqbKp6ZFE4Ws_uI",
    authDomain: "brainrain-a43d3.firebaseapp.com",
    databaseURL: "https://brainrain-a43d3.firebaseio.com",
    projectId: "brainrain-a43d3",
    storageBucket: "brainrain-a43d3.appspot.com",
    messagingSenderId: "428403134568",
    appId: "1:428403134568:web:1df9072c4e624e4243ebdd",
    measurementId: "G-1S797R81GE"
  };
  firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();
  const quesAnsRef = dbRef.child('quesAns');

let quesAnsData = [];
let quesAnsUploadedData = [];

let variables = {
    userEmailID:"kmukund439@gmail.com",
    globalCounter:0,
    localCounter:0
}

$(document).ready(function() {
    var timer = setInterval(MyTimer, 1000);
    document.getElementById(constant.PrePageLoad).classList.add(constant.loader);
    $(control.PrePageLoadText).fadeOut();
    SetUserEmail();
    loadNewsSectionScript();
    BindGoToPageDdl();
    const resp = checkNetConnection();
    if(resp){
        GetDataOnPageLoad_FirebaseDB();
    }
    else{
        alert("Hi, You are viewing site in offline mode.");
        GetDataOnPageLoad_JSONFile();
    }
    $(window).resize(function() {
        AlignElsOnSmallDevice();
    });
});

function MyTimer() {
debugger;
    if(variables.globalCounter == 0){
        variables.globalCounter = parseInt(sessionStorage.getItem('globalCounter'));
        if(isNaN(variables.globalCounter)){
            variables.globalCounter = 0;
        }
    }
    var d = (new Date()).toLocaleTimeString();
    const timerID = document.getElementById("timer");
    variables.globalCounter = variables.globalCounter + 1;
    variables.localCounter = variables.localCounter + 1;
    if(timerID != null){
        timerID.innerHTML = `${d} (${variables.globalCounter}s)`;
        timerID.title = `active from last ${(variables.globalCounter/60).toFixed(0)} minutes`;
    }
    sessionStorage.setItem('globalCounter',variables.globalCounter);
    if(variables.localCounter == 5){
        setAdsSection();
    }
    if(variables.localCounter == 7){
        SetContactsScript();
    }
}

function SetUserEmail(){
    $(control.user).text(variables.userEmailID);
}

function GetDataOnPageLoad_JSONFile() {
    var fileUploadPath = './data/dataRepository.json';
    if (quesAnsData.length == 0) {
        $.ajax({
            url: fileUploadPath,
            contentType: 'json',
            success: function(data, status) {
                ActionOnPageLoad(data.quesAns);
                quesAnsData = data.quesAns;
                document.getElementById(constant.PrePageLoad).classList.remove(constant.loader);
            },
            error: function(err, status) {
                document.getElementById(constant.PrePageLoad).classList.remove(constant.loader);
            }
        });
    } else {
        ActionOnPageLoad(quesAnsData);
    }
}

 function GetDataOnPageLoad_FirebaseDB() {
    if (quesAnsData.length == 0) {
        quesAnsRef.on("child_added", data => {
            quesAnsData = data.val(); 
            ActionOnPageLoad(quesAnsData);
            document.getElementById(constant.PrePageLoad).classList.remove(constant.loader);
        });
    }else{
        ActionOnPageLoad(quesAnsData);
        document.getElementById(constant.PrePageLoad).classList.remove(constant.loader);
}
}

function ActionOnPageLoad(data) {
    ShowSingleDiv();
    ProcessQuesAns(data);
    AlignElsOnSmallDevice();
}

function HideShow(e) {

    let domainTypeValue = `${constant.dataDomain}-${e.value == "all" ? "" : e.value}`;
    const table = $(control.dvQuesAnsTable).DataTable();
    table.search(domainTypeValue).draw();
    $('input[type="search"]').val('');
}

function ProcessQuesAns(data) {
    if (quesAnsData.length > 0) {
        $(control.dvQuesAnsTable).DataTable().clear().destroy();
    }
    
    const quesAnsTbodyData = GetQuesAnsTBodyHTML(data);
    var html = quesAnsTbodyData.html;
    let options = quesAnsTbodyData.options;

    CreateOptionForQuesAns(options,constant.domain);
    var dvQuesAns = $(control.dvQuesAns);
    dvQuesAns.html('');
    dvQuesAns.html(html);

    $(control.dvQuesAnsTable).DataTable({
        "order": [],
        "lengthChange": true,
        "pageLength": 25,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel',,'print',
            {
                extend:'pdf',
                footer:true,
                fieldSeparator: '\n\n',
                exportOptions: {
                    format: {
                        body: function (data) {
                            data = data.replace( /( |<([^>]+)>)/ig, ' ' ).replace('data-domain-','').replace('Edit','').replace(/(\r\n|\n|\r)/gm,"");
                            data = data.replace('?','?\n');
                               return  data;
                        }
                    },
                    customize: function (doc) {
                        doc['footer']=(function(page, pages) {
                            return {
                                columns: [
                                    {
                                        alignment: 'right',
                                        text: ['page ', { text: page.toString() },  ' of ', { text: pages.toString() }]
                                    }
                                ]
                            }
                        });
                    } 
                }
            }
        ]
    });
}

function GetQuesAnsTBodyHTML(data){
    let html = '';
    let options = [];
    for (var item of data) {
        let isOptionIncluded = false;
        for(var opt of options){
            isOptionIncluded = opt.toLowerCase() == item.domain.toLowerCase() ? true : false;
            if(isOptionIncluded){break;}
        }
        if(!isOptionIncluded){options.push(item.domain);}

        if (item.ques.trim() != '') {
            html += '<tr><td>';
            html += `<span style='display:none'>data-domain-${item.domain.toLowerCase()}</span>`;
            html += CreateElementForQuesAns(item, 'ques');
            html += CreateElementForQuesAns(item, 'ans');
            html += '</td></tr>';
        }
    }
    const quesAnsTbodyData = {html: html, options: options};
    return quesAnsTbodyData;
}

function CreateElementForQuesAns(item, qnsType) {
    style = qnsType == constant.ques ? "background-color:white;margin-top:10px" : "background-color:green";
    const editButton = `<button type='button' class='btn btn-primary editButton' onclick='PreUpdateQuesAns("${item.ID}")' style='float:right;'>Edit</button>`;
    let row = `<div class='row'>
                        <div class='col-md-12 col-12' style='${style}'>
                        ${qnsType == constant.ques ? item.ques : item.ans}
                        ${qnsType == constant.ques ? editButton : ''}
                        </div></div>`;
    return row;
}

function CreateOptionForQuesAns(options) {
    var ddl = document.getElementsByClassName('domain')[0];
    ddl.options.length = 0;
    ddl.options[ddl.options.length] = new Option(constant.all, constant.all.toLowerCase());
    for (option of options) {
        ddl.options[ddl.options.length] = new Option(option.toUpperCase(), option.toLowerCase());
    }
}

function SaveQuesAns(el) {
    const mode = $(el).val();
    if (mode == constant.update.toLowerCase()) {
        UpdateQuesAns(el);
    } else {
        CreateQuesAns();
    }
}

// Clears all the field of QuesAns to create a new QuesAns, updates value of save button to insert data 
function PreCreateQuesAns() {
    ShowSingleDiv(control.updateBrainRain);
    $(control.dvAddQnsAnsByUpload).hide();
    $(control.addMoreButton).show();
    $(control.removeLastButton).hide();
    let el = $(constant.saveButton);
    $(el).val(constant.add.toLowerCase());
    $(el).text(constant.add);
    $(`${control.updateBrainRain} .domain`)[0].disabled = false;
    $(control.question).val('');
    $(control.answer).text('');
}


function CreateQuesAns() {
    let ddl = $(`${control.updateBrainRain} .domain`)[0];
    const domain = ddl.value == null ? constant.misc : ddl.value;
    const qnsElement = $(`${control.dvAddEditQnsAnsBySave} .row ${control.question}`);
    const ansElement = $(`${control.dvAddEditQnsAnsBySave} .row ${control.answer}`);
    const qnsElementLength = qnsElement.length;

    for(var i = 0; i < qnsElementLength; i++){
        const question = $(qnsElement[i]).val();
        const answer = $(ansElement[i]).val();

    const quesObj = quesAnsData[quesAnsData.length - 1];
    const id = quesObj.ID + 1;
    const quesID = quesObj.quesID + 1;
    if(question.trim() == '' && answer.trim() == ''){
        alert(constant.qnaEmpty);
        $(control.question).focus();
    }else{
        var quesAns = {
            "ID": id,
            "quesID": quesID,
            "user": variables.userEmailID,
            "domain": domain,
            "ques": question,
            "ans": answer
        };
        quesAnsData.push(quesAns);
        CreateQuesAns_FirebaseDB(quesAns);
    }
    }
    if (confirm(constant.confirmListing)) {
        GetDataOnPageLoad_FirebaseDB();
    }
}

// creates question in firebase db
function CreateQuesAns_FirebaseDB(quesAns) {
    //const quesAnsChildRef = quesAnsRef.child('quesAnsDoc');
    // quesAnsChildRef.push(quesAns, function(){
    //     console.log("data has been inserted successfully");
    // });
    // alternate way to achieve the same action
    let id = quesAns.ID - 1;
    const quesAnsChildRef = quesAnsRef.child('quesAnsDoc/' + id);
    quesAnsChildRef.set(quesAns, function(){
        console.log("data has been inserted successfully");
    });
}

// Pre fills all the field of Ques Ans to make changes and update QuesAns, updates value of save button to update data 
function PreUpdateQuesAns(id) {
    ShowSingleDiv(control.updateBrainRain);
    $(control.dvAddQuesAns).hide();
    $(control.addMoreButton).hide();
    $(control.removeLastButton).hide();
    let el = $(control.saveButton);
    $(el).val(constant.update.toLocaleLowerCase());
    $(el).text(constant.update);
    $(el).attr('itemID', id);
    $(`${control.updateBrainRain} .domain`)[0].disabled = true;
    $(control.question).val(quesAnsData[id - 1].ques);
    $(control.answer).text(quesAnsData[id - 1].ans);
}

function UpdateQuesAns(el) {
    const id = $(el).attr("itemID");
    const question = $(control.question).val();
    const answer = $(control.answer).val();
    if(question.trim() == '' && answer.trim() == ''){
        alert(constant.qnaEmpty);
        $(control.question).focus();
    } else if (quesAnsData[id-1].ques == question && quesAnsData[id-1].ans == answer) {
            alert(constant.alertNoChange);
            return false;
        } else {
            quesAnsData[id - 1].ques = question;
            quesAnsData[id - 1].ans = answer;
            UpdateQuesAns_FirebaseDB(id, question, answer);
            if (confirm(constant.confirmListing)) {
                GetDataOnPageLoad_FirebaseDB();
            }
        }
    }

    function UpdateQuesAns_FirebaseDB(id, question, answer) {
        const quesAnsChildRef = quesAnsRef.child('quesAnsDoc/' + (id-1));
        quesAnsChildRef.update({
            "ques":question,
            "ans":answer
        });
    }
    

function DeleteQuesAns(id) {
    if (confirm(constant.confirmDelete)) {
        quesAnsData[id - 1].isActive = 0;
    } else {
        return false;
    }
}

// Hides all the div and show only one div (one section / one page)
function ShowSingleDiv(div) {
    $(control.spaDiv).hide();
    div = div == null ? control.listing : div;
    $(div).show();
}

// adjusts jquery datatable searchbox position on small screen
function AlignElsOnSmallDevice() {
    const width = screen.width;
    if (width <= 640) {
        $(control.dvQuesAnsTable_filter).css({
            "margin-top": "0",
            "float": "left"
        });
        $('#adsSection').css('margin-top','10px');
    }
    if(width < 300){
        $(`${control.dvQuesAnsTable_filter} ${control.label}`).addClass("text-left");
        }
        if(width < 640){}
        $('.contactUs span#line-break').html('');
    }

function Upload() {

        $(control.dvAddEditQnsAnsBySave).hide();
        $(control.dvAddQnsAnsByUpload).show();
        $(control.dvAddQnsAnsByUploadLoader).addClass("loader");	 

            //Reference the FileUpload element.
            var fileUpload = document.getElementById("fileUpload");
			

            //Validate whether File is valid Excel file.
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
            if (regex.test(fileUpload.value.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();

                    //For Browsers other than IE.
                    if (reader.readAsBinaryString) {
                        reader.onload = function (e) {
                            ProcessExcel(e.target.result);
                        };
                        reader.readAsBinaryString(fileUpload.files[0]);
                    } else {
                        //For IE Browser.
                        reader.onload = function (e) {
                            var data = "";
                            var bytes = new Uint8Array(e.target.result);
                            for (var i = 0; i < bytes.byteLength; i++) {
                                data += String.fromCharCode(bytes[i]);
                            }
                            BindUploadedData(data);
                            ProcessExcel(data);
                        };
                        reader.readAsArrayBuffer(fileUpload.files[0]);
                    }
                } else {
                    alert("This browser does not support HTML5.");
                    $(control.dvAddEditQnsAnsBySave).show();
        $(control.dvAddQnsAnsByUpload).hide();
                }
            } else {
                alert("Please upload a valid Excel file.");
                $(control.dvAddEditQnsAnsBySave).show();
                $(control.dvAddQnsAnsByUpload).hide();
            }
        }

function BindUploadedData(data){
       // $(control.dvAddQnsAnsByUpload).DataTable().clear().destroy();
        var html = GetQuesAnsTBodyHTML(data).html;
       
        var dvAddQuesAns = $(control.dvAddQuesAns);
        dvAddQuesAns.html('');
        dvAddQuesAns.html(html);
    
        $(control.AddQnsAnsTable).DataTable();
        $(control.dvAddQnsAnsByUploadLoader).removeClass("loader");	 
    }
		
function ProcessExcel(data) {
            //Read the Excel File data.
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            //Read all rows from First Sheet into an JSON array.
            quesAnsUploadedData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
            BindUploadedData(quesAnsUploadedData)
        }

// importing data only for json file
function ImportQnsAnsFromExcel(sender)
{
	var id = quesAnsData[quesAnsData.length-1].ID;
	var quesID = quesAnsData[quesAnsData.length-1].quesID;
    
	quesAnsUploadedData.forEach(function(item, index){
        if(item.ques && item.ans && item.domain){
            document.getElementById(constant.PrePageLoad).classList.add(constant.loader);
	    	var quesAns = {
	    			"ID": id + 1 + index,
		    		"quesID": quesID + 1 + index,
			    	"user": variables.userEmailID,
				    "domain": item.domain,
				    "ques": item.ques,
				    "ans": item.ans
                }; 
                quesAnsData.push(quesAns);
                CreateQuesAns_FirebaseDB(quesAns);
                $(control.dvAddQnsAnsByUpload).DataTable().clear().destroy();
            }
        else{
            alert("There is something wrong in the import file");  
            $(AddEditQnsAnsBySave).show();
        $(control.dvAddQnsAnsByUpload).hide();
     };
     document.getElementById(constant.PrePageLoad).classList.remove(constant.loader);	 
});
GetDataOnPageLoad_JSONFile(quesAnsData);
}

function SampleFileDownload(){
    window.location.href = "data/QnsAnsSampleFile.xlsx";
}

function checkNetConnection(){
    var xhr = new XMLHttpRequest();
    var url = "https://jsonip.com?callback=?";
    xhr.open('HEAD', url, false);
    try {
     xhr.send();
     if (xhr.status >= 200 && xhr.status < 304) {
      return true;
     } else {
      return false;
     }
    } catch (e) {
     return false;
    }
   }

   function AddMoreQuesAnsTemplate(){
       $(control.removeLastButton).show();
        let dvAddEditQnsAnsBySave = $(`${control.dvAddEditQnsAnsBySave} .row`);
        let quesRow = $(dvAddEditQnsAnsBySave[0]).clone();
        let ansRow = $(dvAddEditQnsAnsBySave[1]).clone();
        let saveButtonRow = dvAddEditQnsAnsBySave[dvAddEditQnsAnsBySave.length-1];

        $(saveButtonRow).before(`<b>${constant.nextQuestion}</b>`);
        $(saveButtonRow).before(quesRow);
        $(saveButtonRow).before(ansRow);
        $(saveButtonRow).before('<p></p>');

        let lastQnsEl = $(`${control.dvAddEditQnsAnsBySave} ${control.question}:${constant.lastChild}`);
        let lastAnsEl = $(`${control.dvAddEditQnsAnsBySave} ${control.answer}:${constant.lastChild}`);
        $(lastQnsEl).val('');
        $(lastAnsEl).val('');

   }

   function RemoveLastQuesAnsTemplate(){
    let lastQnsAns = $(`${control.dvAddEditQnsAnsBySave} .row`);
    rowsLength = lastQnsAns.length;
    for(var i = 0; i< rowsLength; i++)
    {
     if(i == rowsLength-3 || i == rowsLength-2){
            $(lastQnsAns[i]).remove();
        }
    }
    if(rowsLength==5){
        $(control.removeLastButton).hide();
    }
    var lastNextQuestionTitle = $(`b:contains(${constant.nextQuestion})`)
    $(lastNextQuestionTitle).last().remove();
}
// News Section Starts Here
function loadNewsSectionScript(){
    $.getScript("src/newsSFunctions.js");
}
// News Section Ends Here

// Ads Section Starts Here
function setAdsSection(){
    $.getScript( "src/adsJSCode.js" )
  .done(function( script, textStatus ) {})
  .fail(function( jqxhr, settings, exception ) {});
}
// Ads Section Ends Here

function ShowSinglePage(sender){
    if(sender.value == constant.contactUsSection){
        document.getElementById(constant.contactUsSection).scrollIntoView(true)
    }else{
    let div = '#' + sender.value;
    ShowSingleDiv(div);
    switch(sender.value) {
        case constant.newsSection:
            SetAllNewsDetails();
            $(control.gotoDdl).val(constant.newsSection);
          break;
        case constant.programmingSection:
           $.getScript("src/programmingSFunctions.js");
        default:
          // code block
      }   
    }
}

function BindGoToPageDdl(){
    let ddl = $(control.gotoDdl)[0];
    ddl.options.length = 0;
    let options = [{value: constant.listing, text: "Interview Questions"},
                   {value: constant.programmingSection, text: "Programming Section"},
                   {value: constant.newsSection, text: "News Section"},
                   {value: constant.contactUsSection, text:"Contact Us"}];
    for (option of options) {
        ddl.options[ddl.options.length] = new Option(option.text, option.value);
    }
}

function SetContactsScript(){
    $.getScript("src/contactUs.js");
}

function Redirect(url){
    url = Function(`return(constant.urls.${url})`)(); 
    window.location.href = url;

}
function Transfer(url){
    window.location.href = url;
}