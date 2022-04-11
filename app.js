// Color changer
const background = document.querySelector('.color-area');
const change_btn = document.querySelector('.change-btn');


let colors = ['red', 'green', 'blue', 'black', 'yellow']


change_btn.addEventListener('click', function(){
    let randomColor = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[randomColor];
    background.style.color = "white";
})

// Counter

const score = document.querySelector('.score');
const increase = document.querySelector('.increase-btn');
const reset = document.querySelector('.reset-btn');
const decrease = document.querySelector('.decrease-btn');
let counter = 0;

increase.addEventListener('click',function(){
    counter++;
    if(counter<0){
        score.style.color = "red";
    }else if(counter>0){
        score.style.color = "black";
    }else if(counter == 0){
        score.style.color = "black";
    }
    score.textContent = counter;
})

decrease.addEventListener('click', function(){
    counter--;
    if(counter<0){
        score.style.color = "red";
    }else if(counter>0){
        score.style.color = "black";
    }else if(counter == 0){
        score.style.color = "black";
    }
    score.textContent = counter;

})

reset.addEventListener('click', function(){
    counter=0;
    if(counter<0){
        score.style.color = "red";
    }else if(counter>0){
        score.style.color = "black";
    }else if(counter == 0){
        score.style.color = "black";
    }
    score.textContent = counter;

})