import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function MainBlock() {
  const primary = {
    main:'#3300FF'
  }
  // const theme = createTheme({
  //   palette: {
  //     primary:'#00bcd4',
  //     secondary:'#4A4A4A'
  //   }
  // });
  
    return (
      <>
        <div style={{
          position:'relative',
          marginTop:'50px'
        }}>
            <Container>
                <Paper style={{
                    widh:'100%',
                    height:'100vh',
                    borderRadius:'25px',
                    backgroundColor:'#FFFFFF',
                }}></Paper>
            </Container>
        </div>
      </>
    );
  }
  
  
  export default MainBlock;