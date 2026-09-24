import { CheckCircle2 } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where the QA and development work has happened"
        />

        <div className="mt-12 flex flex-col gap-8">
          {experience.map((role, i) => (
            <Reveal key={`${role.company}-${role.role}`} delay={i * 0.08}>
              <div className="relative border-l border-border pl-6 sm:pl-8">
                <span
                  aria-hidden
                  className="bg-gradient-brand absolute top-1.5 -left-[5px] size-2.5 rounded-full"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{role.role}</h3>
                    <p className="text-sm font-medium text-foreground">{role.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{role.period}</span>
                </div>
                <Badge variant="secondary" className="mt-2 font-normal">
                  {role.type}
                </Badge>
                <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                  {role.summary}
                </p>
                {role.highlights && role.highlights.length > 0 ? (
                  <ul className="mt-4 flex flex-col gap-2">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {role.tech && role.tech.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
