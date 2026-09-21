export type ExperienceEntry = {
  role: string;
  company: string;
  type: "Full-time" | "Freelance" | "Contract";
  period: string;
  summary: string;
  highlights?: string[];
  tech?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer",
    company: "Upwork",
    type: "Freelance",
    period: "June, 2026 — Present",
    summary:
      "Building full-stack MVPs, SaaS applications, dashboards, and business web applications on the Next.js ecosystem — turning client ideas and requirements into functional, scalable products.",
  },
  {
    role: "QA Engineer",
    company: "Turnkey Africa Limited",
    type: "Full-time",
    period: "March, 2023 — Present",
    summary:
      "Testing enterprise insurance applications across web, mobile, and backend services, with a focus on test automation, API validation, and regression coverage for reliable software delivery.",
  },
  {
    role: "QA Engineer",
    company: "MyDevConnect",
    type: "Contract",
    period: "April, 2025 — April, 2026",
    summary:
      "Contributed to the quality and reliability of web applications through automated testing, API validation, functional testing, and continuous regression coverage across multiple products.",
  },
];
