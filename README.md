# Female Delusion Calculator

A web application that computes a “delusion score” for women in India based on demographic and socioeconomic factors from the 2011 Census.

## Tech Stack

- Front-end: HTML, CSS, Vanilla JavaScript
- Back-end: Node.js + Express
- Data: JSON file with dropdown options and weights
- Hosting: Any Node-capable platform (Heroku, Vercel, AWS, etc.)

## Setup

1. Clone:
   ```bash
   git clone https://github.com/themachopodml/Female-Delusion-Calculator-India.git
   cd Female-Delusion-Calculator-India
   ```
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
3. Run server:
   ```bash
   npm start
   ```
4. Open in browser:
   Visit http://localhost:3000

## Project Structure

```
client/           # Static front-end files
  index.html
  style.css
  app.js
data/             # JSON metadata for options & weights
  census-metadata.json
server/           # Node.js back-end
  server.js
  package.json
README.md
```

## Extending

- Update `data/census-metadata.json` for new census data or factors.
- Add user authentication, analytics, or visualizations.
