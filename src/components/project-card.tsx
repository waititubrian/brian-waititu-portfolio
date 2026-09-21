import Image from "next/image";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.links.live || project.links.github;

  return (
    <Card className="group h-full overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_0_1px_var(--primary)/10,0_20px_40px_-20px_oklch(0.63_0.19_277/0.35)]">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gradient-brand flex h-full w-full items-center justify-center opacity-20">
            <FolderGit2 className="size-12 text-foreground" strokeWidth={1.25} />
          </div>
        )}
      </div>

      <CardHeader className="px-5 pt-5">
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>

      <CardContent className="px-5">
        <p className="text-sm text-muted-foreground text-pretty">
          {project.description}
        </p>
        {project.tech.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>

      {hasLinks ? (
        <CardFooter className="gap-4 px-5 pb-5">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-4" />
              Live site
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="size-4" />
              Source
            </a>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  );
}
