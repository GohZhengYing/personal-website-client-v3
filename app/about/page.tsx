'use client';


import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import NavigationLayout from "../_layouts/NavigationLayout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from "react";
import { Project } from "../_types/project";
import { useProjects } from "../_hooks/useProjects";


export default function About() {

  const [project, setProject] = useState<Project>({
    homePageHeader: '',
    homePageBody: '',
    homePageImage: '',
    homePageSkills: [],
    projects: [],
    aboutMe: '',
    contacts: {
      email: '',
      linkedinUrl: '',
      githubUrl: ''
    },
  });

  useEffect(() => {

    // Load data only if token exists
    useProjects()
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Unauthorized');
        }
        return res.json();
      })
      .then((data) => setProject(data))
      .catch(() => { });
  }, []);

  return (
    <NavigationLayout>
      <Container sx={{ height: "100vh", width: "100vw" }}>
        {/* ABOUT */}
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            About Me
          </Typography>

          <Typography color="text.secondary" maxWidth="700px">
            {project.aboutMe}
          </Typography>
        </Box>
      </Container>
    </NavigationLayout>

  );
}
