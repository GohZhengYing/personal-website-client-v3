'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';

type SkillCardProps = {
  name: string;
  image: string;
};

const SkillCard = ({ name, image }: SkillCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        transition: '0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 3,
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          p: { xs: 0.5, sm: 1 }
        }}
      >
        {image && (
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: { xs: 22, sm: 30 },
              height: { xs: 22, sm: 30 },
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
        )}

        <Typography
          fontWeight={500}
          fontSize={{ xs: '0.9rem', sm: '1rem' }}
          whiteSpace="nowrap"
        >
          {name}
        </Typography>
      </Box>
    </Card>
  );
};

export default SkillCard;
