const button = document.querySelector('.burger');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.close');
console.log(button);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

button.addEventListener('click', openModal);
buttonClose.addEventListener('click', closeModal);
