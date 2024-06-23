import logo from './logo.svg';
import './App.css';
import AppAppBar from './components/AppAppBar';
import MainBlock from './components/MainBlock';
import { Box, Grid, Typography, createTheme } from '@mui/material';
import IntergationsBlock from './components/IntegrationsBlock';
function App() {
  const theme = createTheme({
    typography:{
      fontFamily:['"Exo 2"', 'sans-serif'].join(',')
    }
  });
  return (
    <>
      <Grid container flexDirection={'column'}>
        <Grid item xs='12'>
          <AppAppBar/>
        </Grid>
        <Grid item xs='12'>
          <MainBlock/>
        </Grid>
        <Grid item xs='12'>
          <IntergationsBlock/>
        </Grid>
      </Grid>
    </>
  );
}


export default App;
