'use client';

import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Stack,
  Slide,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavButton from "../_common/NavigationButton";

type NavigationLayoutProps = {
  children: React.ReactNode;
};

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
      {/* NAVBAR */}
      <Slide in direction="left" timeout={400}>
        <AppBar
          position="sticky"
          elevation={1}
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #E5E7EB",
            height: { xs: 56, md: 70 }, // responsive height
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* DESKTOP NAV */}
              <Stack
                direction="row"
                spacing={4}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <NavButton name="Home" dir="" />
                <NavButton name="Projects" dir="projects" />
                <NavButton name="About" dir="about" />
                <NavButton name="Contacts" dir="contacts" />
              </Stack>

              {/* MOBILE MENU BUTTON */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <MenuIcon />
              </IconButton>

              {/* MOBILE MENU */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={() => setAnchorEl(null)}>Home</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Projects</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>About</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Contacts</MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* PAGE CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: "linear-gradient(120deg, #f8fafc, #e5e7eb)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 25s ease infinite",
          overflowX: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
