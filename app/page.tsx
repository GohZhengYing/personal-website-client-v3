'use client';

import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import NavigationLayout from "./_layouts/NavigationLayout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Project } from "./_types/project";
import { useState, useEffect } from "react";
import SkillCard from "./_common/SkillCard";
import { useProjects } from "./_hooks/useProjects";

export default function Home() {
  // Common button styles
  const buttonBase = {
    fontFamily: 'Roboto',
    fontWeight: 500,
    textTransform: 'none',
  };

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
        .catch(() => {});
    }, []);

  return (
    <NavigationLayout>
  
      <Container maxWidth="lg">
        {/* HERO SECTION */}
        <Box sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={700} gutterBottom >
            {project.homePageHeader}
          </Typography>
          {project.homePageImage && <img src={project.homePageImage} width={200} />}
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ mb: 4, maxWidth: '720px', mx: 'auto' }}
          >
            {project.homePageBody}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button
              href="/projects"
              variant="contained"
              sx={{
                ...buttonBase,
                mt: 2,
                backgroundColor: '#1F2937',
                '&:hover': { backgroundColor: '#111827' },
              }}
            >
              View My Work
            </Button>

            <Button
              href="/contacts"
              variant="outlined"
              sx={{
                ...buttonBase,
                mt: 2,
                color: '#1F2937',
                borderColor: '#1F2937',
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>

        {/* SKILLS SECTION */}
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            My Skills
          </Typography>

          <Grid container spacing={3} sx={{ mt: 1 }}>
            {project.homePageSkills.map((skill) => (
              <Grid key={skill.skill}>
                <SkillCard name={skill.skill} image={skill.image}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      
    </NavigationLayout>
  );
}
