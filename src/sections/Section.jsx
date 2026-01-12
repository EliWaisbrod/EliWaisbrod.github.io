import { Box, Container, Typography } from "@mui/material";

export default function Section({ id, title, children, index = 0 }) {
  const isGray = index % 2 === 1;

  return (
    <Box
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: isGray ? "background.default" : "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            position: "relative",
            width: "fit-content",
          }}
        >
          {title}
          <Box
            component="span"
            sx={{
              display: "block",
              height: 4,
              width: "65%",
              borderRadius: 999,
              mt: 1,
              backgroundColor: "primary.main",
              opacity: 0.18,
            }}
          />
        </Typography>

        {children}
      </Container>
    </Box>
  );
}
