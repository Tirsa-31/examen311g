var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#28349D"; colorText="#000000"; colorSele="#328426";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste sabes de historia"; messageTime="Intenta ir mas rapido"; messageError="Te equivocaste"; messageErrorG="Te equivocaste"; messageAttempts="Losiento"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="c29jaWFsZXMzMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RW4gMTk0NCBzZSBkaW8gbGEgaHVlbGdhIGRlIGxvcyBicmF6b3MgY2FpZG9zLg==","RW4gRWwgU2FsdmFkb3Igc2UgZGlvIGxhIE9saWdhcnF1aWEgY2FmZXRhbGVyYS4=","RWwgYcOxaWwgZXJhIHVuIHByb2R1Y3RvIGRlIGV4cG9ydGFjacOzbg==","TGFzIHB1cHVzYXMgc29uIGNvbWlkYSB0aXBpY2EgZGUgRWwgU2FsdmFkb3I=",""];imaW=["huelga.jpg","cafe.jpg","a__il.jpg","pupusa.jpg",""];queW=["","","","",""];altW=["","","","",""];c=[46,47,38,44,0];
var auW=["MQ==","Mg==","Mw==","NA==",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="sociales31_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
