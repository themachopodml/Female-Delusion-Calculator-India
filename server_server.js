const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use('/data', express.static(path.join(__dirname, '../data')));

// Load metadata once
const metaPath = path.join(__dirname, '../data/census-metadata.json');
const metadata = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

// Score endpoint
app.post('/api/score', (req, res) => {
  const selections = req.body;
  let total = 0;
  for (let key in selections) {
    const weight = selections[key];
    if (typeof weight === 'number') total += weight;
  }
  // Max possible = sum of highest weights: 5+10+20+15+10+10+5+10 = 85
  const score = Math.round((total / 85) * 100);
  res.json({ score });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});