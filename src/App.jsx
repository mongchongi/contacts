import { alpha, Box, Grid, InputBase, styled, AppBar, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const App = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              연락처 앱
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2}>
        <Grid size={6} display={{ xs: 'none', sm: 'block' }}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ContactsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
