import { makeStyles } from '@mui/styles';

// theme contains all the margins and lot of measurements.
export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImage: {
    filter: theme.pallette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
