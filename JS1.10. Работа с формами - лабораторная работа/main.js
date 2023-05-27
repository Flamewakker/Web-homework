const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  if (passwordInput.value.length < 8) {
    event.preventDefault();
    alert('Пароль должен содержать не менее 8 символов');
  }
});
