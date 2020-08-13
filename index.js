let text = document.getElementById('header');
let count = 30;
for (let i=0; i<=count;i++){
    let glitchBox = document.createElement('div');
    glitchBox.className = 'box';
    text.appendChild(glitchBox);
}

let glitch = document.getElementsByClassName('box');
setInterval(function(){
for (let i=0;i<=glitch.length;i++){
    glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
    glitch[i].style.top = Math.floor(Math.random()*100) + 'vh';
    glitch[i].style.width = Math.floor(Math.random()*400) + 'px';
    glitch[i].style.height = Math.floor(Math.random()*100) + 'px';

}
},200)