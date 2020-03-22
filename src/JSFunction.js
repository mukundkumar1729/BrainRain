 $(document).ready(function(){
        var fileUploadPath= './data/dataRepository.json';
        $.ajax({
                url: fileUploadPath,
                contentType:'json',
                success: function(data,status){
                ProcessQuesAns(data.quesAns);   
                },
                error: function(err, status){
                }
            });
        });

function HideShow(e){
  debugger;
  let domainTypeValue = `data-domain-${e.value}`;
  const table = $('#dvQuesAnsTable').DataTable(); 
  table.search(domainTypeValue).draw();
    $('input[type="search"]').val('');
}

    function ProcessQuesAns(data){
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
        $('#dvQuesAnsTable').dataTable({
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
                    <div class='col-md-12' style='${style}'>${item}</div></div>`;
        return row;
    }

    function CreateOptionForQuesAns(options){
      var ddl = document.getElementsByClassName('domain')[0];
      if(ddl.options.length == 0)
      {
        ddl.options[ddl.options.length] = new Option("All", "all");
      for(option of options) {
        ddl.options[ddl.options.length] = new Option(option.toUpperCase(), option.toLowerCase());
    }
  }
  }
	
	function Redirect(page){
		window.location.href = page+ '.html';
  }