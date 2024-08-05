const yesBtn = document.querySelector('#A');
const noBtn = document.querySelector('#B');

let yesHeight = 50;
let yesWidth = 100;
let yesFont = 25;

if(noBtn){
    noBtn.addEventListener('click', function(){
        yesHeight = yesHeight + 50;
        yesWidth = yesWidth + 50;
        yesFont += 10;
        yesBtn.style.height = `${yesHeight}px`;
        yesBtn.style.width = `${yesWidth}px`;
        yesBtn.style.fontSize = `${yesFont}px`;
    });
}
        