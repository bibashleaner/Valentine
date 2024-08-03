const yesBtn = document.querySelector('#A');
const noBtn = document.querySelector('#B');

// let yesHeight = 50;
// let yesWidht = 100;
// let yesFont = 25;

// if(noBtn){
//     noBtn.addEventListener('click', function(){
//         yesHeight = yesHeight + 50;
//         yesWidth = yesWidht = 50;
//         yesFont += 10;
//         yesBtn.style.height = `${yesHeight}px`;
//         yesBtn.style.width = `${yesWidht}px`;
//         yesBtn.style.fontSize = `${yesFont}px`;
//     });
// }
        
// noBtn.addEventListener('mouseover', clickNoBtn);

// function clickNoBtn(){
//     const i = Math.floor(Math.random() * 500)+1;
//     const j = Math.floor(Math.random() * 500)+1;

//     noBtn.style.left =  i+'px';
//     noBtn.style.top = j+'px';
// }

if(onclick="noBtn"){
    noBtn.addEventListener('click', ()=>{
        // const currentHeight = yesBtn.getBoundingClientRect();
        yesBtn.style.height = yesBtn + 100 + "px";
    });
}