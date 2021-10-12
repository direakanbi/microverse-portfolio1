const userName = document.querySelector('.user-name');
const email = document.querySelector('.user-email');
const message = document.querySelector('.user-message');
window.addEventListener('load', () => {
  const localData = JSON.parse(localStorage.getItem('data'));
  if (localData) {
    userName.value = localData.name;
    email.value = localData.email;
    message.value = localData.message;
  }
});

userName.addEventListener('input', () => {
  const localData = JSON.parse(localStorage.getItem('data'));
  const data = {
    ...localData,
    name: userName.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
});

email.addEventListener('input', () => {
  const localData = JSON.parse(localStorage.getItem('data'));
  const data = {
    ...localData,
    email: email.value,
  };

  localStorage.setItem('data', JSON.stringify(data));
});

message.addEventListener('input', () => {
  const localData = JSON.parse(localStorage.getItem('data'));
  const data = {
    ...localData,
    message: message.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
});