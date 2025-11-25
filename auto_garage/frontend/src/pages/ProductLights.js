/**
 * FutureAutoGarage - Products - ProductLights Component
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description:
 * - Introduce the product page for lights
 * - Render the CarShowPics image component
 */
import { Box, Typography, Zoom } from '@mui/material';
import CarShowPics from '../components/CarShowPics';

export default function ProductLights() {
    const LightPicPath = 'static/images/lightPic/'
    const LightPics = [
        `${LightPicPath}1d3bb6c043844c739d934af84515bd04.jpg`,
        `${LightPicPath}2393176217ff4bc190c3f37a22cbe7d9.jpg`,
        `${LightPicPath}b2b3f5352e124155b6b532c0dc8fc0d5.jpg`,
        `${LightPicPath}b2ac7280c2e3439ca37cacbc96982ca3.jpg`,
        `${LightPicPath}68bb7873abf446c387cb5bc908a74b5f.jpg`,        
        `${LightPicPath}50fd3055515547d19ba7bbed59034e9b.jpg`,
        `${LightPicPath}facdab6882a7464a98369afba81fc744.jpg`,
    ];
   
    const LightPicshow = [
        `${LightPicPath}c2bcda276f1447428d297b2b21fe15d9.jpg`,
    ];

    const LightPicDetail = [
        `${LightPicPath}c603d52d772e463e862a98ef9760f24d.jpg`,
        `${LightPicPath}f53d5eb1ce2742bf9481a39bb0376ec9.jpg`,
        `${LightPicPath}21669a1768b541dfbb88d38a346db478.jpg`,
        `${LightPicPath}2340bb0bf57e43f594f24a507856b453.jpg`,
        `${LightPicPath}733e6e31766046719d8e67c593c9b438.jpg`,
        `${LightPicPath}13a598ad37cb47ceb664f2edc896658f.jpg`,
        `${LightPicPath}8b44e252513d4cabbd6317d89914c346.jpg`,
        `${LightPicPath}6d9823d9807f460595f443cc42d9faf8.jpg`,
        `${LightPicPath}5fffd2640a304d209af4db66c37eda15.jpg`,
        `${LightPicPath}0ff821d7f2d4430dbdc5e170860a0496.jpg`
    ];

    return (
        <Box sx={{ marginTop: '-20px'}}>
            <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
                 Led Car Headlights
            </Typography>
            
            {/* Image display component 图片展示组件 */}
            <CarShowPics 
            tireId={null}   
            defaultImages={LightPics}
            />
            <Typography variant="h5" align="center" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
               MDS F100 H11 LED CAR HEADLIGHTS
            </Typography>
            <Typography component="ul" sx={{ color: 'text.secondary', maxWidth: 600, margin: 'auto', textAlign: 'left',paddingLeft: '250px'}}>
                <li>High brightness LED with H11 compatibility</li>
                <li>Long-lasting and energy-efficient</li>
                <li>Advanced cooling system for durability</li>
                <li>Clear white light for better visibility</li>
                <li>Waterproof and dustproof (IP68)</li>
                <li>Easy plug-and-play installation</li>
                <li>Enhances night driving safety and comfort</li>
            </Typography>


            <img src={LightPicshow[0]} alt="LightPic1" style={{ 
                width: '70%', 
                marginTop: '20px',     
                display: 'block',       // Make the image a block-level element  让图片变成块级元素
                marginLeft: 'auto',     // Auto margin on the left and right     左右自动边距实现居中
                marginRight: 'auto' }} />

            <Typography variant="h5" align="center" sx={{mt: 5, mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                Product Details
            </Typography>
            {/* Image display component 图片展示组件 */}
            <CarShowPics 
            tireId={null}   
            defaultImages={LightPicDetail}
            />
        
        </Box>
    )   
}