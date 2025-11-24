import { Box, Typography } from '@mui/material';
import CarShowPics from '../components/CarShowPics';

export default function ProductRearView() {
    const LightPicPath = 'static/images/rearViewPic/'
    const LightPics = [
        `${LightPicPath}9c938629c0c24bf6ad122c840f163c2a.jpg`,
        `${LightPicPath}4482f87c40314a10a41e066aeed115c2.jpg`,
        `${LightPicPath}4900350cbe1e45c7876a6b49bfb66d04.jpg`
    ];
    const LightPicshow = [
        `${LightPicPath}b8cb048d713b4b328e75cae397072901.jpg`
    ];
    return (
        <Box sx={{marginTop: '-20px'}}>
            <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
                 Rear View System
            </Typography>
            
            {/* 图片展示组件 */}
            {/* 建议样式优化：
                - 可使用 Card + 滑动轮播效果
                - 图片下方显示轮胎品牌和尺寸
                - 鼠标 hover 或移动端滑动时有淡入淡出动画
                - 可增加缩略图导航条 */}
            <CarShowPics 
            tireId={null}   
            defaultImages={LightPics}
            />
            <Typography variant="h5" align="center" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                GoodView T88 Streaming Media Rear View System
            </Typography>
            <Typography component="ul" sx={{ color: 'text.secondary', maxWidth: 600, margin: '0 auto', textAlign: 'left' }}>
                <li>Dual 4K front and rear camera recording</li>
                <li>12-inch touchscreen display with intuitive controls</li>
                <li>Real-time streaming rearview to eliminate blind spots</li>
                <li>Advanced driver assistance (ADAS) features</li>
                <li>Built-in Wi-Fi and GPS for remote monitoring</li>
                <li>Night vision using WDR technology</li>
                <li>Loop recording with onboard storage</li>
            </Typography>

            
            <img src={LightPicshow[0]} alt="LightPic1" style={{ 
                width: '70%', 
                marginTop: '20px',     
                display: 'block',       // 让图片变成块级元素
                marginLeft: 'auto',     // 左右自动边距实现居中
                marginRight: 'auto' }} />
           
        </Box>
    )   
}