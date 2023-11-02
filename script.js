
const rect = document.querySelector('#a1b');
const audio = new Audio('break.mp3'); 

rect.addEventListener('click', () => {
  audio.play(); 
});
