import { Grid, Typography } from "@mui/material";
import Section from "./Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/profile";

export default function Projects({ index = 0 }) {
  return (
    <Section id="projects" title="Projects" index={index}>
      <Grid container spacing={2}>
        {projects.map((p, idx) => (
          <Grid key={`${p?.title ?? "proj"}-${idx}`} item xs={12} md={6}>
            <ProjectCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
