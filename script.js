let button = document.querySelector('#mybutton');
let btnChangeBackGround = document.querySelector('#change-background-button');
let background = document.querySelector('body');




const toggleColor = () => background.classList.toggle('red-background');

btnChangeBackGround.addEventListener('click', toggleColor);
  

