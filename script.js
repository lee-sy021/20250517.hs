document.getElementById('drawButton').addEventListener('click', () => {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // 초기화

  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  // Shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  const selected = numbers.slice(0, 4).sort((a, b) => a - b);

  selected.forEach(num => {
    const el = document.createElement('div');
    el.textContent = `✨ ${num}번 당첨!`;
    el.className = 'bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full shadow-sm animate-pop';
    resultDiv.appendChild(el);
  });
});
