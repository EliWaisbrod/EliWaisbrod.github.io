import { Stack, Typography, Box } from "@mui/material";
import Section from "./Section";

export default function Education({ index = 0 }) {
  return (
    <Section id="education" title="Education" index={index}>
      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Western University
        </Typography>

        <Typography color="text.secondary">
          Bachelor of Science - Computer Science (Specialization)
        </Typography>

        <Box sx={{ pt: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 800 }}>
            Relevant Coursework
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data Structures & Algorithms, Linear Algebra, Calculus, Intro to Data Science, Object Oriented Design and Analysis, Databases 1
          </Typography>
        </Box>
      </Stack>
    </Section>
  );
}
