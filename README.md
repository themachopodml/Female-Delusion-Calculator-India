<div align="center">
  <img src="macho-pod-logo.svg" alt="The Macho Pod logo" width="180">
</div>

# 🧮 IN Female Delusion Calculator
### by [@themachopodml](https://github.com/themachopodml)

> *"How rare is your King, really?"*

A statistically-grounded, interactive web calculator that estimates how rare a male profile can become when multiple preferences are combined. It uses Indian government demographic and survey sources where available and clearly labels modelled assumptions where an exact national intersection is not published.

**🔗 Live Site:** [themachopodml.github.io/Female-Delusion-Calculator-India](https://themachopodml.github.io/Female-Delusion-Calculator-India)

---

## 🌟 Features

**12+ Preference Categories** covering age, height, minimum qualification, annual personal income, employment, religion, marital status, nationality/location, body type, asset requirements, financial profile and lifestyle preferences.

**👑 Build My King** — the main calculator experience. Age and height use draggable range controls. Income uses a stepped LPA slider with selectable thresholds from 1 LPA through crore, billion and trillion-level thresholds to infinity.

**🎓 Six education thresholds** — Primary Education, Secondary Education, Higher Secondary Education, Bachelors Degree, Masters Degree and PHD / Research Level, plus Any Education.

**💼 Employment Status** — Govt Job, Private Sector, Self-Employed / Business, Professional / Freelancer, NRI / Gulf Worker and Defence / Paramilitary.

**🏠 Asset Requirements** — Own House, Own Car, Own Business, Financial Assets, Own Land / Plot and Two-Wheeler.

**🌿 Lifestyle Preferences** — Non-Smoker, Non-Drinker, Vegetarian, Fitness Conscious, Religiously Active and No Tobacco Use.

**🐱 Cat Food Scarcity Rating** — the result is presented using the calculator's 10-can scarcity scale. The lower the modelled match percentage, the more cans are shown.

**Viewport-fitted desktop layout** — the calculator uses a compact three-column dashboard intended to fit a desktop browser viewport without normal page scrolling. The results panel remains visible alongside the controls.

**Tooltip guidance** — explanatory notes have been moved behind `?` controls beside section headings so the interface stays clean and readable.

**Mobile responsive design** — smaller screens switch to a normal scrollable layout with larger touch targets.

**Self-contained static application** — plain HTML/CSS/JavaScript, with no backend or database required.

---

## 📊 Data Sources

The calculator separates published empirical inputs from model assumptions. It does **not** claim that an exact national cross-tabulation exists when it is not published.

The original sources used by the India calculator are:

- **Census of India 2011** — C-01 religion and sex; C-02 marital status by age and sex; C-08/C-08A education; C-14 age/sex composition; Primary Census Abstract (PCA) population, sex, SC/ST and work-status indicators.
- **Government of India / Ministry of Health & Family Welfare / National Commission on Population** — Population Projection Report 2011–2036, including projected population by age and sex used for the demographic base.
- **Ministry of Statistics & Programme Implementation (MoSPI), PLFS 2023–24** — employment and earnings indicators.
- **National Family Health Survey (NFHS-5), 2019–21** — anthropometric and household indicators used where relevant to body and asset modelling.

The calculator does **not** present a fabricated official statistic for the number of Indian men actively available for marriage, foreign men seeking Indian marriage, exact individual wealth intersections, or a government-certified tallest wedding groom. Those dimensions are modelled where necessary.

The demographic base is therefore an **estimated male population base**, not a live matrimonial-market database.

---

## ⚙️ How the Calculation Works

Understanding the math behind the result is necessary if the output is going to be treated as more than a dramatic number on a dark screen.

**Within OR-based preference sections**, selecting multiple acceptable alternatives expands the accepted pool. For example, selecting multiple employment types accepts those types rather than requiring all of them simultaneously.

**Across preference sections, the logic is AND** — age, height, education, income, employment, religion, body type, marital status, location, assets, financial profile and lifestyle conditions are combined into one modelled intersection.

**Age** is estimated from the Government of India projected male age bands, with 21 as the lower calculator boundary and 70+ as the upper band.

**Height** uses a modelled Indian male height distribution. No Indian Census table provides the exact requested national height intersection, and there is no authoritative national registry of the shortest or tallest wedding groom. The 251 cm upper envelope is therefore treated as a historical reported height envelope, not an official groom record.

**Income** is expressed entirely as annual LPA thresholds:

`1 LPA → 2 → 3 → 5 → 10 → 15 → 25 → 50 LPA → 1 Cr → 10 Cr → 25 Cr → 50 Cr → 75 Cr → 1B → 10B → 50B → 1 Trillion → ∞`

The extreme-income tiers beyond normal survey coverage are **scarcity model assumptions**, not PLFS measurements of billionaires or trillionaires.

A simplified version of the screening formula is:

```text
Final % = Age% × Height% × Education% × Income% × Employment%
        × Religion% × Body% × Marital% × Location%
        × Financial% × Asset% × Lifestyle%
```

This multiplication assumes enough independence between characteristics for a screening model. Real-world characteristics are correlated, so the result is an estimate rather than an exact Census intersection.

---

## 🐱 Cat Food Rating Scale

| Cans | Match % Range | Label |
|------|--------------|-------|
| 10/10 | > 0% to ≤ 0.01% | Single Origin Mythic Blend 🦄 |
| 9/10 | > 0.01% to ≤ 0.1% | Collector's Edition 🏛 |
| 8/10 | > 0.1% to ≤ 0.5% | Rare Reserve 💎 |
| 7/10 | > 0.5% to ≤ 1% | Small Batch Import 🚢 |
| 6/10 | > 1% to ≤ 2% | Limited Batch 📦 |
| 5/10 | > 2% to ≤ 5% | Specialty Store 🏬 |
| 4/10 | > 5% to ≤ 10% | Premium Aisle 🌟 |
| 3/10 | > 10% to ≤ 20% | Decent Brand 🥫 |
| 2/10 | > 20% to ≤ 50% | Standard Shelf Stock 🏪 |
| 1/10 | > 50% | Bulk Bin Basics 🛒 |
| 0/10 | Exactly 0% | Out of Stock — Permanently 😿 |

*More cans = scarcer man · Fewer cans = more common*

---

## ⚠️ Disclaimer

This calculator is for **educational and self-reflection purposes only**. Real relationships involve many factors that demographics and statistics cannot capture — personality, chemistry, timing, values, attraction, family circumstances, geography and individual choice among them. The goal is to provide perspective on statistical scarcity, not to prescribe who anyone should or shouldn't date.

The result is a **modelled demographic scarcity estimate**. It is not a live dating-market population and does not measure willingness to marry, compatibility, attraction, availability or family approval. Figures may differ materially from real-world matrimonial outcomes because many requested intersections are not published in a single official dataset.

---

## 🎙️ About The Macho Pod

**The Macho Pod** (`@themachopodml`) is a podcast and content platform based in Kerala, India. This calculator was built as an educational tool discussed on the show.

- 💬 [Send Videos to React](https://t.me/themachopodchat)
- 🎙️ [Telegram: @themachopodml](https://t.me/themachopodml)
- ▶️ [YouTube: @themachopodml](https://www.youtube.com/@themachopodml)
- 🌐 [Live Calculator](https://themachopodml.github.io/Female-Delusion-Calculator-India)

---

*Built with ❤️ and brutal honesty · India*
