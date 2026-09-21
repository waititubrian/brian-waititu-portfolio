import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";

function ProjectGrid({ items }: { items: Project[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.08}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const development = featured.filter((p) => p.category === "development");
  const qaAutomation = featured.filter((p) => p.category === "qa-automation");

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects"
        description="A selection of applications I've built, and the automation frameworks behind the quality work."
      />

      {development.length > 0 ? (
        <div className="mt-12">
          <h3 className="mb-6 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Development Projects
          </h3>
          <ProjectGrid items={development} />
        </div>
      ) : null}

      {qaAutomation.length > 0 ? (
        <div className="mt-16">
          <h3 className="mb-6 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            QA & Automation Projects
          </h3>
          <ProjectGrid items={qaAutomation} />
        </div>
      ) : null}
    </section>
  );
}
