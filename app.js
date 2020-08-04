var recognition;
var final_transcript = '';
var recognizing = false;
var timeoutInMilliseconds = 10000;
var timeoutId;

function startTimer(){
//    console.log('Timer Started.');
    timeoutId = window.setTimeout(doInactive, timeoutInMilliseconds);
}

function doInactive(){
    if(recognizing){
       updatePrompt('You wanna say anything else?');
    }
    else{
        stopTimer();
    }
}

function resetTimer(){
    window.clearTimeout(timeoutId);
    startTimer();
}

function stopTimer(){
    window.clearTimeout(timeoutId);
//    console.log('Timer Stopped.');
}

function updatePrompt(newPrompt){
    window.functionName(newPrompt);
}

function startButton() {
//    console.log('recognizing: ' + recognizing);
    if (recognizing) {
        stopTimer();
        recognition.stop();
        return final_transcript;
    }
    final_transcript = '';
    recognition.start();
    startTimer();
}

function getRecognitionObject() {
    if (!('webkitSpeechRecognition' in window)) {
        upgrade();
    } else {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;  //can set to false
//        console.log(recognition);

        recognition.onstart = function () {
            updatePrompt('Listening...');
            recognizing = true;
        }

        recognition.onend = function () {
            updatePrompt('Click button to Start Recording');
            recognizing = false;
        }

        recognition.onresult = function (event) {
            resetTimer();
            updatePrompt('Listening...');
            for (var i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                }
            }
        }
    }
}
