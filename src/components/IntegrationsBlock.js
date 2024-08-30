import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function IntergationsBlock() {
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
          marginTop:'80px',
          width:'100%',
          height:'auto'
        }}>
          <Paper style={{
              widh:'100%',
              height:'auto',
              borderRadius:'0px',
              backgroundColor:'#250F63',
              boxShadow:'none',
              paddingTop:'80px',
              paddingBottom:'80px'
          }}>
            <Box sx={{
              width:'100%'
            }}>
              <Grid container flexDirection='row' spacing={6}>
                <Grid item xs='12' md='7' lg='7'>
                    <Grid container flexDirection={'row'}>
                      <Grid item md='2' xs='12' alignContent={'center'}>
                        <Box sx={{
                          width:'100%',
                          display:'flex',
                          justifyContent:'center',
                        }}>
                          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.1563 12.4687C32.1563 12.9879 32.0023 13.4954 31.7139 13.9271C31.4254 14.3587 31.0155 14.6952 30.5358 14.8939C30.0561 15.0925 29.5283 15.1445 29.0191 15.0432C28.5099 14.942 28.0422 14.692 27.6751 14.3248C27.308 13.9577 27.058 13.49 26.9567 12.9808C26.8554 12.4716 26.9074 11.9438 27.1061 11.4641C27.3048 10.9845 27.6412 10.5745 28.0729 10.2861C28.5046 9.99764 29.0121 9.84369 29.5313 9.84369C30.2275 9.84369 30.8951 10.1202 31.3874 10.6125C31.8797 11.1048 32.1563 11.7725 32.1563 12.4687ZM40.0313 16.1995C39.9025 19.7688 38.3979 23.1499 35.8324 25.6349C33.267 28.1199 29.8397 29.5161 26.2681 29.5312H26.25C24.9368 29.5333 23.63 29.3465 22.3699 28.9767L21.0804 30.2678C20.8974 30.4506 20.6802 30.5955 20.4412 30.6943C20.2022 30.7931 19.9461 30.8439 19.6875 30.8437H17.7188V32.8124C17.7188 33.3346 17.5113 33.8353 17.1421 34.2046C16.7729 34.5738 16.2722 34.7812 15.75 34.7812H13.7813V36.7499C13.7813 37.2721 13.5738 37.7728 13.2046 38.1421C12.8354 38.5113 12.3347 38.7187 11.8125 38.7187H6.56251C5.69227 38.7187 4.85767 38.373 4.24232 37.7576C3.62696 37.1423 3.28126 36.3077 3.28126 35.4374V30.7305C3.28009 30.2994 3.36447 29.8724 3.5295 29.4742C3.69453 29.076 3.93693 28.7145 4.24267 28.4106L13.0233 19.63C12.4672 17.7176 12.3321 15.7074 12.6275 13.7378C12.9229 11.7682 13.6417 9.88605 14.7343 8.22092C15.827 6.5558 17.2676 5.14729 18.9569 4.0924C20.6462 3.03751 22.5441 2.36129 24.5198 2.11034C26.4955 1.85938 28.5022 2.03963 30.4016 2.63869C32.301 3.23775 34.048 4.24138 35.5222 5.58045C36.9965 6.91952 38.163 8.56223 38.9414 10.3954C39.7198 12.2286 40.0916 14.2088 40.0313 16.1995ZM33.2112 8.78876C32.2614 7.83049 31.1233 7.07956 29.8687 6.58341C28.614 6.08726 27.2702 5.85666 25.9219 5.90618C20.6719 6.07025 16.4063 10.4819 16.4063 15.7319C16.4022 16.9782 16.6361 18.2138 17.0953 19.3724C17.2501 19.7341 17.293 20.1339 17.2184 20.5202C17.1439 20.9065 16.9553 21.2616 16.677 21.5397L7.21876 31.0077V34.7812H9.84376V32.8124C9.84376 32.2903 10.0512 31.7895 10.4204 31.4203C10.7896 31.0511 11.2904 30.8437 11.8125 30.8437H13.7813V28.8749C13.7813 28.3528 13.9887 27.852 14.3579 27.4828C14.7271 27.1136 15.2279 26.9062 15.75 26.9062H18.8672L20.4504 25.323C20.7286 25.0443 21.084 24.8555 21.4707 24.781C21.8573 24.7064 22.2574 24.7495 22.6193 24.9046C23.7747 25.363 25.007 25.5969 26.25 25.5937H26.2631C31.5131 25.5937 35.9215 21.3166 36.0888 16.0781C36.1383 14.7302 35.9082 13.3868 35.4129 12.1322C34.9176 10.8777 34.168 9.73933 33.2112 8.78876Z" fill="white"/>
                          </svg>
                        </Box>
                      </Grid>
                      <Grid item xs='12' md='10'>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '45px',
                          fontWeight: '700',
                          lineHeight: '54.5px',
                          textAlign: 'center',
                          color:'#FFFFFF'                    
                        }}>
                          Интеграции маркетплейсов по API
                        </Typography>
                      </Grid>
                    </Grid>
                </Grid>
                <Grid item xs='12' md='5' lg='5' overflow={'hidden'}>
                  <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-end',
                    alignContent:'flex-end',
                  }}>
                    <Typography style={{
                      fontFamily: 'Exo 2',
                      fontSize: '30px',
                      fontWeight: '700',
                      lineHeight: '32.7px',
                      textAlign: 'right',
                      color:'#5121D9'
                    }}>
                      01010101110100101001
                    </Typography>
                    <Typography style={{
                      fontFamily: 'Exo 2',
                      fontSize: '30px',
                      fontWeight: '700',
                      lineHeight: '32.7px',
                      textAlign: 'right',
                      color:'#5121D9'
                    }}>
                      10101100010010101110001
                    </Typography>
                    <Typography style={{
                      fontFamily: 'Exo 2',
                      fontSize: '30px',
                      fontWeight: '700',
                      lineHeight: '32.7px',
                      textAlign: 'right',
                      color:'#5121D9'
                    }}>
                      10101100010
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Container style={{
              marginTop:'80px'
            }}>
              <Grid container flexDirection='row' spacing={8}>
                <Grid item xs='12' md='6' lg='6'>
                  <Grid container flexDirection='row'>
                    <Grid item xs='12'>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        width:'100%',
                        height:{lg:'42vh', xs:'auto'}
                      }}>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '30px',
                          fontWeight: '700',
                          lineHeight: '32.7px',
                          textAlign: 'center',
                          color:'#FFFFFF'                          
                        }}>
                          100% безопасная система синхронизации
                        </Typography>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          maxWidth:'530px',
                          fontSize: '25px',
                          fontWeight: '400',
                          lineHeight: '27.25px',
                          textAlign: 'center',
                          color:'#FFFFFF',
                          marginTop:'15px'
                        }}>
                          Для работы базового тарифа нашей системы, требуются API ключи только с функционалом “Статистика”. Система только получает и анализирует информацию, после хранит данные в зашифрованном виде
                        </Typography>
                        <Box sx={{
                          height:'-webkit-fill-available',
                          display:'flex',
                          alignContent:'flex-end',
                          justifyContent:'center',
                          flexWrap:'wrap'
                        }}> 
                          <Button href="#MonthGift" style={{
                            width: '350px',
                            height: '100px',
                            borderRadius: '23px',
                            backgroundColor:'#3300FF',
                            fontFamily: 'Exo 2',
                            fontSize: '30px',
                            fontWeight: '700',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            color:'#FFFFFF'
                          }}>
                            Демо версия
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs='12' md='6' lg='6'>
                  <Box sx={{
                    width:'100%',
                    height:'42vh',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <Typography style={{
                      fontFamily: 'Exo 2',
                      fontSize: '30px',
                      fontWeight: '700',
                      lineHeight: '32.7px',
                      textAlign: 'center',
                      color:'#FFFFFF',
                      maxWidth:'400px'                          
                    }}>
                      Синхронизация с реальном времени
                    </Typography>
                    <Typography style={{
                          maxWidth:'407px',
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '400',
                          lineHeight: '27.25px',
                          textAlign: 'center',
                          color:'#FFFFFF',
                          marginTop:'15px'
                        }}>
                      Система синхронизируется в реальном времени, все полученные и обработанные данные мы храним у себя, чтобы в будущем вы смогли ими воспользоваться
                    </Typography>
                    <Box sx={{
                      width:'100%',
                      height:'-webkit-fill-available',
                      display:'flex',
                      alignItems:'flex-end',
                      justifyContent:'center',
                      flexWrap:'wrap'
                    }}> 
                      <Button href="http://sellfin.ru/signin" target='_blank' style={{
                        width: '350px',
                        height: '100px',
                        borderRadius: '23px',
                        border: '4px solid #FFFFFF',
                        fontFamily: 'Exo 2',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        color:'#FFFFFF'
                      }}>
                        Регистрация
                      </Button>
                    </Box>
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
  
  
  export default IntergationsBlock;