const menuBtn = document.getElementById('menu-mobil');
const menu = document.getElementById('menu');
const desplegables = document.querySelectorAll('.desplegable > a');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});


desplegables.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = link.parentElement;

    document.querySelectorAll('.desplegable').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const carril = document.getElementById("carril");
  carril.innerHTML += carril.innerHTML;
});


//bloquear click derecho
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  
});
//bloqueo de la combinacion 
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'c') {
    e.preventDefault();
  }

});

document.addEventListener('keydown', function (event) {
  if (event.key === 'f12' || event.keyCode === 123) {
    event.preventDefault();
  }

});
