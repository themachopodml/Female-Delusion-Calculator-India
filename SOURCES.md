# Data sources and methodology

## Government / authorised sources

1. Office of the Registrar General & Census Commissioner, India, Census 2011 C-14: population by five-year age group, residence and sex.
2. National Commission on Population, Ministry of Health & Family Welfare, Population Projection Report 2011–2036. The 2026 male age-band base in `data.js` is taken from this projection series.
3. Census 2011 C-01: population by religious community and sex.
4. Census 2011 C-02: marital status by age and sex.
5. Census 2011 C-08 / C-08A: educational level by age and sex.
6. Census 2011 Primary Census Abstract: population, sex, SC/ST and work-status indicators.
7. MoSPI, Periodic Labour Force Survey 2023–24: employment status and earnings.
8. IIPS / MoHFW, NFHS-5 2019–21: anthropometry and household indicators.

## What is empirical

The age-band denominator is a 2026 Government of India population projection. PLFS earnings and Census classifications are used as published. Census is still the latest completed population census currently available as the national census backbone; newer surveys do not replace a completed population census.

## What is modelled

India does not publish a single table containing the exact intersection of age + height + income + education + employment + religion + caste + assets + marital status + location. Therefore the calculator cannot honestly claim an exact head count for that intersection.

The following are explicit model factors: height rarity, income thresholds, education thresholds, asset ownership, body-composition filters, foreigner/NRI coverage and some employment/caste/religion screening factors. These factors are intentionally visible in the result breakdown.

The output is therefore a **statistical scarcity estimate**, not a count of men who are single, interested, geographically accessible, compatible, or actively looking for marriage.

## Height limitation

There is no authoritative national registry of the shortest or tallest wedding groom in India or among Indians abroad. The calculator therefore uses a configurable 140–210 cm input envelope. This is not presented as an official wedding-record range.

## Foreigner limitation

There is no official national dataset measuring the population of foreign men who are suitable and available for marriage to Indian women. The foreigner option is therefore a modelled coverage adjustment and must not be read as a census count.
