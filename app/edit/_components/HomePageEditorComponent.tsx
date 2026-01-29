'use client';

import {
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Project} from '../../_types/project';
import { fileToBase64 } from '../../_services/FileToBase64';

type HomePageEditorComponentProps = {
  project: Project;
  setProject: Dispatch<SetStateAction<Project>>
};

export default function HomePageEditorComponent({ project, setProject }: HomePageEditorComponentProps) {

  return (
      <>

          <TextField
            label="Home Page Header"
            value={project.homePageHeader}
            onChange={(e) =>
              setProject({ ...project, homePageHeader: e.target.value })
            }
          />

          <TextField
            label="Home Page Body"
            multiline
            rows={3}
            value={project.homePageBody}
            onChange={(e) =>
              setProject({ ...project, homePageBody: e.target.value })
            }
          />

          <Divider />

          <Typography variant="h6">Home Page Image</Typography>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files &&
              fileToBase64(e.target.files[0], (img) =>
                setProject({ ...project, homePageImage: img })
              )
            }
          />

          {project.homePageImage && (
            <img src={project.homePageImage} width={200} />
          )}

      </>
  );
}
