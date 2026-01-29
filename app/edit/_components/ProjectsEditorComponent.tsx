'use client';

import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Project, ProjectItem } from '../../_types/project';
import { fileToBase64 } from '../../_services/FileToBase64';

type ProjectsEditorComponentProps = {
  project: Project;
  setProject: Dispatch<SetStateAction<Project>>;
};

export default function ProjectsEditorComponent({
  project,
  setProject,
}: ProjectsEditorComponentProps) {
  const updateProjectItem = (
    index: number,
    field: keyof ProjectItem,
    value: any
  ) => {
    const updated = [...project.projects];
    updated[index][field] = value;
    setProject({ ...project, projects: updated });
  };

  return (
    <Stack spacing={4}>
      {project.projects.map((p, i) => (
        <Card key={i} variant="outlined">
          <CardContent>
            <Stack spacing={3}>
              {/* Header */}
              <Typography variant="h6" fontWeight={600}>
                Project {i + 1}
              </Typography>

              {/* Title */}
              <TextField
                label="Title"
                fullWidth
                value={p.title}
                onChange={(e) =>
                  updateProjectItem(i, 'title', e.target.value)
                }
              />

              {/* Body */}
              <TextField
                label="Description"
                multiline
                rows={3}
                fullWidth
                value={p.body}
                onChange={(e) =>
                  updateProjectItem(i, 'body', e.target.value)
                }
              />

              {/* Link */}
              <TextField
                label="Project Link"
                fullWidth
                value={p.link}
                onChange={(e) =>
                  updateProjectItem(i, 'link', e.target.value)
                }
              />

              {/* Skills */}
              <Box>
                <Typography fontWeight={500} mb={1}>
                  Skills
                </Typography>

                <Stack spacing={2}>
                  {p.skills.map((s, si) => (
                    <Stack
                      key={si}
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
                      <TextField
                        label={`Skill ${si + 1}`}
                        value={s}
                        onChange={(e) => {
                          const temp = [...p.skills];
                          temp[si] = e.target.value;
                          updateProjectItem(i, 'skills', temp);
                        }}
                        sx={{ flex: 1 }}
                      />

                      <Button
                        color="error"
                        onClick={() => {
                          const temp = [...p.skills];
                          temp.splice(si, 1);
                          updateProjectItem(i, 'skills', temp);
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  ))}

                  <Button
                    size="small"
                    onClick={() =>
                      updateProjectItem(i, 'skills', [...p.skills, ''])
                    }
                  >
                    + Add Skill
                  </Button>
                </Stack>
              </Box>

              {/* Image Upload */}
              <Box>
                <Typography fontWeight={500} mb={1}>
                  Image
                </Typography>

                <Stack spacing={2}>
                  <Button variant="outlined" component="label">
                    Upload Image
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        e.target.files &&
                        fileToBase64(e.target.files[0], (img) =>
                          updateProjectItem(i, 'image', img)
                        )
                      }
                    />
                  </Button>

                  {p.image && (
                    <Box
                      component="img"
                      src={p.image}
                      sx={{
                        width: 200,
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    />
                  )}
                </Stack>
              </Box>

              <Divider />

              {/* Delete Project */}
              <Button
                color="error"
                onClick={() =>
                  setProject({
                    ...project,
                    projects: project.projects.filter(
                      (_, idx) => idx !== i
                    ),
                  })
                }
              >
                Delete Project
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}

      {/* Add Project */}
      <Button
        variant="contained"
        onClick={() =>
          setProject({
            ...project,
            projects: [
              ...project.projects,
              {
                title: '',
                body: '',
                image: '',
                link: '',
                skills: [],
              },
            ],
          })
        }
      >
        + Add Project
      </Button>
    </Stack>
  );
}
