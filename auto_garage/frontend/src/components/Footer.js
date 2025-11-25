/**
 * FutureAutoGarage - Footer Component
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description: The Information at the bottom of the website, including social media links, about us, and copyright information
 * 网站底部信息, 包含社交媒体链接、关于我们和版权信息
 * Used in Page: App.js(/src/App.js)
 */
import { Box, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
    return (
        <Box component="footer" className="footer-box" sx={{ mt: 6 }}>
            {/* Link Area */}
            <Typography variant="body2" align="center" sx={{ mb: 0.5, fontSize: '16px', fontWeight: 'bold' }}>
                <Link href="https://www.facebook.com/NAPASJ/" target="_blank" sx={{ color: 'inherit', mr: 2, textDecoration: 'none' }}>Facebook</Link>
                <Link component={RouterLink} to="/contact-location" sx={{ color: 'inherit', mr: 2, textDecoration: 'none' }}>Contacet us</Link>
                <Link href="https://www.blackcircles.ca/en/garages/ca/new-brunswick/saint-john/196041-future-auto-garage" target="_blank" sx={{ color: 'inherit', textDecoration: 'none' }}>Blackcircles.ca</Link>      
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 0.5 }}>
                 © 2025 Future Auto Garage. All rights reserved.
            </Typography>
        </Box>
    );
}