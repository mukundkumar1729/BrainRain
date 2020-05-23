const constant = {
    update: "Update",
    create: "Create",
    add: "Add",
    all: "All",
    misc: "Misc",
    ques: "ques",
    ans: "ans",
    empty: "",
    dataDomain: "data-domain",
    confirmDelete: "Are you sure to delete ?",
    confirmListing: "Do you want to go to ques ans lists ?",
    alertNoChange: "you didn't made any change to update",
    qnaEmpty: "Question and answer can't be empty"
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
    question: "#question",
    answer: "#answer",
    dvAddEditQnsAnsBySave:"#dvAddEditQnsAnsBySave",
    dvAddQnsAnsByUpload:"#dvAddQnsAnsByUpload",
    AddQnsAnsTable:"#QuesAnsAddTable",
    dvAddQuesAns:"#dvQuesAnsAdd",
    dvAddQnsAnsByUploadLoader:"#dvAddQnsAnsByUploadLoader"
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

let quesAnsData = [];
let quesAnsUploadedData = [];

const dbRef = firebase.database().ref();
const quesAnsRef = dbRef.child('quesAns');

$(document).ready(function() {
    document.getElementById("PrePageLoad").classList.add("loader");
    SetUserEmail();
    const resp = checkNetConnection();
    if(resp){
        sendEmail();
        GetDataOnPageLoad_FirebaseDB();
    }
    else{
        alert("Hi, You are viewing site in offline mode.");
        GetDataOnPageLoad_JSONFile();
    }
    $(window).resize(function() {
        AlignSearchBox();
    });
});

function SetUserEmail(){
    let userEmailID = $(control.user);
    $(userEmailID).text('kmukund439@gmail.com');
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
                document.getElementById("PrePageLoad").classList.remove("loader");
            },
            error: function(err, status) {
                document.getElementById("PrePageLoad").classList.remove("loader");
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
            document.getElementById("PrePageLoad").classList.remove("loader");
        });
    }else{
        ActionOnPageLoad(quesAnsData);
        document.getElementById("PrePageLoad").classList.remove("loader");
}
}

function ActionOnPageLoad(data) {
    ShowSingleDiv();
    ProcessQuesAns(data);
    AlignSearchBox();
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

    CreateOptionForQuesAns(options);
    var dvQuesAns = $(control.dvQuesAns);
    dvQuesAns.html('');
    dvQuesAns.html(html);

    $(control.dvQuesAnsTable).DataTable({
        "order": [],
        "lengthChange": true,
        "pageLength": 25,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
}

function GetQuesAnsTBodyHTML(data){
    let html = '';
    let options = [];
    for (var item of data) {
        options.includes(item.domain) ? '' : options.push(item.domain);
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
    const editButton = `<button type='button' class='btn btn-primary editButton' onclick='PreUpdateQuesAns("${item.ID}")' style='float:right;margin-right:-15px'>Edit</button>`;
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
    let el = $(constant.saveButton);
    $(el).val(constant.add.toLowerCase());
    $(el).text(constant.add);
    $(`${control.updateBrainRain} .domain`)[0].disabled = false;
    $(control.question).val('');
    $(control.answer).text('');
}


function CreateQuesAns() {
    var quesObj = quesAnsData[quesAnsData.length - 1];
    const id = quesObj.ID + 1;
    const quesID = quesObj.quesID + 1;
    let ddl = $(`${control.updateBrainRain} .domain`)[0];
    const domain = ddl.value == null ? constant.misc : ddl.value;
    const question = $(control.question).val();
    const answer = $(control.answer).val();
    if(question.trim() == '' && answer.trim() == ''){
        alert(constant.qnaEmpty);
        $(control.question).focus();
    }else{
        var quesAns = {
            "ID": id,
            "quesID": quesID,
            "user": "kmukund439@gmail.com",
            "domain": domain,
            "ques": question,
            "ans": answer
        };
        quesAnsData.push(quesAns);
        CreateQuesAns_FirebaseDB(quesAns)
        if (confirm(constant.confirmListing)) {
            GetDataOnPageLoad_FirebaseDB();
        }
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
function AlignSearchBox() {
    const width = screen.width;
    if (width <= 640) {
        $(control.dvQuesAnsTable_filter).css({
            "margin-top": "0",
            "float": "left"
        });
        if(width < 300){
            $(`${control.dvQuesAnsTable_filter} ${control.label}`).addClass("text-left");
      
        }
    }
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
            document.getElementById("PrePageLoad").classList.add("loader");
	    	var quesAns = {
	    			"ID": id + 1 + index,
		    		"quesID": quesID + 1 + index,
			    	"user": "kmukund439@gmail.com",
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
     document.getElementById("PrePageLoad").classList.remove("loader");	 
});
GetDataOnPageLoad_JSONFile(quesAnsData);
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "gordiansoftware",
        Password : "g0rdian1729",
        To : 'kmukund439@gmail.com',
        From : "gordiansoftware@gmail.com",
        Subject : "Welcome",
        Body : "Hi, Mukund. Welocome to gordian software portal",
    })
    .then(function(message){
        console.log(message);
    });
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
