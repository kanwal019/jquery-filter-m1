function line_crit()
{
	$('#file_display').empty();
	var my_Data=$('#hidden_content').text();
	var start=$('#start_line').val();
	var end=$('#end_line').val();  
	var data_Array=my_Data.split(". ");
	var objUl = $('<ol start='+start+'></ol>');
	for (i = start; i <= end; i++)
	{
		var objLi = $('<li></li>');
		var objA = $('<pre></pre>');
		objA.text(data_Array[i]+".");
		objLi.append(objA);
		objUl.append(objLi);
	}
	$('#file_display').append(objUl);
	//$("#file_display").animate({scrollTop:$("#file_display")[0].scrollHeight},4800);
}
