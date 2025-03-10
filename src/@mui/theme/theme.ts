'use client';
import { createTheme } from '@mui/material/styles';

import breakpoints from '@/@mui/theme/breakpoints';

const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#bdbdbd',
    },
  },
});

export default theme;
