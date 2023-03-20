//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#3E60D2"; colorText="#000000"; colorSele="#FE8585";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Sabes mucho de lengua"; messageTime="Mas rapido"; messageError="Intenta de nuevo"; messageErrorG="Intenta de nuevo"; messageAttempts="Lo intentaste"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bGVuZ3VhMzE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="lengua31_resources/media/";
var indexG=0;
var words1G=["TGEgdHJhZ2VkaWEgZXMgdW4gZ2VuZXJvIGRlbCB0ZWF0cm8gZ3JpZWdvIGVuIGxhIGN1YWwgc3UgZmluIGVyYSBtb3JhbGl6YXIgeSBlZHVjYXIgYSBxdWllbmVzIGxhIHZlaWFuIG5vcm1hbG1lbnRlIG5vYmxlcyB5IGRlIGVsbGEgc3VyZ2lvIGxhIGNvbWVkaWE=","RW4gQXRlbmFzIHNlIGNyZWEgdW4gcml0byBhIGRpb3MgRGlvbmlzaW8gZWwgY3VhbCBlcmEgZGUgY3JlYXIgaGlzdG9yaWFzIHNvYnJlIGhlcm9lcyB0cmFnaWNvcyBjb25vY2lkbyBjb21vICB0cmFnZWRpYQ==","TGEgY29tZWRpYSBuYWNpbyBwYXJhIHNlciBsYSBjb250cmFwYXJ0ZSBkZSBsYSB0cmFnZWRpYSBjb24gc3UgZmluIGRlIGRpdmVydGlyIGEgdG9kb3MgbG9zIGRlIGNsYXNlIGJhamEgY29uIHVuIGhlcm9lIGNvbWljbyB5IGVzY2VuYXJpb3MgY290aWRpYW5vcyBzaW4gYXBhcmljacOzbiBkZSBlbGVtZW50b3MgdHJpc2l0ZXM=","RW4gY29uY2x1c2nDs24gZWwgdGVhdHJvIGVyYSB1bm8gZGUgbG9zIG1hcyBncmFuZGVzIGRlc2N1YnJpbWllbnRvcyBncmllZ29zIHBhcmEgZWwgZW50cmV0ZW5pbWllbnRvIHlhIHNlYSBjb24gZmluIGRlIG1vcmFsaXphciBvIGhhY2VyIHJlaXI="];
var words2G=["VW5hIGRlIGxhcyB0cmFnZWRpYXMgbWFzIGdyYW5kZXMgZXMgbGEgZGUgRWRpcG8gUmV5IGVsIHJlc3VtZW4gdmEgYXNpOg==","dW4gb3JhY3VsbyBsZSBkaWNlIGEgTGF5byBxdWUgc3UgaGlqbyBsbyBtYXRhcmlhIHkgc2UgY2FzYXJpYSBjb24gc3UgbWFkcmUgKFlvY2FzdGEpIHBvciBsbyBxdWUgZWwgbG8gbWFuZGEgYSBtYXRhciBzaWVuZG8gRWRpcG8gdW4gYmViZQ==","cGVybyBzZSBzYWx2YSB5IGVzIGNyaWFkbyBjb21vIGVsIGhlcmVkZXJvIGRlIG90cmEgY2l1ZGFkIHNlIHRvcGEgY29uIHVuIGZvcmFzdGVybyBhIHF1aWVuIGxvIG1hdGEgeSBzZSB2dWVsdmUgcmV5IGFsIGNhc2Fyc2UgY29uIHVuYSBkYW1h","VG9kbyBpYmEgYmllbiBoYXN0YSBxdWUgY2FlbiBtYWxkaWNpb25lcyBwb3IgbG8gc3VjZWRpZG8geSBlbCByZXkgRWRpcG8gYnVzY2EgdGlyZXN0aWFzIHBhcmEgYWNsYXJhciBlc3RhIHRyYWdlZGlh","UGVybyBsYSBwcm9mZWNpYSBzZSBjdW1wbGlvIHkgYWwgZGFyc2UgY3VlbnRhIGVkaXBvIHNlIHNhY2EgbG9zIG9qb3MgeSBZb2Nhc3RhIHNlIHN1aWNpZGEgZGFuZG8gdW4gZGVzdGllcnJvIGFsIHJleSB5IGVtcGllemEgbGEgdHJhZ2VkaWEgZGUgQW50aWdvbmE="];
var words3G=["TGEgZWRhZCBtZWRpYSBlcyBjb25vY2lkYSBjb21vIGVsIG9zY3VyYW50aXNtbyBvIG9jdWx0aXNtbyB5YSBxdWUgbGEgaWdsZXNpdWEgcmVpbmFiYSBjb24gcHXDsW8gZGUgaGllcnJv","RW4gZXNlIGVudG9uY2VzIHNlIGRhYmFuIGxvcyBtZW5lc3RlcmVzIGRlIGp1Z2xhcmlhIHkgY2xlcmVjaWEgcHJpbWVybyBoYWJsYXJlbW9zIGRlbCBkZSBqdWdsYXJpYQ==","RXJhIHVuIGp1Z2xhciBlbCBjdWFsIHByZWRpY2FiYSBwb2VtYXMgeSBjdWVudG9zIGFub25pbW9zIGNvbiBlbCBmaW4gZGUgZW50cmV0ZW5lciB5IGxhIGNsZXJlY2lhOg==","RXJhIHVuIHRyb3ZhZG9yIHF1aWVuIGRlY2lhIGxvcyBlc2NyaXRvcyBjb24gZWwgZmluIGRlIG1vcmFsaXphciB5IGVkdWNhciBlc2NyaXRvcyBwb3IgY2xlcmlnb3MgbyBjb3Bpc3Rhcw=="];
var c1=[149,118,184,139];
var c2=[70,136,138,114,149];
var c3=[104,97,97,106];
colorText="#FFFFFF";colorButton="#0A9DDE";colorBack="#232B35";colorSele="#95BA2E";tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
