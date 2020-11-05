
const main_body = document.querySelector('.main_body');

const messages = ["Mike says Jump for joy", "Mike says i love you", "Mike says you are the best", "Mike says you have done well"];
const indexmsg = () => Math.floor(Math.random() *  messages.length);
//let indexmsg = Math.floor(Math.random() * messages.length);
//
//function
function changeColor(color){
    
  main_body.style.backgroundColor = color;
  speechSynthesis.speak(new SpeechSynthesisUtterance(messages[indexmsg()]));
         
}
