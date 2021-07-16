import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#39A576',
    },
    secondary: {
      main: '#435B71',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

export default theme;