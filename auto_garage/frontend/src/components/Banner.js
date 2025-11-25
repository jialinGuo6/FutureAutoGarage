/**
 * FutureAutoGarage - Bannder Component - 轮播
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description: Homepage Image Carousel 
 * Used in Page: Home Page(/pages/HomePage.js)
 */
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Banner() {
    const images = [
        '/static/images/banner/banner0.png',
        '/static/images/banner/banner1.png',
        '/static/images/banner/banner2.png', 
        '/static/images/banner/banner3.png',
        '/static/images/banner/banner4.png'
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    // useEffect will render the component when currentIndex change, so the banner will change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3sec change
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <Box sx={{ width: '100%', height: '450px', overflow: 'hidden', borderRadius: '8px', marginTop: '-127px' ,marginBottom: '24px'}}>
            <img 
                src={images[currentIndex]} 
                alt={`Banner ${currentIndex}`} 
                style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out'
                }} 
            />
        </Box>
    );
};
