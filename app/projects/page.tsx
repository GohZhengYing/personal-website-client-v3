'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Chip,
  CardActionArea,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import NavigationLayout from '../_layouts/NavigationLayout';
import { useEffect, useState } from 'react';
import { Project } from '../_types/project';
import { useProjects } from '../_hooks/useProjects';

export default function Projects() {
  const [projectData, setProjectData] = useState<Project>({
    homePageHeader: '',
    homePageBody: '',
    homePageImage: '',
    homePageSkills: [],
    projects: [],
    aboutMe: '',
    contacts: {
      email: '',
      linkedinUrl: '',
      githubUrl: '',
    },
  });

  useEffect(() => {
    useProjects()
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch(() => {});
  }, []);

  return (
    <NavigationLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projectData.projects.map((project) => (
            <Grid key={project.title}>
              <Card
                sx={{
                  height: '100%',
                  transition: '0.2s ease',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardActionArea
                  href={project.link}
                  target="_blank"
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    {/* Project image */}
                    {project.image && (
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 160,
                          objectFit: 'cover',
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />
                    )}

                    {/* Title */}
                    <Typography variant="h6" fontWeight={600}>
                      {project.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1, mb: 2 }}
                    >
                      {project.body}
                    </Typography>

                    {/* Skills */}
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {project.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </NavigationLayout>
  );
}
