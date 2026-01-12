import { Stack, Typography, Button, Box, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "./Section";
import { profile } from "../data/profile";

export default function Contact({ index = 0 }) {
  return (
    <Section id="contact" title="Contact" index={index}>
      <Stack spacing={2.5}>

        <Divider />

        <Box>
          <Typography variant="body2" sx={{ fontWeight: 800 }}>
            Email
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.email}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" sx={{ fontWeight: 800 }}>
            Mobile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.phone}
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
          <Button
            variant="contained"
            href={`mailto:${profile.email}`}
            startIcon={<EmailIcon />}
          >
            Email
          </Button>

          <Button
            variant="outlined"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>

          <Button
            variant="outlined"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}
