const result = document.getElementById('result');
const check = document.getElementById('followCheck');
const start = document.getElementById('startBtn');

check.addEventListener('change', () => {
  start.disabled = !check.checked;
});

document.getElementById('boostForm').addEventListener('submit', e => {
  e.preventDefault();

  const u = document.getElementById('username')
    .value.trim()
    .replace(/^@/, '');

  result.classList.remove('hidden');
  result.textContent =
    `تم تسجيل @${u} في النسخة التجريبية. لا توجد متابعة حقيقية في هذه النسخة.`;
});
