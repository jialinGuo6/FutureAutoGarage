/**
 * WinterTires Component - 冬季轮胎页面
 *
 * 功能：
 * - 维护当前选中轮胎 ID
 * - 渲染 CarShowPics 图片组件
 * - 渲染通用 TireCategoryPage 表格组件
 * - 通过回调 onSelectTire 传递选中 ID 给子组件
 */

import { useState } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import CarShowPics from '../components/CarShowPics';
import TireCategoryPage from '../components/TireCategoryPage';

export default function WinterTires() {
  // 当前选中的轮胎 ID（用于图片展示和表格高亮）
  const [selectedTireId, setSelectedTireId] = useState(null);

  return (
    <Box sx={{ marginTop: '-20px'}}>
            {/* 页面标题 */}
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
        Winter Tires
      </Typography>
            {/* 页面介绍段落 - Hero Text */}
      <Typography
        variant="body1"
        sx={{ mb: 3, textAlign: 'center', color: '#34495e', fontSize: '1.1rem' }}
      >
        冬季轮胎专为低温和冰雪路面设计，提供卓越的抓地力和制动性能，
        确保您在寒冷天气中行车安全。选择合适的轮胎，让冬季驾驶更安心。
      </Typography>

      {/* 产品特点展示 - 可快速吸引用户注意 */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid>
            <List dense>
              <ListItem>
                <ListItemText primary="❄ 抓地力增强：即使冰雪路面也能稳健驾驶" />
              </ListItem>
              <ListItem>
                <ListItemText primary="🛡 耐磨性能优异：延长轮胎寿命" />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔇 噪音低，舒适度高" />
              </ListItem>
              <ListItem>
                <ListItemText primary="🌱 节能环保设计，减少燃油消耗" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* 图片展示组件 */}
      {/* 建议样式优化：
          - 可使用 Card + 滑动轮播效果
          - 图片下方显示轮胎品牌和尺寸
          - 鼠标 hover 或移动端滑动时有淡入淡出动画
          - 可增加缩略图导航条 */}
      <CarShowPics 
        tireId={selectedTireId}   
        defaultImages={['/media/winter_tire0.png', '/media/winter_tire1.png']}
      />
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 3,
          mt: 1,
        }}
      >
        Explore our winter tires. Click a model below to see details and photos.
      </Typography>

      {/* 通用轮胎表格组件 */}
      <TireCategoryPage
        api_interface="/api/tires/winter/"       // 后端接口地址
        selectedTireId={selectedTireId}         // 传入当前选中项（用于表格高亮）
        onSelectTire={(id) => setSelectedTireId(id)} // 点击行更新选中 ID
      />
    </Box>
  );
}
