/**
 * FutureAutoGarage - AboutUs Component - 关于我们
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * 
 * 展示关于我们的信息
 * 
 * 页面结构:    
 * 1. About Us 内容介绍
 * 2. Information 地址，联系方式，和工作时间
 * 3. Facilities & Services 服务设施和服务
 */

import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function AboutUs() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="md">
            <Box sx={{ marginTop: '-20px' }}>
                <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
                    About Us
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                    Future Auto Garage is a locally trusted auto repair and service center located in Saint John, New Brunswick, Canada.
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 2, color: 'text.secondary' }}>
                    We specialize in a wide range of automotive services, including tire installation, oil changes, brake inspections, and other routine maintenance. Additionally, we offer expert upgrades for vehicle lighting and backup camera systems, featuring tire brands such as Linglong.
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
                    Customers can conveniently schedule repairs or order parts by phone, in person, or by messaging us on our Facebook page via Messenger.
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
                    Our commitment is to provide honest, professional, and customer-focused service to ensure your vehicle stays safely on the road.
                </Typography>
                
                {/* 这里插入图片auto_garage/frontend/static/images/AboutUsPic.jpg */}
                <img 
                src="/static/images/AboutUsPic.jpg"
                alt="About Us" 
                style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: '200px', marginBottom: '24px' }} 
                />

                <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ mt: 10, mb: 3}}>
                    Facilities & Services
                </Typography>
                
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper elevation={1} sx={{ p: 1, height: '100%' }}>
                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.main' }}>
                                🚗 Accessibility Services
                            </Typography>
                            <Typography variant="body2">
                                • Accessible entrance<br/>
                                • Accessible parking
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper elevation={1} sx={{ p: 1, height: '100%' }}>
                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.main' }}>
                                🔧 Facility
                            </Typography>
                            <Typography variant="body2">
                                • Technical repair<br/>
                                • Tire sales<br/>
                                • Bathroom
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper elevation={1} sx={{ p: 1, height: '100%' }}>
                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.main' }}>
                                📅 Planning
                            </Typography>
                            <Typography variant="body2">
                                • Appointment recommended
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper elevation={1} sx={{ p: 1, height: '100%' }}>
                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.main' }}>
                                💳 Payment
                            </Typography>
                            <Typography variant="body2">
                                • Debit card<br/>
                                • Credit card<br/>
                                • NFC mobile payment
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                                {/* 新增页尾按钮区域 */}
                <Box sx={{ textAlign: 'center', mt: 8, mb: 6 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: 'text.primary' }}>
                        Have questions or need an appointment?
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/contact-location')}
                        sx={{
                            px: 4,
                            py: 1,
                            background: 'linear-gradient(45deg, #275faeff, #2e7dccff)', 
                            color: 'white',
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            boxShadow: '0px 3px 6px rgba(0,0,0,0.15)',
                            transition: '0.3s',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #229954, #27ae60)',
                                boxShadow: '0 6px 20px rgba(46, 204, 113, 0.4)',
                                transform: 'scale(1.03)',
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}