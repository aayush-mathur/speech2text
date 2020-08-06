var recognition;
var final_transcript = '';
var recognizing = false;
var timeoutInMilliseconds = 10000;
var timeoutId;
var isUserSpeaking = false;

function upgrade() {
    alert('Update to Latest Google Chrome.');
}

function startTimer(){
    timeoutId = window.setTimeout(doInactive, timeoutInMilliseconds);
}

function doInactive(){
   updatePrompt('You wanna say anything else?');
}

function resetTimer(){
    window.clearTimeout(timeoutId);
    startTimer();
}

function stopTimer(){
    window.clearTimeout(timeoutId);
}

function updatePrompt(newPrompt){
    window.functionName(newPrompt);
}

function startButton() {
    if (recognizing) {
        isUserSpeaking = false;
        recognition.stop();
        return final_transcript;
    }
    isUserSpeaking = true;
    final_transcript = '';
    updatePrompt('Listening...');
    recognition.start();
}

function getRecognitionObject() {
    if (!('webkitSpeechRecognition' in window)) {
        upgrade();
    } else {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function () {
            recognizing = true;
            startTimer();
        }

        recognition.onend = function () {
            if(isUserSpeaking){
                final_transcript += ' ';
                recognition.start();
                return;
            }
            recognizing = false;
            stopTimer();
            updatePrompt('Click button to Start Recording');
            alert(final_transcript);
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
