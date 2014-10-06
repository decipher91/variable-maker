var conditions = {};
var output = document.getElementById('output');

//defaults

conditions.functionMaker = true;
conditions.tableMaker = false;

function hideTable () {
	document.getElementById('functions').style.display = "block";
	document.getElementById('tables').style.display = "none";
	conditions.functionMaker = true;
	conditions.tableMaker = false;

}

function hideFunc () {
	document.getElementById('tables').style.display = "block";
	document.getElementById('functions').style.display = "none";
	conditions.tableMaker = true;
	conditions.functionMaker = false;
}


function toNumber(string) {
   if(string) { 
       return parseFloat(string) 
   } 
    return 0;
}

function varMaker (){

	var variable = document.getElementById('variable').value;
	var repeats = toNumber(document.getElementById('repeats').value);
	var func = document.getElementById('func').value;
	var output = document.getElementById('output');

	output.innerHTML = "";

	if (conditions.functionMaker === true){ 
		for (var x = 1; x < repeats + 1; x++){
			output.innerHTML += (func + "(@" + variable + "_0" + x +");" + "<br>");
		}
	}

	if (conditions.tableMaker === true){ 
		for (var x = 1; x < repeats + 1; x++){
			output.innerHTML += ("&#60;td&#62;" + "@" + variable + "_0" + x + "&#60;&#47;td&#62;" + "<br>");
		}
	} 
}