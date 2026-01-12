import { Stack, Typography, Chip, Box } from "@mui/material";
import Section from "./Section";
import { experience } from "../data/profile";

function ExperienceItem({ item }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        p: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {item.role}
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 1 }}>
        {item.company} • {item.location} • {item.dates}
      </Typography>

      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
        {item.tags.map((t) => (
          <Chip key={t} label={t} size="small" variant="outlined" />
        ))}
      </Stack>

      <Stack spacing={0.75}>
        {item.bullets.map((b) => (
          <Typography key={b} variant="body2">
            • {b}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

export default function Experience({ index = 0 }) {
  return (
    <Section id="experience" title="Experience" index={index}>
      <Stack spacing={2}>
        {experience.map((e) => (
          <ExperienceItem key={`${e.company}-${e.role}`} item={e} />
        ))}
      </Stack>
    </Section>
  );
}
