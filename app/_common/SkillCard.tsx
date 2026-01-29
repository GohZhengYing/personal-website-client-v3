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
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          p: { xs: 1.5, sm: 2 },
        }}
      >
        {image && (
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
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
      </CardContent>
    </Card>
  );
};

export default SkillCard;
