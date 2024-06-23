import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function IntergationsBlock() {
  const primary = {
    main:'#3300FF'
  }
    return (
      <>
        <div style={{
          position:'relative',
          marginTop:'50px'
        }}>
            <Container>
                <Paper style={{
                    widh:'100%',
                    height:'50vh',
                    borderRadius:'25px',
                    backgroundColor:'#FFFFFF',
                }}></Paper>
            </Container>
        </div>
      </>
    );
  }
  
  
  export default IntergationsBlock;