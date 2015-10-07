function selectAll()
{
	$('#file_display').empty();
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
function top50()
{
	$('#file_display').empty();
	var my_Data=$('#hidden_content').text();
	var data_Array=my_Data.split(". ");
	var objUl = $('<ol></ol>');
	for (i = 0; i < 50; i++)
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
function top100()
{
	$('#file_display').empty();
	var my_Data=$('#hidden_content').text();
	var data_Array=my_Data.split(". ");
	var objUl = $('<ol></ol>');
	for (i = 0; i < 100; i++)
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
function bot50()
{
	$('#file_display').empty();
	var my_Data=$('#hidden_content').text();
	var data_Array=my_Data.split(". ");
	var objUl = $('<ol start='+(data_Array.length-50)+'></ol>');
	for (i = data_Array.length-50; i < data_Array.length; i++)
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
function bot100()
{
	$('#file_display').empty();
	var my_Data=$('#hidden_content').text();
	var data_Array=my_Data.split(". ");
	var objUl = $('<ol start='+(data_Array.length-100)+'></ol>');
	for (i = data_Array.length-100; i < data_Array.length; i++)
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
