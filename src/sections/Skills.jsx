import { Stack, Typography, Chip, Box } from "@mui/material";
import Section from "./Section";
import { skills } from "../data/profile";

function Group({ title, items }) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 800, mb: 1 }}>{title}</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {items.map((label) => (
          <Chip key={label} label={label} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
}

export default function Skills({ index = 0 }) {
  return (
    <Section id="skills" title="Skills" index={index}>
      <Stack spacing={3}>
        {skills.map((g) => (
          <Group key={g.title} title={g.title} items={g.items} />
        ))}
      </Stack>
    </Section>
  );
}
