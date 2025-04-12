import { alpha, Box, Grid, InputBase, styled, AppBar, Toolbar, Typography, Button, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCallIcon from '@mui/icons-material/AddCall';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSearch = (event) => {
    setKeyword(event.target.value.toLowerCase());
  };

  return (
    <>
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
              <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} onChange={handleSearch} />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2}>
        <Grid size={6} display={{ xs: 'none', sm: 'block' }} padding={'20px 0 0 20px'}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ContactsList keyword={keyword} />
        </Grid>
      </Grid>

      <Button
        variant='contained'
        sx={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          display: { xs: 'flex', sm: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setOpen(true)}
      >
        <AddCallIcon />
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ContactForm />
        </Box>
      </Modal>
    </>
  );
};

export default App;

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '5px',
};
