'use client';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavigationLayout from '../_layouts/NavigationLayout';
import { Project, ProjectItem, Skill } from '../_types/project';
import HomePageEditorComponent from './_components/HomePageEditorComponent';
import { fileToBase64 } from '../_services/FileToBase64';
import SkillsEditorComponent from './_components/SkillsEditorComponent';
import ProjectsEditorComponent from './_components/ProjectsEditorComponent';
import AboutEditorComponent from './_components/AboutEditorComponent';
import ContactsEditorComponent from './_components/ContactsEditorComponent';
import { useProjects } from '../_hooks/useProjects';

/* -------------------- COMPONENT -------------------- */

export default function EditLayout() {
  const router = useRouter();

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

  /* -------------------- AUTH CHECK -------------------- */

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/login');
      return;
    }
    // Load data only if token exists
    useProjects()
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token');
          router.replace('/login');
          throw new Error('Unauthorized');
        }
        return res.json();
      })
      .then((data) => setProject(data))
      .catch(() => { });
  }, []);

  /* -------------------- SAVE -------------------- */

  const saveProject = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/login');
      return;
    }
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/project/${'69777d53f34c5481bb1b78cb'}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(project),
    });

    alert('Saved successfully!');
  };

  /* -------------------- LOGOUT -------------------- */

  const logout = () => {
    localStorage.removeItem('token');
    router.replace('/login');
  };

  /* -------------------- UI -------------------- */

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" gap={3} py={6}>

        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Edit Portfolio</Typography>
          <Button color="error" onClick={logout}>
            Logout
          </Button>
        </Box>

        <HomePageEditorComponent project={project} setProject={setProject} />

        <Divider />

        <SkillsEditorComponent project={project} setProject={setProject} />

        <Divider />

        <Typography variant="h6">Projects</Typography>

        <ProjectsEditorComponent project={project} setProject={setProject} />

        <Divider />

        <Typography variant="h6">About</Typography>

        <AboutEditorComponent project={project} setProject={setProject} />

        <Divider />

        <Typography variant="h6">Contacts</Typography>

        <ContactsEditorComponent project={project} setProject={setProject} />

        <Button
          variant="contained"
          size="large"
          onClick={saveProject}
        >
          Save All Changes
        </Button>

      </Box>
    </Container>
  );
}
