import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Chip,
  Button,
} from "@mui/material";

export default function ProjectCard(props) {
  const title = typeof props?.title === "string" ? props.title : "Untitled Project";
  const subtitle = typeof props?.subtitle === "string" ? props.subtitle : "";
  const bullets = Array.isArray(props?.bullets) ? props.bullets : [];
  const tech = Array.isArray(props?.tech) ? props.tech : [];
  const links = props?.links ?? {};

  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 800 }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {subtitle}
          </Typography>
        )}

        <Stack spacing={0.75} sx={{ mb: tech.length ? 2 : 0 }}>
          {bullets.map((b) => (
            <Typography key={b} variant="body2">
              • {b}
            </Typography>
          ))}
        </Stack>

        {tech.length > 0 && (
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {tech.map((t) => (
              <Chip key={t} label={t} size="small" />
            ))}
          </Stack>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        {typeof links.repo === "string" && links.repo && (
          <Button
            size="small"
            href={links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
