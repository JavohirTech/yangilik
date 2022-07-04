const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;

recognition.lang = "uz-UZ";

microphone.addEventListener('click', ()=>{
    microphone.textContent = 'JARVIS ESHITMOQDA !';
    recognition.start();
})

recognition.onresult = (evt)=>{
    var color = evt.results[0][0].transcript;
    microphone.textContent = "JARVIS: " + color;
   
    if(color){
        document.querySelector("body").style.backgroundColor = color;
    }
    console.log(color);


let reader = new SpeechSynthesisUtterance();
reader.lang = 'uz-UZ';
reader.text = color;
reader.volume = 9;

reader.onend = function() {}
window.speechSynthesis.speak(reader);
}