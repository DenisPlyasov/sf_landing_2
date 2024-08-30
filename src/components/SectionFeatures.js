import * as React from 'react';
import { Typography, Box, AppBar, Container, Toolbar, IconButton, Link, Button, Grid, Paper, createTheme, ThemeProvider} from '@mui/material';

function SectionFeatures() {
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
            <Box sx={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                paddingBottom:'50px'
            }}>
                <Typography style={{
                    fontFamily: 'Exo 2',
                    fontSize: '40px',
                    fontWeight: '500',
                    lineHeight: '54.5px',
                    textAlign: 'center',                    
                }}>
                    При разработке мы изучаем и учитываем все особенности раздела
                </Typography>
            </Box>
            <Box sx={{
              width:'100%',
              display:'flex',
              justifyContent:'center'
            }}>
              <Box sx={{
                width:'90%',
                display:'flex',
                flexDirection:{md:'row', xs:'column'},
                justifyContent:{md:'space-around', xs:'space-between'}
              }}>
                    <Box sx={{
                      width:{md:'400px', xs:'90%'},
                      height:{md:'500px', xs:'400px'},
                      display:'flex',
                      flexDirection:'column',
                      borderRadius:'20px',
                      backgroundColor:'#FFFFFF',
                      boxShadow:'0px 0px 8.4px 0px #00000033',
                      padding:'20px',
                      marginBottom:'20px'
                    }}>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'center',
                        paddingBottom:{md:'20px', xs:'5px'}
                      }}>
                        Финансовые отчеты
                      </Typography>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '300',
                        lineHeight: '27.25px',
                        textAlign: 'center',
                      }}>
                        При разработке раздела были приглашены селлеры с разных маркетплейсов. Вместе мы разработали унифицированный и удобный отчет для всех маркетплейсов. 
                      </Typography>
                      <Box sx={{
                        width:'100%',
                        height:'-webkit-fill-available',
                        display:'flex',
                        justifyContent:'center',
                        alignContent:'flex-end',
                        flexWrap:'wrap'
                      }}>
                        <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M130.199 50.1759L96.0741 16.0509C95.621 15.5984 95.0832 15.2395 94.4914 14.9948C93.8996 14.7502 93.2654 14.6245 92.625 14.625H34.125C31.5391 14.625 29.0592 15.6522 27.2307 17.4807C25.4022 19.3092 24.375 21.7891 24.375 24.375V131.625C24.375 134.211 25.4022 136.691 27.2307 138.519C29.0592 140.348 31.5391 141.375 34.125 141.375H121.875C124.461 141.375 126.941 140.348 128.769 138.519C130.598 136.691 131.625 134.211 131.625 131.625V53.625C131.626 52.9846 131.5 52.3504 131.255 51.7586C131.01 51.1668 130.652 50.629 130.199 50.1759ZM97.5 31.267L114.983 48.75H97.5V31.267ZM121.875 131.625H34.125V24.375H87.75V53.625C87.75 54.9179 88.2636 56.1579 89.1778 57.0721C90.0921 57.9864 91.3321 58.5 92.625 58.5H121.875V131.625Z" fill="#F8F8F8"/>
                        </svg>
                      </Box>
                    </Box>
  

                    <Box sx={{
                      width:{md:'400px', xs:'90%'},
                      height:{md:'500px', xs:'400px'},
                      display:'flex',
                      flexDirection:'column',
                      borderRadius:'20px',
                      backgroundColor:'#FFFFFF',
                      boxShadow:'0px 0px 8.4px 0px #00000033',
                      padding:'20px',
                      marginBottom:'20px'
                    }}>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'center',
                        paddingBottom:'20px'
                      }}>
                        Бухгалтерия
                      </Typography>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '300',
                        lineHeight: '27.25px',
                        textAlign: 'center',
                      }}>
                        В процессе разработки целая команда профессиональных бухгалтеров проработала каждый инструмент внутри этого раздела сайта.
                      </Typography>
                      <Box sx={{
                        width:'100%',
                        height:'-webkit-fill-available',
                        display:'flex',
                        justifyContent:'center',
                        alignContent:'flex-end',
                        flexWrap:'wrap'
                      }}>
                        <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M118.9 2.8999H26.1C19.72 2.8999 14.5 8.1199 14.5 14.4999V130.5C14.5 136.88 19.72 142.1 26.1 142.1H118.9C125.28 142.1 130.5 136.88 130.5 130.5V14.4999C130.5 8.1199 125.28 2.8999 118.9 2.8999ZM49.3 118.9C49.3 122.09 46.69 124.7 43.5 124.7H31.9C28.71 124.7 26.1 122.09 26.1 118.9V116C26.1 112.81 28.71 110.2 31.9 110.2H43.5C46.69 110.2 49.3 112.81 49.3 116V118.9ZM49.3 95.6999C49.3 98.8899 46.69 101.5 43.5 101.5H31.9C28.71 101.5 26.1 98.8899 26.1 95.6999V92.7999C26.1 89.6099 28.71 86.9999 31.9 86.9999H43.5C46.69 86.9999 49.3 89.6099 49.3 92.7999V95.6999ZM49.3 72.4999C49.3 75.6899 46.69 78.2999 43.5 78.2999H31.9C28.71 78.2999 26.1 75.6899 26.1 72.4999V69.5999C26.1 66.4099 28.71 63.7999 31.9 63.7999H43.5C46.69 63.7999 49.3 66.4099 49.3 69.5999V72.4999ZM84.1 118.9C84.1 122.09 81.49 124.7 78.3 124.7H66.7C63.51 124.7 60.9 122.09 60.9 118.9V116C60.9 112.81 63.51 110.2 66.7 110.2H78.3C81.49 110.2 84.1 112.81 84.1 116V118.9ZM84.1 95.6999C84.1 98.8899 81.49 101.5 78.3 101.5H66.7C63.51 101.5 60.9 98.8899 60.9 95.6999V92.7999C60.9 89.6099 63.51 86.9999 66.7 86.9999H78.3C81.49 86.9999 84.1 89.6099 84.1 92.7999V95.6999ZM84.1 72.4999C84.1 75.6899 81.49 78.2999 78.3 78.2999H66.7C63.51 78.2999 60.9 75.6899 60.9 72.4999V69.5999C60.9 66.4099 63.51 63.7999 66.7 63.7999H78.3C81.49 63.7999 84.1 66.4099 84.1 69.5999V72.4999ZM118.9 118.9C118.9 122.09 116.29 124.7 113.1 124.7H101.5C98.31 124.7 95.7 122.09 95.7 118.9V116C95.7 112.81 98.31 110.2 101.5 110.2H113.1C116.29 110.2 118.9 112.81 118.9 116V118.9ZM118.9 95.6999C118.9 98.8899 116.29 101.5 113.1 101.5H101.5C98.31 101.5 95.7 98.8899 95.7 95.6999V92.7999C95.7 89.6099 98.31 86.9999 101.5 86.9999H113.1C116.29 86.9999 118.9 89.6099 118.9 92.7999V95.6999ZM118.9 72.4999C118.9 75.6899 116.29 78.2999 113.1 78.2999H101.5C98.31 78.2999 95.7 75.6899 95.7 72.4999V69.5999C95.7 66.4099 98.31 63.7999 101.5 63.7999H113.1C116.29 63.7999 118.9 66.4099 118.9 69.5999V72.4999ZM118.9 46.3999C118.9 49.5899 116.29 52.1999 113.1 52.1999H31.9C28.71 52.1999 26.1 49.5899 26.1 46.3999V23.1999C26.1 20.0099 28.71 17.3999 31.9 17.3999H113.1C116.29 17.3999 118.9 20.0099 118.9 23.1999V46.3999Z" fill="#F8F8F8"/>
                        </svg>
                      </Box>
                    </Box>

                    <Box sx={{
                      width:{md:'400px', xs:'90%'},
                      height:{md:'500px', xs:'400px'},
                      display:'flex',
                      flexDirection:'column',
                      borderRadius:'20px',
                      backgroundColor:'#FFFFFF',
                      boxShadow:'0px 0px 8.4px 0px #00000033',
                      padding:'20px',
                      marginBottom:'20px'
                    }}>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'center',
                        paddingBottom:'20px'
                      }}>
                        Складской учет
                      </Typography>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontSize: '25px',
                        fontWeight: '300',
                        lineHeight: '27.25px',
                        textAlign: 'center',
                      }}>
                        Мы пригласили владельцев фуллфилментов, и вместе продумывали как и из чего должен состоять данный раздел сайта.
                      </Typography>
                      <Box sx={{
                        width:'100%',
                        height:'-webkit-fill-available',
                        display:'flex',
                        justifyContent:'center',
                        alignContent:'flex-end',
                        flexWrap:'wrap',
                        paddingTop:'10px'
                      }}>
                        <svg width="128" height="137" viewBox="0 0 128 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_65_5)">
                        <path d="M96 51.375V0H32V51.375H0V111.312H128V51.375H96ZM56 102.75H8V59.9375H24V68.5H40V59.9375H56V102.75ZM40 51.375V8.5625H56V17.125H72V8.5625H88V51.375H40ZM120 102.75H72V59.9375H88V68.5H104V59.9375H120V102.75ZM0 137H24V128.438H104V137H128V119.875H0V137Z" fill="#F8F8F8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_65_5">
                        <rect width="128" height="137" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                      </Box>
                    </Box>
              </Box>
            </Box>
          </Paper>    
        </div>
        </ThemeProvider>
      </>
    );
  }
  
  
  export default SectionFeatures;