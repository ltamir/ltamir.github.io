

// *****  Storage handling ***** //

function loadStorageData(key) {
    "use strict";
	var value = localStorage.getItem(key);
	return value;
}

function saveStorageData(key, value) {
    "use strict";
	localStorage.setItem(key, value);
}

function loadSessionData(key) {
    "use strict";
	var value = sessionStorage.getItem(key);
	return value;
}

function saveSessionData(key, value) {
    "use strict";
	sessionStorage.setItem(key, value);
}

function removeSessionData(key) {
    "use strict";
	sessionStorage.removeItem(key);
}


function registerUser(userName, fullName, email) {
    "use strict";
	saveStorageData(userName, email);
	saveStorageData(keyPrefix() + fullNameKey, fullName);
}

function getCurrentDateTime(){
    "use strict";
	var date = new Date(), formattedTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	return date.toLocaleDateString() + " " + formattedTime;
}


// ***** User Details ***** //

function loadSessionUserDetails(){
	_fullName = loadSessionData(fullNameKey);
	_email = loadSessionData(emailKey);
	_lastLoginDate = loadSessionData(lastLoginDateKey);
    _pageStyle = loadSessionData(pageStyleKey);
}

function saveSessionUserDetails(){
	saveSessionData(userNameKey, _userName);
	saveSessionData(emailKey, _email);
	saveSessionData(fullNameKey, _fullName);
	saveSessionData(lastLoginDateKey, _lastLoginDate);
    saveSessionData(pageStyleKey, _pageStyle);
}

function loadStorageUserDetails(){
	_fullName = loadStorageData(keyPrefix() + fullNameKey);
	_email = loadStorageData(keyPrefix() + emailKey);
	_lastLoginDate = loadStorageData(keyPrefix() + lastLoginDateKey);	
    _pageStyle = loadStorageData(keyPrefix() + pageStyleKey);
}

function saveStorageUserDetails(){
	saveStorageData(keyPrefix() + userNameKey, _userName);
	saveStorageData(keyPrefix() + emailKey, _email);
	saveStorageData(keyPrefix() + fullNameKey, _fullName);
	saveStorageData(keyPrefix() + lastLoginDateKey, _lastLoginDate);
    saveStorageData(keyPrefix() + pageStyleKey, _pageStyle);
}


// *****  Preferences ***** //

function loadSessionPreferences(){
    "use strict";
    _enableAddition = loadSessionData(enableAdditionKey);
    _enableSubtraction = loadSessionData(enableSubtractionKey);
    _enableMultiplication = loadSessionData(enableMultiplicationKey);
    _enableDivision = loadSessionData(enableDivisionKey);
    _numOfQuestions = loadSessionData(numOfQuestionsKey);
	_maxNumValue = loadSessionData(maxNumValueKey);
	_enableNegatives = loadSessionData(enableNegativesKey);
	_enableRemainder = loadSessionData(enableRemainderKey);
}

function saveSessionPreferences(){
    "use strict";
	
	saveSessionData(enabledOperationsKey, _enabledOperations);
	saveSessionData(enableAdditionKey, _enableAddition);
	saveSessionData(enableSubtractionKey, _enableSubtraction);
	saveSessionData(enableMultiplicationKey, _enableMultiplication);
	saveSessionData(enableDivisionKey, _enableDivision);
	
	saveSessionData(numOfQuestionsKey, _numOfQuestions);
	saveSessionData(maxNumValueKey, _maxNumValue);
	saveSessionData(enableNegativesKey, _enableNegatives);
	saveSessionData(enableRemainderKey, _enableRemainder);
}

function loadStoragePreferences(){
    "use strict";

    _enableAddition = loadStorageData(keyPrefix() + enableAdditionKey);
	_enableSubtraction = loadStorageData(keyPrefix() + enableSubtractionKey);
	_enableMultiplication = loadStorageData(keyPrefix() + enableMultiplicationKey);
	_enableDivision = loadStorageData(keyPrefix() + enableDivisionKey);

	_numOfQuestions = loadStorageData(keyPrefix() + numOfQuestionsKey);
	_maxNumValue = loadStorageData(keyPrefix() + maxNumValueKey);
	_enableNegatives = loadStorageData(keyPrefix() + enableNegativesKey);
	_enableRemainder = loadStorageData(keyPrefix() + enableRemainderKey);
}

function saveStoragePreferences(){
    "use strict";

	saveStorageData(keyPrefix() + enableAdditionKey, _enableAddition);
	saveStorageData(keyPrefix() + enableSubtractionKey, _enableSubtraction);
	saveStorageData(keyPrefix() + enableMultiplicationKey, _enableMultiplication);
	saveStorageData(keyPrefix() + enableDivisionKey, _enableDivision);

	saveStorageData(keyPrefix() + numOfQuestionsKey, _numOfQuestions);
	saveStorageData(keyPrefix() + maxNumValueKey, _maxNumValue);
	saveStorageData(keyPrefix() + enableNegativesKey, _enableNegatives);
	saveStorageData(keyPrefix() + enableRemainderKey, _enableRemainder);
}


// ***** user scores ***** //

function loadSessionScores(){
	_totalScore = parseInt(loadSessionData(totalScoreKey));
	_currentScore = parseInt(loadSessionData(currentScoreKey));
	_currentQuestion = parseInt(loadSessionData(currentQuestionKey));
	_totalQuestionnaires = parseInt(loadSessionData(totalQuestionnairesKey));
	_currentQuestionnaire = parseInt(loadSessionData(currentQuestionnaireKey));
	_questionsHistory = loadSessionData(questionsHistoryKey);
}

function saveSessionScores(){
	saveSessionData(totalScoreKey, _totalScore);
	saveSessionData(currentScoreKey, _currentScore);
	saveSessionData(currentQuestionKey, _currentQuestion);
	saveSessionData(totalQuestionnairesKey, _totalQuestionnaires);
	saveSessionData(currentQuestionnaireKey, _currentQuestionnaire);
	saveSessionData(questionsHistoryKey, _questionsHistory);
	
}

function loadStorageScores(){
	_totalScore = parseInt(loadStorageData(keyPrefix() + totalScoreKey));
	_currentScore = parseInt(loadStorageData(keyPrefix() + currentScoreKey));
	_currentQuestion = parseInt(loadStorageData(keyPrefix() + currentQuestionKey));
	_totalQuestionnaires = parseInt(loadStorageData(keyPrefix() + totalQuestionnairesKey));
	_currentQuestionnaire = parseInt(loadStorageData(keyPrefix() + currentQuestionnaireKey));
	_questionsHistory = loadStorageData(questionsHistoryKey);
}

function saveStorageScores(){
	saveStorageData(keyPrefix() + totalScoreKey, _totalScore);
	saveStorageData(keyPrefix() + currentScoreKey, _currentScore);
	saveStorageData(keyPrefix() + currentQuestionKey, _currentQuestion);
	saveStorageData(keyPrefix() + totalQuestionnairesKey, _totalQuestionnaires);
	saveStorageData(keyPrefix() + currentQuestionnaireKey, _currentQuestionnaire);
	saveStorageData(questionsHistoryKey, _questionsHistory);
}


function loadOperations(){

	enabledOperations = _enableAddition + _enableSubtraction + _enableMultiplication + _enableDivision;

	/*
	if( setEnableAddition() == 1 )
		enabledOperations += "+";
	if( loadSessionData("oprSubtraction") == 1)
		enabledOperations += "-";
	if( loadSessionData("oprMultiplication") == 1)
		enabledOperations += "*";
	if( loadSessionData("oprDivision") == 1)
		enabledOperations += "/";
	*/	
}


// ***** Navigation functions ***** //

function navigateLogin(){
	location.href = "login.html";
}

function navigatePreferences(){
	var userName = loadSessionData("userName");
	if(userName == null)
		setMsgFailure("השתמשו במסך הכניסה להיכנס או להירשם");
	else
		location.href = "preferences.html";
}

function navigateQuestions(){
	var userName = loadSessionData("userName");
	if(userName == null)
		setMsgFailure("השתמשו במסך הכניסה להיכנס או להירשם");
	else
	location.href = "questionnaire.html";
}

function navigateResults(){
	var userName = loadSessionData("userName");
	if(userName == null)
		setMsgFailure("השתמשו במסך הכניסה להיכנס או להירשם");
	else
		location.href = "results.html";

}

function navigateHistory(){
	var userName = loadSessionData("userName");
	if(userName == null)
		setMsgFailure("השתמשו במסך הכניסה להיכנס או להירשם");
	else
		location.href = "history.html";
}

function navigateNotes(){
	var userName = loadSessionData("userName");
	if(userName == null)
		setMsgFailure("השתמשו במסך הכניסה להיכנס או להירשם");
	else
		location.href = "about.html";
}



// ***** Helpers functions ***** //

function displayFullName(){
	_userName = loadSessionData("userName");
	if(_userName){
		_fullName = loadStorageData(keyPrefix() + fullNameKey);
		getDomElement("userNameMessage").innerHTML = "שלום " + _fullName;
	}else{
		getDomElement("userNameMessage").innerHTML = "שלום אורח/ת :)";
	}
}

function logout(){
	_userName = loadSessionData("userName");
	if(_userName){	
		logoutSession();
		navigateLogin();
	}
}

function logoutSession(){
	removeSessionData(userNameKey);
	removeSessionData(fullNameKey);
	removeSessionData(emailKey);
	removeSessionData(enabledOperationsKey);
	removeSessionData(enableAdditionKey);
	removeSessionData(enableSubtractionKey);
	removeSessionData(enableMultiplicationKey);
	removeSessionData(enableDivisionKey);
	removeSessionData(numOfQuestionsKey);
	removeSessionData(maxNumValueKey);
	removeSessionData(lastLoginDateKey);
	removeSessionData(enableNegativesKey);
	removeSessionData(enableRemainderKey);
	removeSessionData(totalScoreKey);
	removeSessionData(currentScoreKey);
	removeSessionData(currentQuestionKey);
	removeSessionData(currentQuestionnaireKey);
	removeSessionData(totalQuestionnairesKey);
	removeSessionData(pageStyleKey);
}

function getDomElement(elementId){
	var element = document.getElementById(elementId);
	return element;
}

function changePageStyle(cssFile){

    document.querySelector("link[rel='stylesheet']").href = cssFile;

    //saveSessionData(pageStyleKey, cssFile);
}

function commonInit(){
	var _userName = loadSessionData(userNameKey);
	
	if(_userName == null && location.href.indexOf("login.html") == -1)
		navigateLogin();

    // page style handling
	var currentStyle = loadSessionData(pageStyleKey);
	if(!currentStyle)
        currentStyle = "style_football.css";
    
	changePageStyle(currentStyle);	
	loadStorageUserDetails();
	displayFullName();	
}

function btnDown(element){
    if(element.disabled != true)
	   element.className = "cssSelectedButton";
}

function btnUp(element){
    if(element.disabled != true)
	   element.className = "cssButton";
}



// **** Message Board ***** //

function setMsgSuccess(message){
	var element = getDomElement("lblMessage");
	element.style.backgroundColor = "#5cd65c";
	element.style.color = "white";

	setMsgText(message);
}

function setMsgInfo(message){
	var element = getDomElement("lblMessage");
	//element.style.backgroundColor = "#f9f9f9";
    element.style.backgroundColor = "#424f5a";
	//element.style.color = "#cc3300";
    element.style.color = "#fbfbfb";

	setMsgText(message);
}

function setMsgFailure(message){
	var element = getDomElement("lblMessage");
	element.style.backgroundColor = "red";
	element.style.color = "white";

	setMsgText(message);
}

function setMsgText(message){
	var element = getDomElement("lblMessage");
	element.innerHTML = message;
}

function resetMsg(){
	var element = getDomElement("lblMessage");
	element.innerHTML = "Message Board";
	element.style.backgroundColor = "white";
	element.style.color = "white"
}



// ***** DEBUG ***** //

function log(message){
	console.log("DEBUG: " + message);
}
