const password = document.querySelector('#password');
const background = document.querySelector('#background');
const strengthText = document.querySelector('#strength-text');

password.addEventListener('input', () => {
  const input = password.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
  if (length > 10) {
    strengthText.textContent = 'Strong';
    strengthText.style.color = '#4caf50';
  } else if (length > 5) {
    strengthText.textContent = 'Medium';
    strengthText.style.color = '#ff9800';
  } else {
    strengthText.textContent = 'Weak';
    strengthText.style.color = '#f44336';
  }
});

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
