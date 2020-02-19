// ***** Data Access ***** //

var _userName;
var _fullName;
var _email;
var _enabledOperations;
var _enableAddition
var _enableSubtraction
var _enableMultiplication
var _enableDivision
var _numOfQuestions;
var _maxNumValue;
var _lastLoginDate;
var _enableNegatives;
var _enableRemainder;
var _totalScore;
var _currentScore = -1;
var _currentQuestion = -1;
var _currentQuestionnaire = 0;
var _totalQuestionnaires;
var _questionsHistory = "";
var _pageStyle;

// ***** storage keys ***** //
var userNameKey 				= "userName";
var fullNameKey 				= "fullName";
var emailKey					= "email";
var enabledOperationsKey 		= "enabledOperations";
var enableAdditionKey			= "enableAddition";
var enableSubtractionKey		= "enableSubtraction";
var enableMultiplicationKey		= "enableMultiplication";
var enableDivisionKey 			= "enableDivision";
var numOfQuestionsKey 			= "numOfQuestions";
var maxNumValueKey 				= "maxNumValue";
var lastLoginDateKey 			= "lastLoginDate";
var enableNegativesKey 			= "enableNegatives";
var enableRemainderKey 			= "enableRemainder";
var totalScoreKey 				= "totalScore";
var currentScoreKey     		= "currentScore";
var currentQuestionKey 	    	= "currentQuestion";
var currentQuestionnaireKey 	= "currentQuestionnaire";
var totalQuestionnairesKey		= "totalQuestionnaires";
var questionsHistoryKey			= "questionsHistory";
var pageStyleKey 	         	= "pageStyle";


function keyPrefix(){
	return _userName + "_";
}


function incCurrentScore(){ 
	_currentScore++; 
	saveSessionData(currentScoreKey, _currentScore);
}

function setCurrentQuestion(value){
	_currentQuestion = value;
	saveSessionData(currentQuestionKey, _currentQuestion);
}

function incCurrentQuestion(){
	_currentQuestion++;
	saveSessionData(currentQuestionKey, _currentQuestion);
}

function incTotalQuestionnaires(){ 
	_totalQuestionnaires++; 
	saveSessionData(totalQuestionnairesKey, _totalQuestionnaires);
}


// ***** questions history handling ***** //

function formatQuestion(x, y, opr, userAnswer, systemAnswer){
	//return x + "," + opr + "," + y + "," + userAnswer + "," + systemAnswer;
	return x + " " + opr + " " + y + "," + userAnswer + "," + systemAnswer;
}

//question format is: x,y,operation,userAnswer,systemAnswer
// each question is separated by | sign
function aggrQuestionsHistory(question){
	if(_questionsHistory.length == 0)
		_questionsHistory += question;
	else
		_questionsHistory += "|" + question;
}

function getQuestionsElements(){
	return _questionsHistory.split("|");
}

function getQuestionElement(question){
	return question.split(",");
}