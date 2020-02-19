// ***** Square mouseover functionality ***** //

function showSolution(element){
	element.className = "cssNumMatrixSelected";

	var leftTd = getLeftTd(element.id);
	leftTd.className = "cssNumMatrixSelected";

	var topTd = getTopTd(element.id);
	topTd.className = "cssNumMatrixSelected";
}

function hideSolution(element){
	element.className = "cssNumMatrixDefault";

	var leftTd = getLeftTd(element.id);
	leftTd.className = "cssNumMatrixDefault";

	var topTd = getTopTd(element.id);
	topTd.className = "cssNumMatrixDefault";
}

function getLeftTd(elementId){
	//multiT multiplication id prefix in the table
	//addT addition id prefix in the table

	var idPrefix;
	if(elementId.indexOf("multiT") > -1)
		idPrefix = "multiT";
	else
		idPrefix = "addT";

	var row = elementId.substr(idPrefix.length + 1, 2);
	return getDomElement(idPrefix + "r" + row + "d00");
}

function getTopTd(elementId){

	var idPrefix;
	if(elementId.indexOf("multiT") > -1)
		idPrefix = "multiT";
	else
		idPrefix = "addT";

	var col = elementId.substr(idPrefix.length + 4,elementId.length+1);
	return getDomElement(idPrefix + "r00" + "d" + col);
}

// ***** Toggle ***** //

function toggleState(element, enableFun, disableFun, enableText, disableText){

	if(element.className == "cssSelectedButton"){
		element.className = "cssButton";
		eval(disableFun + "()");
		element.innerHTML = enableText;
	}
	else{
		var canToggle = eval(enableFun + "()");
		if(!canToggle)
			return;
		element.className = "cssSelectedButton";
		element.innerHTML = disableText;
	}
}


// ***** Square exercise solver ***** //

function showAnswer(){
	if(isQuestionnaireFinished())
		return;

	var left = parseInt(getDomElement("lblLeftNum").innerHTML);
	var right = parseInt(getDomElement("lblRightNum").innerHTML);
	var operation = getDomElement("lblOperation").innerHTML
	var answer;

	if(operation != "*") {
		if(operation != "+"){
			setMsgInfo("לא ניתן להציג פעולה זו");
			return false;
		}
	}

	var idPrefix;
	if(operation == "*"){
		idPrefix = "multiT";
		answer = left * right;
	}else{
		idPrefix = "addT";
		answer = left + right;
	}			

	if(left > 10 || right > 10){
		setMsgInfo("לא ניתן להציג פתרון אשר ערכו מעל 100");
		return false;
	}

	getDomElement("txtAnwersNum").value = answer;
	getDomElement("txtAnwersNum").disabled = true;

	var rowNum = (left < 10)? "0"+left:left;
	var answerTd = getDomElement(idPrefix + "r" + rowNum + "d0" + right);

	//answerTd.className = "cssShowSolutionAnswer";
	answerTd.style.borderStyle = "groove";
	answerTd.style.borderColor = "#E4E4E4";
	answerTd.style.fontWeight = "bold";
	var leftTd = getDomElement(idPrefix + "r" + rowNum  + "d00");
	//leftTd.className = "cssShowSolutionNumbers";
	leftTd.style.borderStyle = "groove";
	leftTd.style.borderColor = "#E4E4E4";
	var topTd = getDomElement(idPrefix + "r00d0" + right);
	topTd.className = "cssShowSolutionNumbers";
	topTd.style.borderStyle = "groove";
	topTd.style.borderColor = "#E4E4E4";

	return true;
}

function hideAnswer(){
	var left = parseInt(getDomElement("lblLeftNum").innerHTML);
	var right = parseInt(getDomElement("lblRightNum").innerHTML);
	var operation = getDomElement("lblOperation").innerHTML
	var answer = left * right;
	var borderBg;
	var idPrefix;
	if(operation == "*")
		idPrefix = "multiT";
	else
		idPrefix = "addT";

	getDomElement("txtAnwersNum").value = "";
	getDomElement("txtAnwersNum").disabled = false;


	if(document.querySelector("link[rel='stylesheet']").href.indexOf("football.css") > -1)
		borderBg = "#fbfbfb";
	else
		borderBg = "#f0f0f5";

	var rowNum = (left < 10)? "0"+left:left;
	var answerTd = getDomElement(idPrefix + "r" + rowNum + "d0" + right);
	answerTd.style.borderStyle = "solid";
	answerTd.style.borderColor = borderBg;
	answerTd.style.fontWeight = "normal";
	var leftTd = getDomElement(idPrefix + "r" + rowNum  + "d00");
	leftTd.style.borderStyle = "solid";
	leftTd.style.borderColor = borderBg;
	var topTd = getDomElement(idPrefix + "r00d0" + right);
	topTd.style.borderStyle = "solid";
	topTd.style.borderColor = borderBg;

	getDomElement("txtAnwersNum").focus();
}

