import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme} from '@mui/material';

function App() {
    return (
      <>
        <AppBar sx={{
          bgcolor:'#dbdbdb'
        }}>
          <Container>
            <Box sx={{
              bgcolor:'#FFFFFF',
              width:'100%',
              borderRadius:'25px',
              height:'100%',
              marginTop:'20px',
              paddingTop:'10px',
              paddingBottom:'10px'
            }}>
              <Toolbar>
                <Typography style={{
                  fontSize:'30px',
                  color:'#000000'
                }}>Sellfin</Typography>
                <Box sx={{
                  display:'flex',
                  width:'100%',
                  justifyContent:'flex-end',
                  alignItems:'center',
                  color:'#000000'
                }}>
                  <Typography>Test</Typography>
                  <Typography paddingLeft={1} paddingRight={2}>Test</Typography>
                  <Typography paddingRight={1}>Test</Typography>
                  <Typography paddingRight={1}>Test</Typography>
                  <Button variant='outlined' size='large' color='secondary'>Войти</Button>
                </Box>
              </Toolbar>
            </Box>
            <Box sx={{
              width:'100%',
              height:'auto',
              bgcolor:'#FFFFFF',
              borderRadius:'25px',
              marginTop:'20px',
              color:'#000000',
              paddingTop:'20px',
              paddingBottom:'20px'
            }}>
              <Container>
                <Grid container flexDirection='row'>
                  <Grid item md='6' xs='12'>
                    <Typography style={{
                    fontSize:'30px',
                    color:'#000000'
                    }}>Sellfin</Typography>
                    <Typography style={{
                        fontSize:'30px',
                        color:'#000000'
                    }}>Sellfin</Typography>
                    <Typography style={{
                        fontSize:'30px',
                        color:'#000000'
                    }}>Sellfin</Typography>
                  </Grid>      
                  <Grid item md='6' xs='12'>
                    <Paper sx={{width:'100%', height:'50vh'}}></Paper>
                  </Grid>
                </Grid>
                <Box sx={{
                  width:'100%',
                  height:'auto',
                  display:'flex',
                  mt:'10px',
                  spacing:'5px'
                }}>
                  <Button variant='outlined' size='medium' color='inherit'>Регистрация</Button>
                  <Button variant='outlined' size='medium' color='inherit' pl='5px'>Вход</Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </AppBar>
        <main>
          <Container>
            <Paper sx={{
              width:'100%',
              height:'100vh'
            }}>
            </Paper>
          </Container>
        </main>
      </>
    );
  }
  
  
  export default App;