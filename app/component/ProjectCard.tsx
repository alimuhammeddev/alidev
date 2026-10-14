import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

export type PortfolioProject = {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  github: string;
  live: string;
};

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#252a25] text-[#e6e2d8]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#f5f2eb]">
            {project.title}
          </h3>
          <span className="font-serif text-4xl italic leading-none text-[#d58b69]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-[#b9b8ac]">
          {project.description}
        </p>

        <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-[#9a9b8f]">
          {project.technologies.join("  ·  ")}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#c9c6bb] transition-colors hover:text-[#f5f2eb]"
          >
            <Code2 size={16} aria-hidden="true" />
            Source code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#d58b69] transition-colors hover:text-[#f0bd9f]"
          >
            Live site
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
