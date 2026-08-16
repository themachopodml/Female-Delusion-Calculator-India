<div align="center">
  <img src="brand.svg" alt="The Macho Pod logo" width="180">
</div>

# 🧮 IN Female Delusion Calculator
### by [@themachopodml](https://github.com/themachopodml)

> *"How rare is your King, really?"*

A statistically-grounded, interactive web calculator that helps users understand how rare a male profile can become when multiple preferences are combined — based on Indian government demographic and survey data where available, with model assumptions clearly labelled where an exact national intersection is not published. The result isn't a judgement; it's a mirror.

**🔗 Live Site:** [themachopodml.github.io/Female-Delusion-Calculator-India](https://themachopodml.github.io/Female-Delusion-Calculator-India)

---

## 🌟 Features

**11+ Preference Categories** covering major partner criteria — age range (21–70+), height range (4'0" to the historical reported Indian maximum envelope), minimum education level, annual personal income in LPA, employment type, religion, caste / social category, body type, marital history, nationality/location, financial profile, lifestyle and asset ownership.

**👑 Build My King** — the main calculator experience. Set minimum and maximum standards using compact interactive controls and see how each additional requirement narrows the estimated demographic pool.

**🐱 Cat Food Scarcity Rating** — the signature feature. After calculating, your result is scored using a cat food rarity metaphor. The logic is *inverted on purpose*: the lower your match percentage, the more cans you score — because a profile that only a tiny fraction of Indian men statistically satisfy is a scarce import, not bulk-bin stock.

**Ghost-decimal protection** — when the combination of filters becomes so strict that fewer than one whole man statistically remains, the calculator displays `≈ 0` rather than pretending a fraction of a human is a useful dating-market statistic.

**Viewport-fitted desktop layout** — on PC, the calculator is arranged as a dense futuristic dashboard intended to fit inside a single browser viewport without normal page scrolling. The results panel remains visible alongside the preference controls.

**Mobile responsive design** — on smaller screens, the dashboard gracefully changes to a scrollable single-column layout with larger touch targets.

**Interactive range controls** — age and height use draggable dual-handle sliders. Income uses a stepped LPA slider with selectable thresholds ranging from 1 LPA through crore, billion and trillion-level thresholds to infinity.

**Self-contained static application** — the calculator runs as plain HTML/CSS/JavaScript and requires no backend or database.

---

## 📊 Data Sources

The calculator separates empirical government data from model assumptions. It does **not** claim that an exact national cross-tabulation exists when it is not published.

The principal empirical framework uses:

- **Census of India 2011** — national population, age/sex, marital status, religion, education and SC/ST classification tables.
- **Government of India / MoHFW population projections** — projected population by age and sex for the demographic base used by the calculator.
- **Periodic Labour Force Survey (PLFS) 2023–24** — employment and regular wage/salary earnings indicators.
- **National Family Health Survey (NFHS-5) 2019–21** — BMI/anthropometric and household-level indicators relevant to body and asset modelling.

The calculator deliberately does **not** present a fabricated official statistic for the number of Indian men who are available for marriage, foreign men seeking Indian marriage, exact individual wealth intersections, or a government-certified tallest wedding groom. Those dimensions are modelled where necessary.

The India calculator's demographic base is therefore an **estimated male population base**, not a live matrimonial-market database.

---

## ⚙️ How the Calculation Works

Understanding the math behind the result helps you interpret it honestly.

**Within each preference section, the logic is OR** — meaning the filter passes if the selected alternatives represent acceptable choices. For example, selecting both India resident and Indian abroad does not mean the same man is counted twice; the location factor is treated as an accepted coverage group.

**Across preference sections, the logic is AND** — meaning every condition must be satisfied simultaneously. A man must fit the selected age range *and* height range *and* income threshold *and* education level and so on. The calculator therefore multiplies the relevant factors together.

**Age and height** are calculated from the selected ranges. The age factor uses the projected male age-band base. Height uses a modelled Indian male height distribution because no national Census table provides the exact requested height intersection.

**Income** is expressed entirely as annual LPA thresholds:

`1 LPA → 2 → 3 → 5 → 10 → 15 → 25 → 50 LPA → 1 Cr → 10 Cr → 25 Cr → 50 Cr → 75 Cr → 1B → 10B → 50B → 1 Trillion → ∞`

The extreme-income tiers beyond normal survey coverage are **scarcity model assumptions**, not PLFS measurements of billionaires or trillionaires. The calculator does not pretend otherwise.

A simplified version of the formula looks like this:

```
Final % = Age% × Height% × Education% × Income% × Employment%
        × Religion% × Caste% × BodyType% × Marital% × Location%
        × FinancialProfile% × Asset%
```

This multiplication assumes sufficient independence between filters for a screening model. Real-world characteristics are correlated, so the result is an estimate rather than an exact census intersection.

---

## 🐱 Cat Food Rating Scale

| Cans | Match % Range | Label |
|------|--------------|-------|
| 10/10 | > 0% to ≤ 0.01% | Single Origin Mythic Blend 🦄 |
| 9/10  | > 0.01% to ≤ 0.1% | Collector's Edition 🏛 |
| 8/10  | > 0.1% to ≤ 0.5% | Rare Reserve 💎 |
| 7/10  | > 0.5% to ≤ 1% | Small Batch Import 🚢 |
| 6/10  | > 1% to ≤ 2% | Limited Batch 📦 |
| 5/10  | > 2% to ≤ 5% | Specialty Store 🏬 |
| 4/10  | > 5% to ≤ 10% | Premium Aisle 🌟 |
| 3/10  | > 10% to ≤ 20% | Decent Brand 🥫 |
| 2/10  | > 20% to ≤ 50% | Standard Shelf Stock 🏪 |
| 1/10  | > 50% | Bulk Bin Basics 🛒 |
| 0/10  | Exactly 0% | Out of Stock — Permanently 😿 |

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
