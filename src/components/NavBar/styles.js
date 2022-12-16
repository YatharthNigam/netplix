import { makeStyles } from '@mui/styles';

// theme contains all the margins and lot of measurements.
export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // only show if screen greater than up. i.e. not mobile
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
