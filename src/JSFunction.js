let quesAnsData = [];
$(document).ready(function() {
    GetDataOnPageLoad();
    $(window).resize(function() {
        AlignSearchBox();
    });
});

function GetDataOnPageLoad() {
    var fileUploadPath = './data/dataRepository.json';
    if (quesAnsData.length == 0) {
        $.ajax({
            url: fileUploadPath,
            contentType: 'json',
            success: function(data, status) {
                ActionOnPageLoad(data.quesAns);
                quesAnsData = data.quesAns;
            },
            error: function(err, status) {}
        });
    } else {
        ActionOnPageLoad(quesAnsData);
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
    var html = '';
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

function CreateElementForQuesAns(item, qnsType) {
    style = qnsType == constant.ques ? "background-color:white;margin-top:10px" : "background-color:green";
    const editButton = `<button type='button' class='btn btn-primary' onclick='PreUpdateQuesAns("${item.ID}")' style='float:right;margin-right:-15px'>Edit</button>`;
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
    debugger;
    const mode = $(el).val();
    if (mode == constant.update) {
        UpdateQuesAns(el);
    } else {
        CreateQuesAns();
    }
}

function PreCreateQuesAns() {
    debugger;
    ShowSingleDiv(control.updateBrainRain);
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
        alert("Question and answer can't be empty");
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
        if (confirm(constant.confirmListing)) {
            GetDataOnPageLoad();
        }
    }
}

function PreUpdateQuesAns(id) {
    debugger;
    ShowSingleDiv(control.updateBrainRain);
    let el = $(control.saveButton);
    $(el).val(constant.update.toLocaleLowerCase());
    $(el).text(constant.update);
    $(el).attr('itemID', id);
    $(`${control.updateBrainRain} .domain`)[0].disabled = true;
    $(control.question).val(quesAnsData[id - 1].ques);
    $(control.answer).text(quesAnsData[id - 1].ans);
}

function UpdateQuesAns(el) {
    debugger;
    const id = $(el).attr("itemID");
    const question = $(control.question).val();
    const answer = $(control.answer).val();
    if(question.trim() == '' && answer.trim() == ''){
        alert("Question and answer can't be empty");
        $(control.question).focus();
    } else if (quesAnsData[id].ques == ques && quesAnsData[id].ans == ans) {
            alert(constant.alertNoChange);
            return false;
        } else {
            quesAnsData[id - 1].ques = ques;
            quesAnsData[id - 1].ans = ans;
            if (confirm(constant.confirmListing)) {
                GetDataOnPageLoad();
            }
        }
    }

function DeleteQuesAns(id) {
    if (confirm(constant.confirmDelete)) {
        quesAnsData[id - 1].isActive = 0;
    } else {
        return false;
    }
}


function ShowSingleDiv(div) {
    debugger;
    $(control.spaDiv).hide();
    div = div == null ? control.listing : div;
    $(div).show();
}

function AlignSearchBox() {
    const width = screen.width;
    if (width <= 640) {
        $(control,dvQuesAnsTable_filter).css({
            "margin-top": "0",
            "float": "left"
        });
        if(width < 300){
            $(`${control.dvQuesAnsTable_filter} ${control.label}`).addClass("text-left");
      
        }
    }
}

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
    alertNoChange: "you didn't made any change to update"
}

const control = {
    spaDiv: ".spa-div",
    listing: "#listing",
    dvQuesAnsTable: "#dvQuesAnsTable",
    dvQuesAns: "#dvQuesAns",
    dvQuesAnsTable_filter: "#dvQuesAnsTable_filter",
    updateBrainRain: "#updateBrainRain",
    saveButton: "#saveButton",
    label: "label",
    question: "#question",
    answer: "#answer"
}