export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Full-Stack Development",
    description: "Building products and web applications.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Tailwind CSS",
      "Docker",
      "AWS",
      "Vercel",
    ],
  },
  {
    title: "QA & Test Automation",
    description: "Enterprise application testing and quality engineering.",
    items: [
      "Java",
      "JavaScript/TypeScript",
      "Python",
      "Selenium",
      "Playwright",
      "Appium",
      "RestAssured",
      "Cypress",
      "Jest",
      "Postman",
      "Manual & Exploratory Testing",
    ],
  },
];
