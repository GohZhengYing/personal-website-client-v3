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
      .catch(() => { });
  }, []);

  return (
    <NavigationLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projectData.projects.map((project) => (
            <Grid key={project.title} sx={{
              width: '100%',
            }}>
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  transition: '0.2s ease',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardActionArea
                  href={project.link ? project.link : '/'}
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
                          objectFit: 'scale-down',
                          borderRadius: 1,
                          mb: 2,
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: '#ADD8E6',
                          p: '5px'
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
                      sx={{
                        mt: 1,
                        mb: 2,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {project.body}
                    </Typography>


                    {/* Skills */}
                    <Stack direction="row" flexWrap="wrap">
                      {project.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{ m: 0.5 }}
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
