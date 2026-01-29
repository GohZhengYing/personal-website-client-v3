'use client';

import { Box, Button, Container, Link, Typography, Stack, IconButton } from "@mui/material";
import NavigationLayout from "../_layouts/NavigationLayout";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from "react";
import { Project } from "../_types/project";
import { useProjects } from "../_hooks/useProjects";

export default function Contacts() {

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
  const contacts = [
    {
      name: "Email",
      href: "mailto:"+project.contacts.email,
      icon: <EmailIcon />,
      color: "#D44638",
    },
    {
      name: "LinkedIn",
      href: project.contacts.linkedinUrl,
      icon: <LinkedInIcon />,
      color: "#0077B5",
    },
    {
      name: "GitHub",
      href: project.contacts.githubUrl,
      icon: <GitHubIcon />,
      color: "#333",
    }
  ];

  return (
    <NavigationLayout>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
        }}
      >
        {/* HEADER */}
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          gutterBottom
        >
          Let’s Connect!
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 6, maxWidth: 600 }}
        >
          I’d love to hear from you. Whether it’s a project inquiry, a collaboration, or just a hello, reach out through any of the options below.
        </Typography>

        {/* CONTACT OPTIONS */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
          {contacts.map((contact) => (
            <Button
              key={contact.name}
              component={Link}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={contact.icon}
              sx={{
                borderColor: contact.color,
                color: contact.color,
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: `${contact.color}22`, // subtle hover
                },
              }}
            >
              {contact.name}
            </Button>
          ))}
        </Stack>

        {/* OPTIONAL CTA BUTTON */}
        <Box sx={{ mt: 6 }}>
          <Button
            component={Link}
            href="mailto:zhengying@example.com"
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: 5,
              py: 1.8,
              backgroundColor: "#1F2937",
              "&:hover": { backgroundColor: "#111827" },
            }}
          >
            Send an Email
          </Button>
        </Box>
      </Container>
    </NavigationLayout>
  );
}
