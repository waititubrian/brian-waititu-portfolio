import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Two disciplines, one engineering mindset"
        description="What I bring to building modern web applications, backed by a quality engineering background."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08} className="h-full">
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="px-3 py-1 text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
