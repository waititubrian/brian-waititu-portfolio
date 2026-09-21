// TODO: replace `url` once you know the production domain this deploys to.
export const siteConfig = {
  name: "Brian Muraya",
  role: "Full-Stack Developer",
  tagline:
    "Full-Stack Developer building SaaS MVPs, dashboards, and business web applications with the Next.js ecosystem, with a background in software quality and test automation for enterprise applications.",
  url: "https://brianwaititu.com", // TODO: replace with your production domain
  email: "waititubrian9@gmail.com",
  links: {
    github: "https://github.com/waititubrian",
    linkedin: "https://www.linkedin.com/in/muraya-brian/",
    upwork: "https://www.upwork.com/freelancers/~017ab7f0e847b8c5fd",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
