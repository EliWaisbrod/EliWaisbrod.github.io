import { AppBar, Toolbar, Button, Stack, Container, Box } from "@mui/material";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        color: "text.primary",
        backgroundColor: "rgba(250, 250, 250, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box sx={{ flex: 1 }} />
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {links.map((l) => (
              <Button
                key={l.href}
                href={l.href}
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                {l.label}
              </Button>
            ))}
          </Stack>
          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
