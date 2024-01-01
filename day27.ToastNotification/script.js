const button = document.getElementById('button');
const toasts = document.getElementById('toast');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener(
  'click',
  () => createNotification()

  //   createNotification('This is invalid data', 'success')
);

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());
  //div 안에 뭘  넣나?
  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);
  // 3초 뒤에 사라지게 하기
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
