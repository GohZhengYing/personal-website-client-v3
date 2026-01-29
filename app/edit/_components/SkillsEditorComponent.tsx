'use client';

import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Project, Skill } from '../../_types/project';
import { fileToBase64 } from '../../_services/FileToBase64';

type SkillsEditorComponentProps = {
  project: Project;
  setProject: Dispatch<SetStateAction<Project>>
};

export default function SkillsEditorComponent({ project, setProject }: SkillsEditorComponentProps) {


  const updateSkill = (
    index: number,
    field: keyof Skill,
    value: string
  ) => {
    const updated = [...project.homePageSkills];
    updated[index][field] = value;
    setProject({ ...project, homePageSkills: updated });
  };


  return (
      <>

         <Typography variant="h6">Skills</Typography>

          {project.homePageSkills.map((s, i) => (
            <Box key={i} display="flex" gap={2}>
              <TextField
                label="Skill"
                value={s.skill}
                onChange={(e) =>
                  updateSkill(i, 'skill', e.target.value)
                }
              />

              {s.image && <img src={s.image} width={200} />}

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files &&
                  fileToBase64(e.target.files[0], (img) =>
                    updateSkill(i, 'image', img)
                  )
                }
              />

              <Button
                color="error"
                onClick={() =>
                  setProject({
                    ...project,
                    homePageSkills: project.homePageSkills.filter(
                      (_, idx) => idx !== i
                    ),
                  })
                }
              >
                Delete
              </Button>
            </Box>
          ))}

          <Button
            onClick={() =>
              setProject({
                ...project,
                homePageSkills: [
                  ...project.homePageSkills,
                  { skill: '', image: '' },
                ],
              })
            }
          >
            Add Skill
          </Button>

      </>
  );
}
