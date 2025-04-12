import { Grid } from '@mui/material';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';

const App = () => {
  return (
    <div className='contacts'>
      <h1 className='contacts__title'>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
