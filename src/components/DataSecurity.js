import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function DataSecurity() {
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
          id:'data-section',
          position:'relative',
          width:'100%'
        }}>
          <Paper style={{
              widh:'100%',
              height:'auto',
              borderRadius:'0px',
              backgroundColor:'#181818',
              boxShadow:'none',
              paddingTop:'80px',
              paddingBottom:'80px'
          }}>
            <Box sx={{
                width:'100%',
            }}>
                <Grid container flexDirection='column' spacing='30'>
                    <Grid item md='7' xs='12'>
                        <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '50px',
                            fontWeight: '700',
                            lineHeight: '54.5px',
                            textAlign: 'center',
                            color:'#FFFFFF'                        
                        }}>
                            Данные полностью защищены 
                        </Typography>
                    </Grid>
                    <Grid item xs='12'>
                        <Grid container flexDirection='row' spacing={4}>
                            <Grid item xs='12' md='6'>
                                <Container style={{
                                    maxWidth:'600px',
                                    marginTop:'20px'
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Exo 2',
                                        fontSize: '30px',
                                        fontWeight: '200',
                                        lineHeight: '32.7px',
                                        textAlign: 'center',
                                        color:'#FFFFFF'                                
                                    }}>
                                        Все полученные данные мы храним в полностью зашифрованном виде.  Наши специалисты постоянно улучшают безопасность сервиса и хранения данных. Чтобы вы были спокойны
                                    </Typography>
                                </Container>
                            </Grid>
                            <Grid item xs='12' md='6'>
                                <Grid container flexDirection='row'>
                                    <Grid item md='3' xs='12' alignContent={'center'} justifyContent={'flex-end'} overflow={'hidden'}>
                                            <Typography style={{
                                                fontFamily: 'Exo 2',
                                                fontSize: '50px',
                                                fontWeight: '200',
                                                lineHeight: '54.5px',
                                                textAlign: 'center',    
                                                background: "-webkit-linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                                                webkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}>
                                                “api_key”  
                                            </Typography>
                                    </Grid>
                                    <Grid item md='4' xs='12' justifyContent={'flex-end'} alignContent={'center'}>
                                        <Box sx={{
                                            width:'100%',
                                            display:'flex',
                                            justifyContent:'center'
                                        }}>
                                            <svg width="234" height="234" viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M212.697 45.2518C211.821 44.2512 210.747 43.4421 209.544 42.8753C208.341 42.3085 207.034 41.9962 205.704 41.9578C185.049 41.4178 158.913 19.3318 141.633 10.6648C130.959 5.32781 123.912 1.80881 118.62 0.881814C117.545 0.725238 116.454 0.72827 115.38 0.890814C110.088 1.81781 103.041 5.33681 92.376 10.6738C75.096 19.3318 48.96 41.4178 28.305 41.9578C26.9745 41.9982 25.6665 42.3114 24.4621 42.878C23.2576 43.4446 22.1824 44.2526 21.303 45.2518C19.4802 47.314 18.5398 50.0093 18.684 52.7578C23.121 142.965 55.476 198.792 112.248 231.237C113.724 232.074 115.362 232.506 116.991 232.506C118.62 232.506 120.258 232.074 121.743 231.237C178.515 198.792 210.861 142.965 215.307 52.7578C215.459 50.0097 214.522 47.3124 212.697 45.2518ZM167.553 80.7298L119.646 151.425C117.927 153.963 115.227 155.646 112.554 155.646C109.872 155.646 106.893 154.179 105.012 152.298L71.244 118.521C70.1415 117.414 69.5225 115.916 69.5225 114.354C69.5225 112.792 70.1415 111.293 71.244 110.187L79.587 101.826C80.6959 100.728 82.1934 100.112 83.754 100.112C85.3146 100.112 86.8121 100.728 87.921 101.826L109.881 123.786L148.032 67.4728C148.915 66.1842 150.271 65.2971 151.806 65.0054C153.34 64.7137 154.928 65.041 156.222 65.9158L165.987 72.5398C167.277 73.4211 168.166 74.7772 168.459 76.3118C168.753 77.8464 168.427 79.4347 167.553 80.7298Z" fill="#14FD00"/>
                                            </svg>
                                        </Box>
                                    </Grid>
                                    <Grid item md='5' xs='12' justifyContent={'center'} alignContent={'center'} overflow={'hidden'}>
                                        <Typography style={{
                                            fontFamily: 'Exo 2',
                                            fontSize: '50px',
                                            fontWeight: '200',
                                            lineHeight: '54.5px',
                                            textAlign: 'center',    
                                            background: "-webkit-linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                                            webkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            }}>
                                                ndj24n1n8428j
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
          </Paper>
        </div>
        </ThemeProvider>
      </>
    );
  }
  
  
  export default DataSecurity;