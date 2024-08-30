import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function LandingFooter() {
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
          position:'relative',
          width:'100%',
          display:'flex',
          justifyContent:'center'
        }}>
          <Paper style={{
              width:'100%',
              height:'auto',
              borderRadius:'0px',
              backgroundColor:'#000000',
              boxShadow:'none',
              paddingTop:'80px',
              paddingBottom:'80px',
          }}>
            <Container>
                <Grid container flexDirection={'row'}>
                    <Grid item xs='12' md='4'>
                        <Grid container flexDirection={'row'}>
                            <Grid item xs='3'>
                                <Typography style={{
                                    fontFamily: 'Exo 2',
                                    fontSize: '50px',
                                    fontWeight: '700',
                                    lineHeight: '54.5px',
                                    textAlign: 'center',    
                                    color:'#FFFFFF'                               
                                }}>
                                    SF
                                </Typography>
                            </Grid>
                            <Grid item xs='9'>
                                <Box sx={{
                                    width:'100%',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    alignContent:'space',
                                    flexWrap:'wrap',
                                }}>
                                    <Link href="#AppAppBar" underline="none">
                                        <Typography style={{
                                            fontFamily: 'Exo 2',
                                            fontSize: '25px',
                                            fontWeight: '200',
                                            lineHeight: '32.7px',
                                            textAlign: 'left',
                                            marginLeft:'5px' ,
                                            color:'#FFFFFF',
                                            paddingBottom:'10px'
                                        }}>
                                            Главная страница
                                        </Typography>
                                    </Link>
                                    <Link href="#MainBlock" underline="none">
                                        <Typography style={{
                                            fontFamily: 'Exo 2',
                                            fontSize: '25px',
                                            fontWeight: '200',
                                            lineHeight: '32.7px',
                                            textAlign: 'left',
                                            marginLeft:'5px' ,
                                            color:'#FFFFFF',
                                            paddingBottom:'10px'
                                        }}>
                                            Возможности
                                        </Typography>
                                    </Link>
                                    <Link href="#MonthGift" underline="none">
                                        <Typography style={{
                                            fontFamily: 'Exo 2',
                                            fontSize: '25px',
                                            fontWeight: '200',
                                            lineHeight: '32.7px',
                                            textAlign: 'left',
                                            marginLeft:'5px' ,
                                            color:'#FFFFFF',
                                            paddingBottom:'10px'
                                        }}>
                                            Демодоступ
                                        </Typography>
                                    </Link>
                                    <Link href="#Tarifes" underline="none">
                                        <Typography style={{
                                            fontFamily: 'Exo 2',
                                            fontSize: '25px',
                                            fontWeight: '200',
                                            lineHeight: '32.7px',
                                            textAlign: 'left',
                                            marginLeft:'5px' ,
                                            color:'#FFFFFF',
                                            paddingBottom:'10px'
                                        }}>
                                            Тарифы
                                        </Typography>
                                    </Link>
                                    <Link href="#AppAppBar" underline="none">
                                        <Typography style={{
                                            fontFamily: 'Exo 2',
                                            fontSize: '25px',
                                            fontWeight: '200',
                                            lineHeight: '32.7px',
                                            textAlign: 'left',
                                            marginLeft:'5px' ,
                                            color:'#FFFFFF',
                                            paddingBottom:'10px'
                                        }}>
                                            Контакты
                                        </Typography>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs='12' md='4' alignContent={'center'}>
                        <Box sx={{
                            width:'100%',
                            height:'-webkit-fill-available',
                            display:'flex',
                            justifyContent:'center',
                            alignContent:'center',
                            flexWrap:'wrap'
                        }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontSize: '25px',
                                fontWeight: '200',
                                lineHeight: '32.7px',
                                textAlign: 'left',
                                marginLeft:'5px' ,
                                color:'#FFFFFF',
                                paddingBottom:'10px'
                            }}>
                                Все права защищены. 2024
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs='12' md='4'>
                        <Box sx={{
                            width:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignContent:'space',
                            flexWrap:'wrap',
                        }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontSize: '44px',
                                fontWeight: '700',
                                lineHeight: '54.7px',
                                textAlign: 'center',
                                color:'#FFFFFF',
                                paddingBottom:'10px',
                            }}>
                                sales@sellfin.ru
                            </Typography>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontSize: '25px',
                                fontWeight: '200',
                                lineHeight: '32.7px',
                                textAlign: 'center',
                                color:'#FFFFFF',
                                paddingBottom:'10px'
                            }}>
                                ООО”Делаймани”
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
          </Paper>    
        </div>
        </ThemeProvider>
      </>
    );
  }
  
  
  export default LandingFooter;