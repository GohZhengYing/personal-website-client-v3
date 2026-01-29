'use client';

import { Box, AppBar, Toolbar, Container, Stack, Slide } from "@mui/material";
import NavButton from "../_common/NavigationButton";

type NavigationLayoutProps = {
  children: React.ReactNode;
};

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
   <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
  {/* NAVBAR */}
  <Slide in direction="left" timeout={400}>
    <AppBar
      position="sticky"
      elevation={1}
      sx={{backgroundColor: 'white', borderBottom: '1px solid #E5E7EB', height: '70px' }} // fix height here
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>
          <Stack direction="row" spacing={4}>
            <NavButton name="Home" dir="" />
            <NavButton name="Projects" dir="projects" />
            <NavButton name="About" dir="about" />
            <NavButton name="Contacts" dir="contacts" />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  </Slide>

  {/* PAGE CONTENT */}
  <Box
    sx={{
      flexGrow: 1, // take remaining vertical space
      width: '100%', // full width without causing horizontal scroll
      background: 'linear-gradient(120deg, #f8fafc, #e5e7eb)',
      backgroundSize: '400% 400%',
      animation: 'gradientMove 25s ease infinite',
      overflow: 'hidden', // optional: hide content overflow
    }}
  >
    {children}
  </Box>
</Box>

  );
}
