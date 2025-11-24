/**
 * FutureAutoGarage - GotoBox Component - 跳转按钮
 * 
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * 
 * 包含跳转按钮，用于导航到其他页面
 */
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function GotoBox() {
    return (
        <Box sx={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
            <Grid container spacing={0} justifyContent="center" sx={{ maxWidth: '900px' }}>
                {/* 第一行 */}
                {/* 坐标 (1,1) - 左上角 检查后：正确*/}
                <Grid sx={{ flexBasis: '33.33%', maxWidth: '33.33%' }}>
                    <Box sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <img 
                            src="/static/images/car1-1.png" 
                            alt="Car 1-1" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </Box>
                </Grid>
                
                {/* 坐标 (1,2) - 上中 检查后：正确*/}
                <Grid sx={{ flexBasis: '33.33%', maxWidth: '33.33%' }}>
                    <Box sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: '600', mb: 2 }}>
                            WINTER TIRES
                        </Typography>
                        <Button 
                            variant="outlined" 
                            component={Link} 
                            to="/winter-tires"
                            sx={{ 
                                borderColor: '#e74c3c', 
                                color: '#e74c3c',
                                fontWeight: '700',
                                borderRadius: '25px',
                                px: 4,
                                py: 1,
                                borderWidth: '2px',
                                '&:hover': { 
                                    backgroundColor: '#e74c3c',
                                    color: 'white',
                                    borderColor: '#e74c3c'
                                }
                            }}
                        >
                            EXPLORE
                        </Button>
                    </Box>
                </Grid>
                
                {/* 坐标 (1,3) - 右上角 检查后：正确*/}
                <Grid sx={{ flexBasis: '33.33%', maxWidth: '33.33%' }}>
                    <Box sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <img 
                            src="/static/images/car1-3.png" 
                            alt="Car 1-3" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </Box>
                </Grid>
                
                {/* 第二行 */}
                {/* 坐标 (2,1) - 左下角 */}
                <Grid sx={{ flexBasis: '33.33%', maxWidth: '33.33%' }}>
                    <Box sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: '600', mb: 2 }}>
                            ALL SEASON TIRES
                        </Typography>
                        <Button 
                            variant="contained" 
                            component={Link} 
                            to="/all-season-tires"
                            sx={{ 
                                background: 'linear-gradient(45deg, #27ae60, #2ecc71)', 
                                color: 'white',
                                fontWeight: '700',
                                borderRadius: '30px',
                                px: 4,
                                py: 1.2,
                                boxShadow: '0 4px 15px rgba(46, 204, 113, 0.3)',
                                '&:hover': { 
                                    background: 'linear-gradient(45deg, #229954, #27ae60)',
                                    boxShadow: '0 6px 20px rgba(46, 204, 113, 0.4)'
                                }
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Grid>
                {/* 坐标 (2,2) - 下中 */}
                <Grid sx={{ flexBasis: '33.33%', maxWidth: '33.33%' }}>
                    <Box sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <img 
                            src="/static/images/car2-2.png" 
                            alt="Car 2-2" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </Box>
                </Grid>
                
                {/* 坐标 (2,3) - 右下角 */}
                <Grid sx={{ flexBasis: '33.33%', maxWidth: '33.33%' }}>
                    <Box sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: '600', mb: 2 }}>
                            SERVICES
                        </Typography>
                        <Button 
                            variant="contained" 
                            component={Link} 
                            to="/auto-repairs"
                            sx={{ 
                                background: 'linear-gradient(45deg, #f39c12, #e67e22)', 
                                color: 'white',
                                fontWeight: '700',
                                borderRadius: '8px',
                                px: 4,
                                py: 1.2,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)',
                                '&:hover': { 
                                    background: 'linear-gradient(45deg, #e67e22, #d35400)',
                                    boxShadow: '0 6px 20px rgba(243, 156, 18, 0.4)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            LEARN  MORE
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}