/**
 * FutureAutoGarage - ContactLocation Component - 联系我们
 * Author: Jialin Guo
 * Created: 2025-11-03
* Description: ContactLocation Page for Future Auto Garage
 * Structure:    
 * 1. Information 地址，联系方式，和工作时间
 */

import { Typography, Container, Box, Link} from '@mui/material';

export default function ContactLocation() {
    return (
        <Container maxWidth="md">
            <Box sx={{marginTop: '-20px'}}>

                <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
                    Contact and Location
                </Typography>
                
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', p: 3, borderRadius: 2, mb: 3, border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>📞</span>
                        <strong>Phone:</strong> <span style={{ marginLeft: '8px', color: '#1976d2' }}>(506) 288-0999</span>
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>📧</span>
                        <strong>Email:</strong> <span style={{ marginLeft: '8px', color: '#1976d2' }}>napasj@outlook.com</span>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>💬</span>
                        <strong>Facebook:</strong>  <span style={{ marginLeft: '8px', color: '#1976d2' }}><Link href="https://www.facebook.com/NAPASJ/" target="_blank">Leave Message For Us</Link></span>
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>🕰️</span>
                        <strong>Business Hours:</strong>
                    </Typography>
                    <Box sx={{ ml: 4, mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 0.3, color: 'text.secondary' }}>
                            Monday - Saturday: 12:00 A.M. – 5:00 P.M.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'error.main', fontWeight: 'medium' }}>
                            Sunday: Closed
                        </Typography>
                    </Box>
                    
                    <Typography variant="body1" component="div" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ marginRight: '8px', marginTop: '2px' }}>📍</span>
                        <Box>
                            <strong>Address:</strong>
                            <Typography component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                                529 Rothesay Ave, Saint John, NB E2J 2B7
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ mb: 3, mt: 2 }}>
                    <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ mt: 10, mb: 3}}>
                        Find Us Here
                    </Typography>
             

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.8533093024175!2d-66.03100452362492!3d45.3113887436216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca7b39485bfee27%3A0xa43bb841eff1746!2sFuture%20Auto%20Garage!5e0!3m2!1sen!2sca!4v1762231111567!5m2!1sen!2sca"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Future Auto Garage Location"
                    ></iframe>
                </Box>
            </Box>
        </Container>
    );
}