const sad = document.querySelector('#sad');

sad.addEventListener('click', () => {
  sad.style.display = 'none';

  setTimeout(() => {
    sad.style.display = '';
  }, 200);
});

const happy = document.querySelector('#happy');

happy.addEventListener('click', () => {
  happy.style.display = 'none';

  setTimeout(() => {
    happy.style.display = '';
  }, 200);
});