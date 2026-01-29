'use client';

import {
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Project} from '../../_types/project';
import { fileToBase64 } from '../../_services/FileToBase64';

type AboutEditorComponentProps = {
  project: Project;
  setProject: Dispatch<SetStateAction<Project>>
};

export default function AboutEditorComponent({ project, setProject }: AboutEditorComponentProps) {

  return (
      <>

                  <TextField
            label="About Me"
            multiline
            rows={4}
            value={project.aboutMe}
            onChange={(e) =>
              setProject({ ...project, aboutMe: e.target.value })
            }
          />
      </>
  );
}
