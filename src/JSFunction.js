let quesAnsData = [];
$(document).ready(function(){
  GetDataOnPageLoad();
         });

         function GetDataOnPageLoad(){
          var fileUploadPath= './data/dataRepository.json';
          if(quesAnsData.length == 0){
            $.ajax({
              url: fileUploadPath,
              contentType:'json',
              success: function(data,status){
                  ActionOnPageLoad(data.quesAns);
                  quesAnsData = data.quesAns; 
                },
                error: function(err, status){
                }
            });
          }else{
            ActionOnPageLoad(quesAnsData);
          }
         }

         function ActionOnPageLoad(data){
          ShowSingleDiv();
          ProcessQuesAns(data);
          AlignSearchBox();
         }
function HideShow(e){

  let domainTypeValue =  `data-domain-${e.value == "all" ? "" : e.value}`;
  const table = $('#dvQuesAnsTable').DataTable(); 
  table.search(domainTypeValue).draw();
    $('input[type="search"]').val('');
}

    function ProcessQuesAns(data){
      if(quesAnsData.length > 0){
        $('#dvQuesAnsTable').DataTable().clear().destroy();
      }
        var html = '';
        let options = [];
        for(var item of data){
            options.includes(item.domain) ? '' : options.push(item.domain);
            if(item.ques.trim() != '' ){
                html += '<tr><td>';
                html += `<span style='display:none'>data-domain-${item.domain.toLowerCase()}</span>`;
                html += CreateElementForQuesAns(item.ques,item.domain,'ques');
                html += CreateElementForQuesAns(item.ans,item.domain,'ans');
                html += '</td></tr>';
            }
        }
        CreateOptionForQuesAns(options);
        var dvQuesAns = document.getElementById('dvQuesAns');
        dvQuesAns.innerHTML = '';
        dvQuesAns.innerHTML= html;
        
        $('#dvQuesAnsTable').DataTable({
          "order":[],
          "lengthChange": true,
          "pageLength": 25,
          dom: 'Bfrtip',
          buttons: [
            'copy', 'csv', 'excel', 'pdf','print'
        ]
        });
    }

    function CreateElementForQuesAns(item, domain, style){
        style = style == 'ques' ? "background-color:white;margin-top:10px" :"background-color:green";
        let row = `<div class='row'>
                    <div class='col-md-12 col-12' style='${style}'>${item}</div></div>`;
        return row;
    }

    function CreateOptionForQuesAns(options){
      var ddl = document.getElementsByClassName('domain')[0];
      ddl.options.length = 0;
        ddl.options[ddl.options.length] = new Option("All", "all");
      for(option of options) {
        ddl.options[ddl.options.length] = new Option(option.toUpperCase(), option.toLowerCase());
    }
  }
	
	function Redirect(page){
		window.location.href = page+ '.html';
  }

  function AlignSearchBox(){
		const width = screen.width;
		if(width <= 640){
      $("#dvQuesAnsTable_filter").css({"margin-top": "0", "float": "left"});
		}
  }
  
  function CreateQuesAns(){
    var quesObj = quesAnsData[quesAnsData.length-1];
    const id=quesObj.ID + 1;
    const quesID =quesObj.quesID + 1;
    let ddl = $('#updateBrainRain .domain')[0];
    const domain = ddl.value == null ? "misc" : ddl.value;
    const question = $('#question').val();
    const answer =$('#answer').val();
    var quesAns = {
      "ID":id,
			"quesID":quesID,
			"user":"kmukund439@gmail.com",
			"domain":domain,
			"ques":question,
			"ans":answer
    };
    quesAnsData.push(quesAns);
    if(confirm('Do you want to go to ques ans lists ?')){
      GetDataOnPageLoad();
    }
  }

  function ShowSingleDiv(div){
    $('.spa-div').hide();
    div = div == null ? 'listing' : div;
    $('#'+ div).show();
  }