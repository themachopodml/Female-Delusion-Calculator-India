<div align="center">
  <img src="macho-pod-logo.svg" alt="The Macho Pod logo" width="180">
</div>

# 🧮 IN Female Delusion Calculator
### by [@themachopodml](https://github.com/themachopodml)

> *"How rare is your King, really?"*

A statistically-grounded interactive calculator that estimates how rare a male profile can become when multiple preferences are combined. It uses Indian government demographic and survey sources where available and clearly labels modelled assumptions where an exact national intersection is not published.

**🔗 Live Site:** [themachopodml.github.io/Female-Delusion-Calculator-India](https://themachopodml.github.io/Female-Delusion-Calculator-India)

---

## 🌟 Features

**12+ Preference Categories** covering age, height, minimum qualification, annual personal income, employment, religion, marital status, nationality/location, body type, asset requirements, caste/social category and lifestyle preferences.

**👑 Build My King** — age and height use draggable range controls. Age runs from 21 to 70+, while height uses the calculator's configurable national height envelope. Annual personal income uses stepped LPA thresholds from 1 LPA through crore, billion and trillion-level scarcity tiers.

**💰 Annual Personal Income** — the former monthly-income field is now explicitly annual personal income, matching the newer FemDelCalc interface.

**🏠 Asset Requirements** — Own House, Own Car, Own Business, Financial Assets, Own Land / Plot and Two-Wheeler.

**🚫 Exclude Obese** — retained as a calculator filter. NFHS-6 reports men who are overweight or obese together at BMI ≥25; the calculator therefore uses the non-overweight/non-obese share as a conservative proxy and does not claim an obesity-only official percentage.

**🐱 Cat Food Scarcity Rating** — the result is presented using a 10-can scarcity scale. Lower modelled match percentage means more cans and greater statistical scarcity.

**Readable dashboard** — typography, controls and result values have been enlarged substantially for easier reading while retaining the futuristic dark interface.

**Mobile responsive design** — smaller screens switch to a normal scrollable layout with larger touch targets.

**Self-contained static application** — plain HTML/CSS/JavaScript, with no backend or database required.

---

## 📊 Data Sources & Current Update Status

The data layer has been refreshed to reflect the latest authorised national releases available as of August 2026. Census 2011 remains the latest completed national population census, so it is still used for historical demographic classifications. Census 2027 is now underway, but its final population-enumeration results are not yet available and therefore are not substituted into the calculator. The Government has scheduled population enumeration for February 2027.

Official references: [Census 2027 — Office of the Registrar General & Census Commissioner, India](https://censusindia.gov.in/), [PLFS 2025 — MoSPI](https://mospi.gov.in/), [NFHS-6 2023–24 — MoHFW](https://www.mohfw-dohfw.gov.in/documents/publications).

- **Census of India 2011** — C-01 religion/sex, C-02 marital status by age/sex, C-08/C-08A education, C-14 age/sex composition and Primary Census Abstract.
- **Government of India Population Projection Report 2011–2036** — projected age/sex demographic base used for the calculator's 2026 age bands.
- **MoSPI, PLFS Annual Report 2025** — latest annual employment and earnings release. The report covers earnings of regular wage/salaried employees and state/UT tables.
- **MoHFW / IIPS, NFHS-6 2023–24** — latest national household, health and anthropometric survey release, published in May 2026.

The calculator does **not** claim that an official government table contains the exact intersection of age + height + income + education + employment + religion + caste + assets + marital status + location. Where that intersection is unavailable, the value is explicitly modelled.

The demographic base is therefore an **estimated statistical population base**, not a live matrimonial-market database.

### Kerala data update reviewed

The Kerala source stack has also moved forward. Kerala State Planning Board's **Economic Review 2025** and the **Kerala Development Report 2026** are now available. Those reports are useful for the Kerala-specific calculator, but they are not substituted into this India-wide model because state-specific economic values would not be valid national inputs.

Official references: [Kerala Economic Review 2025](https://spb.kerala.gov.in/en/7036/), [Kerala State Planning Board](https://spb.kerala.gov.in/en/).

---

## ⚙️ How the Calculation Works

Within OR-based preference sections, selecting multiple acceptable alternatives expands the accepted pool. Across preference sections, the logic is AND, so age, height, education, income, employment, religion, body type, marital status, location, assets and lifestyle conditions are combined into a modelled intersection.

A simplified screening formula is:

```text
Final % = Age% × Height% × Education% × Income% × Employment%
        × Religion% × Body% × Marital% × Location%
        × Asset factors × Lifestyle factors
```

This multiplication assumes enough independence between characteristics for a screening model. Real-world characteristics are correlated, so the result is an estimate rather than an exact Census intersection.

**Height limitation:** India has no authoritative national registry of the shortest or tallest wedding groom. The height envelope is therefore a calculator-defined model input, not an official groom record.

**Income limitation:** PLFS provides employment and earnings statistics, but it does not publish a complete national percentile table for every annual personal-income threshold used by this calculator. The high-income tiers are therefore scarcity-model assumptions, not official billionaire/trillionaire counts.

**NFHS-6 limitation:** the adult BMI indicator reports overweight or obesity together at BMI ≥25. The calculator does not pretend that this is an obesity-only statistic.

---

## 🐱 Cat Food Rating Scale

| Cans | Match % Range | Label |
|------|--------------|-------|
| 10/10 | > 0% to ≤ 0.01% | Single Origin Mythic Blend |
| 9/10 | > 0.01% to ≤ 0.1% | Collector's Edition |
| 8/10 | > 0.1% to ≤ 0.5% | Rare Reserve |
| 7/10 | > 0.5% to ≤ 1% | Small Batch Import |
| 6/10 | > 1% to ≤ 2% | Limited Batch |
| 5/10 | > 2% to ≤ 5% | Specialty Store |
| 4/10 | > 5% to ≤ 10% | Premium Aisle |
| 3/10 | > 10% to ≤ 20% | Decent Brand |
| 2/10 | > 20% to ≤ 50% | Standard Shelf Stock |
| 1/10 | > 50% | Bulk Bin Basics |
| 0/10 | Exactly 0% | Out of Stock — Permanently |

*More cans = scarcer man · Fewer cans = more common*

---

## ⚠️ Disclaimer

This calculator is for **educational and self-reflection purposes only**. Real relationships involve factors that demographics and statistics cannot capture, including personality, chemistry, timing, values, attraction, family circumstances, geography and individual choice.

The result is a **modelled demographic scarcity estimate**. It is not a live dating-market population and does not measure willingness to marry, compatibility, attraction, availability or family approval. Figures may differ materially from real-world matrimonial outcomes because many requested intersections are not published in a single official dataset.

---

## 🎙️ About The Macho Pod

**The Macho Pod** (`@themachopodml`) is a podcast and content platform based in Kerala, India. This calculator was built as an educational tool discussed on the show.

### 🧮 In FemDelCalc

This calculator is part of the **FemDelCalc** series by The Macho Pod.

- 🧮 [KL FemDelCalc](https://themachopodml.github.io/Female-Delusion-Calculator-Kerala)
- 🧮 [IN FemDelCalc](https://themachopodml.github.io/Female-Delusion-Calculator-India)

### 📣 Connect with The Macho Pod

- 💬 [Send Videos to React](https://t.me/themachopodchat)
- 🎙️ [Exclusive Uncensored Contents](https://rumble.com/c/c-7911504)
- 📸 [DM reels for Reaction, Opinion](https://www.instagram.com/themachopodml/)
- 🎙️ [Telegram: @themachopodml](https://t.me/themachopodml)
- ▶️ [YouTube: @themachopodml](https://www.youtube.com/@themachopodml)
- 🌐 [Live Calculator](https://themachopodml.github.io/Female-Delusion-Calculator-India)

---

*Built with ❤️ and brutal honesty · India*
