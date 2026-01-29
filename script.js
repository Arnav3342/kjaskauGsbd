/*************************************************
 * COMPLETE QUIZ DATA FILE (60 QUESTIONS)
 * SUBJECTS: Maths (30) + SST (30)
 *************************************************/

// ---------- RAW IMAGE IDS (60 QUESTIONS) ----------
const rawIds = [
  // Maths (30)
  "25f02020-2810-4cb7-b836-19a9c3fb9b37",
  "9fc5f9c9-bbd0-4e2c-a73d-d821946aae1e",
  "a45e53f5-23ef-4112-8367-4116d039e9ab",
  "500923a0-5fa4-4ce0-a742-7c8cd0b2ce04",
  "a1459b7a-3fbe-4164-91ae-4b5739d5129e",
  "d9bf3b93-792a-4db5-86e1-cc1596d8609d",
  "12d2970e-1829-4138-a175-18fe58aada15",
  "a8cf101e-acc4-4a5e-af61-3afe4ed3cbc1",
  "ea4f71da-12e3-4176-89a0-5758d8779f1f",
  "af9f2598-0efb-4bcd-b053-174372e36173",
  "dccbee2e-72ce-48db-ba03-9ac0e2781897",
  "c5759363-cc6d-4e4d-bd74-4f8ce1263171",
  "557fd55b-e2b4-44b4-9d3a-79ed46d46a8f",
  "4befcb27-e5d9-46bc-a48b-8fdd381117aa",
  "bc82174d-8a29-417e-9185-dbd3f6bd785a",
  "e8f8cb77-0050-4c88-b7bb-1b6a4f4cb2c1",
  "3f22aeac-3c3c-45e4-9944-e2e777a41ac6",
  "806a87d7-e372-41fe-8d10-e4dce6db459c",
  "5e2df441-5555-4034-a5c6-575059c5c871",
  "f049c657-a027-4db0-ac76-6c8d18766052",
  "e68e8dc0-c379-47f8-a3d3-6f81240e9e57",
  "35845fba-d1f3-4225-9f57-a18b27681f5e",
  "9c80e717-5a62-4621-9c9b-f5c7ab18b881",
  "e6ee8404-30b7-4a67-bb0d-ac793a9bad48",
  "5e0f7621-0df7-4eab-9492-4e34be2735ed",
  "6e2166e8-d249-450c-aa37-12a25d65360f",
  "cd4819b7-1245-48f9-9f62-63f3bf5b90f7",
  "7351539d-f59d-4813-878e-4ccff8db9fa5",
  "74e37fc8-036f-413f-af37-99eade6217e1",
  "89a08160-a01d-461f-89b3-4634f4fd32c7",

  // SST (30)
  "9041e4f7-f805-4ec1-be2b-6419178823af",
  "7e1d525f-e3ba-41bf-8106-5ea503e36d84",
  "36c5ba96-f2e4-453d-83ac-c22e26851248",
  "b702f14f-f951-4e23-8d50-d4fb043351e9",
  "ab7d734c-4162-4864-8cdf-970031debaef",
  "712bc3a0-3b46-4da1-98ab-8996807a444e",
  "770ce79c-210c-466b-9b4a-4d0aa2c208d1",
  "deeef57e-0dd3-4820-99b1-34742c5bcf2a",
  "e987bee2-7592-4a76-b377-02192e1012e8",
  "c57af15e-5cfc-4323-ad71-db4ee7d4ecbc",
  "4b54660b-3244-429d-883d-b6f07c6869f4",
  "0bb11d03-c154-4b48-8c32-05e47d8cbaab",
  "756ace31-cd2a-4b88-ad86-09d3b3f53c91",
  "4f2ee87a-dc84-43b2-adb7-74bd6bcc65c2",
  "3c402c99-0ad1-4cd9-acb2-b5b5cb0108f6",
  "da015405-b8bc-4024-b629-a77e56207e76",
  "71a49be3-9ed3-4431-96b2-5d5a4b85e870",
  "875bfbe0-1105-47f3-a1a5-a7f2908501b4",
  "c772f4b3-d977-4687-bf32-71f35f5ce015",
  "42dbc789-bed5-4d1e-8e0e-68849c57059d",
  "f952dcb1-d804-47b6-a33b-d7408bed4cc3",
  "2dd43f19-d29c-46c5-87a3-e3723add3a2b",
  "39287f22-e90f-48f0-a8ff-f845223f4052",
  "d6b892f9-fa85-48fc-a4d8-acb32043deb3",
  "b1267ac7-ad24-4496-8684-ae1017b54fda",
  "cfedd0e0-0416-4de4-a408-27ee400daa23",
  "7981ce18-c397-4ab5-a653-4120e07a6042",
  "829d6132-74d4-4dbc-ba63-e45830d0aa82",
  "8fc5b40e-36ac-478f-8d88-5294c69a726e",
  "45c7d92e-59f6-4add-ae63-c7fef69e6630"
];

// ---------- CORRECT ANSWERS (60) ----------
const correctAnswers = [
  "B","C","C","C","A","B","A","B","A","A",
  "D","B","B","D","B","A","C","B","C","C",
  "B","B","C","B","D","D","D","C","C","D",
  "B","A","B","D","A","C","C","B","B","D",
  "A","D","C","D","C","A","D","B","A","B",
  "C","B","B","C","C","A","C","B","D","B"
];

// ---------- MAIN QUESTIONS ARRAY ----------
const questions = rawIds.map((id, index) => {
  const subject = index < 30 ? "Maths" : "SST";

  return {
    id: index + 1,
    image: `https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/${id}.png`,
    options: ["A", "B", "C", "D"],
    correct: correctAnswers[index],
    subject: subject,
    type: "mcq"
  };
});

// ---------- FINAL CHECK ----------
console.log("Total Questions:", questions.length);
console.log("Sample Question:", questions[0]);
