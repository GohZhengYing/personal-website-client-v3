'use client';

import {
  TextField,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Project} from '../../_types/project';
import { fileToBase64 } from '../../_services/FileToBase64';

type ContactsEditorComponentProps = {
  project: Project;
  setProject: Dispatch<SetStateAction<Project>>
};

export default function ContactsEditorComponent({ project, setProject }: ContactsEditorComponentProps) {

  return (
      <>

 <TextField
            label="LinkedIn URL"
            value={project.contacts.linkedinUrl}
            onChange={(e) =>
              setProject({ ...project, contacts: {...project.contacts, linkedinUrl: e.target.value} })
            }
          />

          <TextField
            label="Email"
            value={project.contacts.email}
            onChange={(e) =>
              setProject({ ...project, contacts: {...project.contacts, email: e.target.value} })
            }
          />

                    <TextField
            label="Github URL"
            value={project.contacts.githubUrl}
            onChange={(e) =>
              setProject({ ...project, contacts: {...project.contacts, githubUrl: e.target.value} })
            }
          />
      </>
  );
}
