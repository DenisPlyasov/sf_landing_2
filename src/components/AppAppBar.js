import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function AppAppBar() {
  const primary = {
    main:'#3300FF'
  }
  const theme = createTheme({
    typography: {
      fontFamily:[ '"Exo 2"','sans-serif'].join(',')
    }
  });
    return (
      <>
      <ThemeProvider theme={theme}>
        <div style={{
          position:'absolute',
          width:'100%',
          height:'548px',
          background:'linear-gradient(92.17deg, #210C9F 0.13%, #0C0439 98.17%)'
        }}></div>
            <AppBar sx={{
              bgcolor:'transparent',
              position:'relative',
            }}>
              <Container>
                <Box sx={{
                  bgcolor:'#FFFFFF',
                  width:'100%',
                  borderRadius:'25px',
                  height:'100%',
                  marginTop:'20px',
                  paddingTop:'10px',
                  paddingBottom:'10px',
                }}>
                  <Toolbar>
                    <Grid container flexDirection='row'>
                      <Grid item xs={12} md={5}>
                        <Typography style={{
                          fontSize:'30px',
                          color:'#000000',
                          width: '126px',
                          height: '59px',
                          fontFamily: 'Exo 2',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '40px',
                          lineHeight: '59px',
                          display:'inline-block',
                        }}>Sellfin</Typography>
                      </Grid>
                      <Grid item xs={12} md={7} alignContent='center'>
                        <Box sx={{
                          display:'flex',
                          width:'100%',
                          justifyContent:'center',
                          alignItems:'center',
                          color:'#000000',
                          flexWrap:'wrap'
                        }}>
                          <Typography paddingRight={1} style={{fontFamily: 'Exo 2', fontSize:'22px', fontWeight:'300', lineHeight: '28.8px', textAlign:' left'}}>Инструменты</Typography>
                          <Typography paddingRight={1} style={{fontFamily: 'Exo 2', fontSize:'22px', fontWeight:'300', lineHeight: '28.8px', textAlign:' left'}}>Тарифы</Typography>
                          <Typography paddingRight={1} style={{fontFamily: 'Exo 2', fontSize:'22px', fontWeight:'300', lineHeight: '28.8px', textAlign:' left'}}>Контакты</Typography>
                          <Button variant='outlined' size='large' color='secondary' style={{
                            width: '170px',
                            height: '58px',
                            border:' 4px solid #1400FF',
                            borderRadius: '14px',
                            fontFamily: 'Exo 2', fontSize:'24px', fontWeight:'300', lineHeight: '28.8px', textAlign:' left'
                          }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21" stroke="#1400FF" stroke-width="2" stroke-linecap="round"/>
                            <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="#1400FF" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <Typography style={{fontFamily: 'Exo 2', fontSize:'24px', fontWeight:'300', lineHeight: '28.8px', textAlign:' left'}}>
                              Войти
                            </Typography>
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>                
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
                          color:'#545454',
                          fontFamily: 'Exo 2',
                          fontSize: '40px',
                          fontWeight: '700',
                          lineHeight: '40px',
                          textAlign: 'left',                         
                        }}>Финансовая CRM система для маркетплейсов</Typography>
                        <Typography style={{
                          fontSize: '35px',
                          fontWeight: '400',
                          lineHeight: '38.15px',
                          textAlign: 'left',
                          marginTop:'20px',
                        }}>Комплексный инструмент для работы с финансами на маркетплейсах</Typography>
                      </Grid>      
                      <Grid item md='6' xs='12'>
                        <Paper sx={{width:'100%', height:'auto', boxShadow:'none', alignItems:'center'}}>
                          <Box 
                                component="img"
                                sx={{
                                  justifyContent:'flex-end',
                                  alignItems:'center',
                                  maxHeight: { xs: 350, md: 550 },
                                  maxWidth: { xs: 350, md: 550 },
                                  marginTop:{xs: '10px', md:'80px'},
                                  marginBottom:{xs: '10px', md:'80px'},
                                }}
                                alt="Picture"
                                src="https://sun9-21.userapi.com/impg/nKXyw8n_94uySpRGHQFaLjZ67s2EN1LarfUJrQ/W-5tGfhEihw.jpg?size=860x522&quality=96&sign=dfcfdfe42b2dee35ffc3e0eb2892dee4&c_uniq_tag=-ZoW-tts27gXMsvRI7GBsYX2jiThmtXpgHEEZgWMX3w&type=album"
                              />
                        </Paper>
                      </Grid>
                    </Grid>
                    <Box sx={{
                      width:'100%',
                      height:'auto',
                      display:'flex',
                      mt:'10px',
                      spacing:'5px'
                    }}>
                      <Button style={{
                        width: '250px',
                        height: '70px',
                        borderRadius: '18px',
                        backgroundColor:'#3300FF',
                        color:'#FFFFFF',
                        fontFamily: 'Exo 2',
                        fontSize: '20px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'left',     
                      }}>Демо-версия</Button>
                      <Button style={{
                        width: '250px',
                        height: '70px',
                        borderRadius: '18px',
                        backgroundColor:'#4A4A4A',
                        color:'#FFFFFF',
                        fontFamily: 'Exo 2',
                        fontSize: '20px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'left',   
                        marginLeft:'10px' 
                      }}>Вход</Button>
                    </Box>
                  </Container>
                </Box>
              </Container>
            </AppBar>
      </ThemeProvider>
      </>
    );
  }
  
  
  export default AppAppBar;