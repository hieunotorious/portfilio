'use client';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '400px': true;
    '440px': true;
  }
}

const breakpoints = {
  values: {
    xs: 0,
    '350px': 350,
    '400px': 400,
    '440px': 440,
    sm: 600,
    md: 900,
    '1024': 1024,
    lg: 1200,
    l: 1350,
    '1440': 1440,
    xl: 1536,
  },
};

export default breakpoints;
