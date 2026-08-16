# IN Female Delusion Calculator

A futuristic static web calculator by **@themachopodml** that estimates the statistical scarcity of a male profile in India.

## v2 rebuild

This version replaces the old Node/Express prototype with a GitHub Pages-friendly static application. It is built from scratch rather than copying the Kerala implementation. The Kerala calculator was used only as a product/design reference.

## Features

- Age range from 20 through 70+
- Height range from 140–210 cm
- Never married / married
- India resident / Indian abroad / foreigner
- Education thresholds
- Monthly income thresholds up to ₹2 lakh+
- Employment and government/PSU target filters
- Religion
- SC / ST / non-SC-ST and “open to another caste” preference
- Normal BMI / athletic target and exclude-obese filter
- Own house, car, business and financial-asset filters
- Transparent result breakdown
- Futuristic responsive UI
- Share and reset controls
- No backend required

## Data integrity

The calculator distinguishes published government data from model assumptions. It does **not** pretend that an exact national cross-tabulation exists when it does not.

The principal empirical base is the Government of India 2026 population projection derived from the National Commission on Population / MoHFW 2011–2036 projection report. Census 2011 tables provide age, sex, marital status, religion, education and SC/ST classification. PLFS 2023–24 provides employment and earnings data. NFHS-5 provides anthropometric and household indicators.

See [`SOURCES.md`](SOURCES.md) for the methodology and limitations.

## GitHub Pages

The app is plain HTML/CSS/JavaScript and can be published directly from the repository root on the `main` branch, or from a dedicated Pages branch depending on repository settings.

## Important limitation

The result is a **modelled demographic scarcity estimate**. It is not a live dating-market population, does not measure willingness to marry, compatibility, attraction, geography, family approval or availability, and should not be described as an exact count of eligible bachelors.

## Branding asset

`brand.svg` currently contains a lightweight IN crown mark so the repository works without external dependencies. The previously referenced uploaded logo was not available to the repository connector during this rebuild. Replace `brand.svg` with the supplied artwork when the actual file is available.
