// Fetch options & weights from JSON and populate dropdowns
fetch('/data/census-metadata.json')
  .then(res => res.json())
  .then(meta => {
    for (let field in meta) {
      const sel = document.getElementById(field);
      Object.entries(meta[field]).forEach(([label, weight]) => {
        const opt = document.createElement('option');
        opt.value = weight;
        opt.textContent = label;
        sel.appendChild(opt);
      });
    }
  });

// Handle form submit
document.getElementById('calcForm').addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const payload = {};
  for (let [k, v] of formData.entries()) payload[k] = +v;

  // Send to back-end
  const resp = await fetch('/api/score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const { score } = await resp.json();
  document.getElementById('result').textContent =
    `Your Delusion Score: ${score}/100`;
});