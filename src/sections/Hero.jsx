import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { profile } from "../data/profile";
import headshot from "../assets/hero-headshot.webp";

export default function Hero() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h2"
              sx={{
                mb: 1.5,
                fontWeight: 900,
              }}
            >
              {profile.name}
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 520 }}
            >
              {profile.headline}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" size="large" href="#projects">
                Projects
              </Button>
              <Button variant="outlined" size="large" href={`mailto:${profile.email}`}>
                Contact
              </Button>
            </Stack>
          </Box>

          {/* Right: Headshot */}
          <Box
            component="img"
            src={headshot}
            alt={profile.name}
            sx={{
              width: { xs: 240, md: 340 },
              height: { xs: 240, md: 340 },
              justifySelf: { xs: "start", md: "end" },
              objectFit: "cover",
              borderRadius: 4,
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
