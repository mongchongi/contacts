import { Grid } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <div className='contacts'>
      <h1 className='contacts__title'>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>item 1</Grid>
        <Grid size={6}>item 2</Grid>
      </Grid>
    </div>
  );
};

export default App;
