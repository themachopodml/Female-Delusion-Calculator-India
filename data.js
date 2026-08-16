/* IN Female Delusion Calculator data layer
   by @themachopodml

   EMPIRICAL BASE:
   - MoHFW / National Commission on Population: Population Projection Report 2011–2036.
   - Census of India 2011 C-01/C-02/C-08/C-14/PCA.
   - MoSPI PLFS 2023–24.
   - NFHS-5, 2019–21.

   IMPORTANT: This file separates published population inputs from model factors.
   Model factors are NOT official statistics and are labelled as such in the UI.
*/

const DATA = {
  year: 2026,
  projectedMalePopulationThousands: 732075,
  ageBands: [
    {min:20,max:24,male:64463000,label:'20–24'},
    {min:25,max:29,male:66201000,label:'25–29'},
    {min:30,max:34,male:62271000,label:'30–34'},
    {min:35,max:39,male:55840000,label:'35–39'},
    {min:40,max:44,male:49144000,label:'40–44'},
    {min:45,max:49,male:43374000,label:'45–49'},
    {min:50,max:54,male:38803000,label:'50–54'},
    {min:55,max:59,male:33466000,label:'55–59'},
    {min:60,max:64,male:26934000,label:'60–64'},
    {min:65,max:69,male:19954000,label:'65–69'},
    {min:70,max:70,male:31924000,label:'70+'}
  ],
  // Height is an input envelope. It is intentionally not called a national groom record.
  heights: [140,145,150,155,160,165,170,175,180,185,190,195,200,205,210],
  // Transparent modelled height survival factors, not official height percentiles.
  heightModel: {140:1,145:.99,150:.96,155:.90,160:.78,165:.62,170:.45,175:.29,180:.17,185:.09,190:.045,195:.020,200:.008,205:.003,210:.001},
  plfsMaleRegularMonthly: 22375,
  plfsMaleUrbanRegularMonthly: 26105,
  model: {
    education: {any:1, higherSecondary:.78, graduate:.48, postgraduate:.22, professional:.10},
    income: {any:1, 20000:.78, 30000:.55, 50000:.30, 100000:.12, 200000:.04},
    employment: {any:1, regular:.48, self:.35, govt:.22},
    finance: {any:1, invested:.65, substantial:.35},
    body: {any:1, normal:.70, athletic:.30},
    assets: {any:1, house:.65, car:.25, business:.15, financial:.30},
    religion: {any:1, hindu:.80, muslim:.14, christian:.04, other:.02},
    caste: {any:1, nonScSt:.84, sc:.17, st:.09},
    nonObese:.77
  },
  sourceNotes: [
    'Census 2011 C-14: five-year age and sex composition.',
    'MoHFW Population Projection Report 2011–2036: 2026 projected population by age and sex.',
    'Census 2011 C-02: marital status by age and sex.',
    'Census 2011 C-01: population by religion and sex.',
    'Census 2011 C-08/C-08A: education by age and sex.',
    'Census 2011 PCA: population, sex, SC/ST and work-status indicators.',
    'PLFS 2023–24: employment status and earnings.',
    'NFHS-5 2019–21: anthropometry and household characteristics.'
  ]
};