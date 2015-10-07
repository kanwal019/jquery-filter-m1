function start_Validate() 
{
    var x, text;
    x = document.getElementById("start_line").value;
    if (isNaN(x) || x < 1)
	{
        alert("Invalid Start Line !!");
    } 
}
function end_Validate() 
{
    var x, text;
    x = document.getElementById("end_line").value;
    if (isNaN(x) || x < 1)
	{
        alert("Invalid End Line !!");
    } 
}
