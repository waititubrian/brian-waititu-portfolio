export type Project = {
  slug: string;
  name: string;
  category: "development" | "qa-automation";
  /** One-line summary shown on the card. */
  tagline: string;
  /** Full description, one paragraph per array item. First paragraph is shown (truncated) on the card. */
  description: string[];
  tech: string[];
  /**
   * Screenshots for this project. images[0] is used as the card thumbnail;
   * the full array is shown as a gallery on the project detail page.
   * Place files under /public/projects/<slug>/ and reference them here,
   * e.g. "/projects/sift-intake-dashboard/dashboard.png".
   */
  images?: string[];
  /** Live webapp URL. Omit if not deployed yet — shows a "Coming soon" tag. */
  live?: string;
  featured: boolean;
};

// TODO: fill in real taglines, descriptions, tech stacks, links, and
// screenshots (place images under /public/projects/<slug>/ and add their
// paths to `images`) for each project below. Nothing here should be
// published until it reflects what the project actually does.
export const projects: Project[] = [
  {
    slug: "sift-intake-dashboard",
    name: "Sift - AI-Powered Lead Qualification & Routing Platform",
    category: "development",
    tagline:
      "Scores, routes, and logs every inbound lead automatically — in one pipeline run, before a human even opens their inbox.",
    description: [
      "Sift is a full-stack lead-qualification platform for sales teams buried in unsorted inbound leads. A raw form submission gets scored by AI (Claude, with a deterministic rule-based fallback so scoring never hard-fails), written to a CRM, and pushed to Slack — automatically, in seconds, with every attempt logged so nothing silently falls through the cracks.",
      "I designed and built the entire system solo: a layered Route → Service → Repository → Prisma architecture, an adapter pattern so every external integration degrades gracefully with zero required API keys, Clerk-based production authentication, and a full WCAG accessibility and security hardening pass. Deployed on Vercel with a Postgres/Neon backend across separate preview and production environments.",
    ],
    tech: [
      "Next.js 16",
      "TypeScript",
      "React",
      "Prisma",
      "PostgreSQL (Neon)",
      "Clerk",
      "Tailwind CSS",
      "shadcn/ui",
      "Anthropic Claude API",
      "Vercel",
    ],
    images: [
      "/projects/sift-intake-dashboard/landing-page.png",
      "/projects/sift-intake-dashboard/intake-form.png"
    ],
    live: "https://siftbase.vercel.app",
    featured: true,
  },
  {
    slug: "dashboard-application",
    name: "Dashboard Application",
    category: "development",
    tagline: "TODO: one-line summary of this dashboard",
    description: [
      "TODO: describe the dashboard's purpose, key features, and your role in building it.",
    ],
    tech: [],
    images: [],
    featured: true,
  },
  {
    slug: "pcx-pay",
    name: "PCX Pay",
    category: "development",
    tagline: "TODO: one-line summary of PCX Pay",
    description: [
      "TODO: describe what PCX Pay does, who it's for, and your role in building it.",
    ],
    tech: [],
    images: [],
    featured: true,
  },
  {
    slug: "test-automation-framework",
    name: "TODO: QA automation project name",
    category: "qa-automation",
    tagline: "TODO: one-line summary of this automation framework/project",
    description: [
      "TODO: describe what this framework tests, the tools it's built with, and its role in the CI/CD pipeline.",
    ],
    tech: [],
    images: [],
    featured: true,
  },
];
