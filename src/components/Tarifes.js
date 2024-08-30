import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function Tarifes() {
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
              backgroundColor:'#F5F5F5',
              boxShadow:'none',
              paddingTop:'80px',
              paddingBottom:'80px',
          }}>
            <Typography style={{
                fontFamily: 'Exo 2',
                fontSize: '50px',
                fontWeight: '700',
                lineHeight: '54.5px',
                textAlign: 'center', 
                paddingBottom:'30px'               
            }}>
                Тарифы
            </Typography>
            <Box sx={{
                width:'100%',
                display:'flex',
                flexDirection:{md:'row', xs:'column'},
                justifyContent:{md:'space-around', xs:'center'},
                alignContent:'center',
                flexWrap:'wrap'
            }}>
                <Box sx={{
                    width:{md:'600px', xs:'80%'},
                    height:{md:'90vh', xs:'auto'},
                    display:'flex',
                    flexDirection:'column',
                    borderRadius:'20px',
                    backgroundColor:'#FFFFFF',
                    boxShadow:'0px 0px 8.4px 0px #00000033',
                    padding:'20px',
                    marginBottom:'20px',
                }}>
                    <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '43.5px',
                        textAlign: 'center', 
                        paddingTop:'20px',
                        paddingBottom:'30px'               
                    }}>
                        Seller
                    </Typography>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Интеграция Wildberries и Ozon</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Оцифровка финансовых отчетов</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Складской учет</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Бухгалтерский учет</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Расчет Юнит-Экономики</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Комплекс CRM систем</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Отчет прибыли и убытков</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginLeft:'5px'                    
                        }}>Отчет по штрафам</Typography>
                    </Box>
                    <Box sx={{
                            width:'100%',
                            height:'-webkit-fill-available',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'flex-end',
                            alignContent:'center',
                            flexWrap:'wrap'
                        }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontSize: '25px',
                                fontWeight: '700',
                                lineHeight: '32.7px',
                                textAlign: 'center',
                                marginLeft:'5px'  ,   
                                color:'#6F6F6F'               
                            }}>2999 руб / мес</Typography>
                            <Button href="http://sellfin.ru/signin" style={{
                                width: '316px',
                                height: '72px',
                                gap: '0px',
                                borderRadius: '10px',
                                border: '3px 0px 0px 0px',
                                opacity: '0px',
                                border: '3px solid #1400FF',
                                fontFamily: 'Exo 2',
                                fontSize: '20px',
                                fontWeight: '500',
                                lineHeight: '32.7px',
                                textAlign: 'center',
                                color:'#000000'   
                            }}>Выбрать</Button>
                    </Box>
                </Box>
                <Box sx={{
                    width:{md:'600px', xs:'80%'},
                    height:{md:'90vh', xs:'auto'},
                    display:'flex',
                    flexDirection:'column',
                    borderRadius:'20px',
                    background:' linear-gradient(192.44deg, #000000 3.79%, #2F2F2F 90.97%)',
                    boxShadow:'0px 0px 8.4px 0px #00000033',
                    padding:'20px',
                    marginBottom:'20px'
                }}>
                   <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '43.5px',
                        textAlign: 'center', 
                        paddingTop:'20px',
                        paddingBottom:'30px',
                        background: "-webkit-linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                        webkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",              
                    }}>
                        Seller
                    </Typography>
                    <Box sx={{display:'flex', alignItems:'center', paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Интеграция Wildberries, Ozon, Yandex</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Оцифровка финансовых отчетов</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Складской учет</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Бухгалтерский учет</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Формирование отчетов для налоговой</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Расчет Юнит-Экономики</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Комплекс CRM систем</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Отчет прибыли и убытков</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Отчет по штрафам</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px' }}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Автобиддер ответов на отзывы</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', paddingBottom:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Автобиддер синхронизации цен на маркетплейсах</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center',paddingBottom:'10px' }}>
                        <svg width="17px" height="17px" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            marginLeft:'5px' ,
                            color:'#FFFFFF'
                          }}>Скрипт “Симуляция покупательского поведения” </Typography>
                    </Box>
                    <Box sx={{
                            width:'100%',
                            height:'-webkit-fill-available',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'flex-end',
                            alignContent:'center',
                            flexWrap:'wrap'
                        }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontSize: '25px',
                                fontWeight: '700',
                                lineHeight: '32.7px',
                                textAlign: 'center',
                                marginLeft:'5px'  ,   
                                color:'#FFFFFF'               
                            }}>7999 руб / мес</Typography>
                            <Button href="http://sellfin.ru/signin" style={{
                                width: '316px',
                                height: '72px',
                                gap: '0px',
                                borderRadius: '10px',
                                border: '3px 0px 0px 0px',
                                opacity: '0px',
                                border: '3px solid #FFFFFF',
                                fontFamily: 'Exo 2',
                                fontSize: '20px',
                                fontWeight: '500',
                                lineHeight: '32.7px',
                                textAlign: 'center',
                                color:'#FFFFFF'                                
                            }}>Выбрать</Button>
                    </Box>
                </Box>
            </Box>
          </Paper>    
        </div>
        </ThemeProvider>
      </>
    );
  }
  
  
  export default Tarifes;