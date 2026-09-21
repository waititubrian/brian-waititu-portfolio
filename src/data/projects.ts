export type Project = {
  slug: string;
  name: string;
  category: "development" | "qa-automation";
  /** One-line summary shown on the card. */
  tagline: string;
  /** 2-4 sentence description of what the project does and your role. */
  description: string;
  tech: string[];
  image?: string;
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
};

// TODO: fill in real taglines, descriptions, tech stacks, links, and
// screenshots (place images under /public/projects/ and set `image`
// to that path) for each project below. Nothing here should be
// published until it reflects what the project actually does.
export const projects: Project[] = [
  {
    slug: "sift-intake-dashboard",
    name: "Sift / Intake Dashboard",
    category: "development",
    tagline: "TODO: one-line summary of what Sift does",
    description:
      "TODO: describe what this dashboard does, who it's for, and your role in building it.",
    tech: [],
    links: {},
    featured: true,
  },
  {
    slug: "dashboard-application",
    name: "Dashboard Application",
    category: "development",
    tagline: "TODO: one-line summary of this dashboard",
    description:
      "TODO: describe the dashboard's purpose, key features, and your role in building it.",
    tech: [],
    links: {},
    featured: true,
  },
  {
    slug: "pcx-pay",
    name: "PCX Pay",
    category: "development",
    tagline: "TODO: one-line summary of PCX Pay",
    description:
      "TODO: describe what PCX Pay does, who it's for, and your role in building it.",
    tech: [],
    links: {},
    featured: true,
  },
  {
    slug: "test-automation-framework",
    name: "TODO: QA automation project name",
    category: "qa-automation",
    tagline: "TODO: one-line summary of this automation framework/project",
    description:
      "TODO: describe what this framework tests, the tools it's built with, and its role in the CI/CD pipeline.",
    tech: [],
    links: {},
    featured: true,
  },
];
