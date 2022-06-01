const hey = document.querySelector('p');

hey.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  hey.textContent = `Player 1: ${name}`;
}
