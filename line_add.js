function make_List()
{
	var my_Data=$('#hidden_content').text();
	var data_Array=my_Data.split(". ");
	var objUl = $('<ol></ol>');
	for (i = 0; i < data_Array.length; i++)
	{
		var objLi = $('<li></li>');
		var objA = $('<pre></pre>');
		objA.text(data_Array[i]+".");
		objLi.append(objA);
		objUl.append(objLi);
	}
	$('#file_display').append(objUl);
	$("#file_display").animate({scrollTop:$("#file_display")[0].scrollHeight},4800);
}
