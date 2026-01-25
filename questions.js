// ---------- RAW IMAGE IDS (24 QUESTIONS) ----------
const rawIds = [
  // Physics (8)
  "173dad73-eb19-462b-8938-ef4efc7d4517",
  "5ba41415-7f77-4529-9fef-92b65f9cc78d",
  "7479cd01-3d0d-4364-8158-c1bc38c9fcfa",
  "2323cc6c-843c-4de8-8d10-1106a38cfaae",
  "d46fc2b3-9b37-4513-942c-08348b81821b",
  "20b4cd7e-292e-414a-9730-e85e42d9397a",
  "0cdf5362-b5a0-46a1-b5cf-f32be5919fab",
  "53eb5564-1ecb-4a1b-8635-4a97c4327b31",

  // Chemistry (8)
  "44ef7699-1d9e-447d-a25c-680df8a8cd35",
  "20a24829-ef19-4b67-b932-80c1854e2c63",
  "59b47519-78d7-448b-b593-dc780b84658a",
  "20dedd78-f6eb-4470-9bd1-854f73331e96",
  "380eb807-2893-4d4c-94e5-c5b0986152d2",
  "9ce3d3fd-a96e-4db2-ad46-9558b56510e1",
  "7db80f15-4028-4c58-a821-e062b1c0db46",
  "5b0b0491-31dc-46de-9cc7-f15306e4e08f",

  // Maths (8)
  "92024aff-34bc-4285-b7af-66e7860d1873",
  "9087c26a-d894-4333-b01c-490bb9ab36c0",
  "8cd5ed47-be6a-47ef-a367-607489663659",
  "3600976b-d1d9-4c25-8ba1-5f29d4b3a4a2",
  "f31aea4a-4a9d-43cb-b8fa-0290ded1403c",
  "1a6ca98e-04c4-4df8-8f39-27d6b226bb27",
  "3b266a95-ca94-4f1a-baf1-d1b61494d392",
  "f0e77448-e744-445e-aef9-c0d5a6c49fa6"
];

// ---------- CORRECT ANSWERS (24) ----------
const correctAnswers = [
  // Physics
  "C","B","C","C","D","B","A","A",

  // Chemistry
  "A","C","C","B","B","B","D","D",

  // Maths
  "C","D","D","A","D","C","B","C"
];

// ---------- MAIN QUESTIONS ARRAY ----------
const questions = rawIds.map((id, index) => {
  let subject;

  if (index < 8) subject = "Physics";
  else if (index < 16) subject = "Chemistry";
  else subject = "Maths";

  return {
    id: index + 1,
    image: `https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/${id}.png`,
    options: ["A", "B", "C", "D"],
    correct: correctAnswers[index],
    subject,
    type: "mcq"
  };
});

// ---------- OPTIONAL CHECK ----------
questions.forEach((q, i) => {
  if (q.correct !== correctAnswers[i]) {
    console.error(`Mismatch at Q${q.id}`);
  }
});
