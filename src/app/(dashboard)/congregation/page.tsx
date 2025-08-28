"use client";

import {
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

export default function Congregation() {
  return (
    <Container maxWidth={false} disableGutters>
      <Toolbar
        sx={{
          bgcolor: "primary.dark",
          justifyContent: "space-between",
        }}
      >
        <Typography>Congregation Members</Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Button
            sx={{ my: 2, color: "primary.contrastText", textTransform: "none" }}
            variant="contained"
          >
            Add Member
          </Button>
        </Box>
      </Toolbar>

      <Box>B</Box>
    </Container>
  );
}
