

const keys = document.querySelectorAll('button');

const box = document.querySelector('.box');


keys.forEach(function(button) {
  button.addEventListener('click', result);
});


function result(event) {

  const clicked = event.target.value;

  if (clicked === '=') {
    
    if (box.value !== '') {
    
      box.value = eval(box.value);
    }
  } else if (clicked === 'C') {
    
   box.value = " "
  }
   else {
    
    box.value += clicked;
  }
}