console.log('This script is loaded!');
let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let number = Math.ceil(Math.random() * 9000);

btn.onclick = function(){
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 9000)
}