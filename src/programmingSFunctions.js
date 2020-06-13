$(document).ready(function(){
    GetPrograms_JSONFile();
});

function GetPrograms_JSONFile() {
    var filePath = './data/programmingRepository.json';
    $.ajax({
        url: filePath,
        contentType: 'json',
        success: function(data, status) {
            GetPrograms(data.programs);
        },
        error: function(err, status) {
        }
    });
}

function GetPrograms(data){
    let el = $(control.CSharpProgramming);
    let html = "";
    for(let program of data){
        html= `<details>
                <summary onclick='ImplementAccordion();'>${program.ques}</summary>
                <p>${program.ans}</p>
                </details>`;
        $(el).append(html);
    }
}

function ImplementAccordion(){
    $('details').removeAttr('open')
    $(this).parent().attr('open','open');
}