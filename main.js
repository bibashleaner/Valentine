// const body = document.querySelector('.body')
const bttn = document.querySelector('.btn');
const bBtn = document.querySelector('#B');
const aBtn = document.querySelector('#A');
const wrapper = document.querySelector('.wrapper');

let abtn_height = 50;
let abtn_width = 100;
let abtn_font = 25;

if(bBtn){

    bBtn.addEventListener('click', () =>{
        
        abtn_height = abtn_height + 50;
        abtn_width = abtn_width + 50;
        abtn_font += 10;
    
        aBtn.style.height = `${abtn_height}px`;
        aBtn.style.width = `${abtn_width}px`;
        aBtn.style.font = `${abtn_font}px`;
    })
}