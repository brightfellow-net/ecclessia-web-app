"use client";

import MenuBar from "@/components/layout/header/Menubar";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

export default function Congregation() {
  return (
    <Container maxWidth={false} disableGutters>
      <MenuBar>
        <Typography>Congregation Members</Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Button variant="contained">Add Member</Button>
        </Box>
      </MenuBar>

      <Container maxWidth={false}>
        <Paper
          sx={{
            p: 2,
            minHeight: "80vh",
            boxShadow: 3,
            bgcolor: "background.default",
            color: "text.primary",
            my: 2,            
          }}
          elevation={3}
        >
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>gYKt0@example.com</TableCell>
                  <TableCell>Leader</TableCell>
                  <TableCell>
                    <IconButton>
                      <Avatar />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Container>
  );
}
