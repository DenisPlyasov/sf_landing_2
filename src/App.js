import logo from './logo.svg';
import './App.css';
import AppAppBar from './components/AppAppBar';
import MainBlock from './components/MainBlock';
import { Box, Grid, Typography, createTheme } from '@mui/material';
import IntergationsBlock from './components/IntegrationsBlock';
import DataSecurity from './components/DataSecurity';
import SectionFeatures from './components/SectionFeatures';
import MonthGift from './components/MonthGift';
import Tarifes from './components/Tarifes';
import LandingFooter from './components/LandingFooter';

function App() {
  const theme = createTheme({
    typography:{
      fontFamily:['"Exo 2"', 'sans-serif'].join(',')
    }
  });
  return (
    <>
      <div id='AppAppBar'><AppAppBar/></div> 
      <div id='MainBlock'><MainBlock/></div>
      <div id='IntergationsBlock'><IntergationsBlock/></div>
      <div id='DataSecurity'><DataSecurity/></div>
      <div id='SectionFeatures'><SectionFeatures/></div>
      <div id='MonthGift'><MonthGift/></div>
      <div id='Tarifes'><Tarifes/></div>
      <div id='LandingFooter'><LandingFooter/></div>
    </>
  );
}


export default App;
