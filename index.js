let number = 0;
const countElement = document.getElementById("number");


function substract(){
    number -= 1;
    countElement.textContent = number;
}



function add(){
    number += 1;
    countElement.textContent = number;
}

function reset(){
    number *= 0;
    countElement.textContent = number;
}