import type { Project } from "./types";
import projeto01 from "./projeto-01";
import projeto02 from "./projeto-02";
import projeto03 from "./projeto-03";

// Para adicionar um projeto: crie o arquivo e inclua-o nesta lista.
export const projects: Project[] = [projeto01, projeto02, projeto03].sort(
  (a, b) => a.order - b.order,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
