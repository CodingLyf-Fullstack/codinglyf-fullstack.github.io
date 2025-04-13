import React from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 3,
          '& .MuiLinearProgress-bar': {
            transition: 'transform 0.2s linear',
          },
        }}
      />
    </Box>
  );
};

export default ScrollProgress;