/**
 * FutureAutoGarage - AllSeasonTires Component - 通用季节轮胎
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description:
 * - Maintain the currently selected tire ID
 * - Render the CarShowPics image component
 * - Render the TireCategoryPage table component
 * - Pass the selected ID to the child component via the onSelectTire callback
 */
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CarShowPics from '../components/CarShowPics';
import TireCategoryPage from '../components/TireCategoryPage';

export default function AllSeasonTires() {
  const [selectedTireId, setSelectedTireId] = useState(null); // 当前选中的轮胎 ID

  return (
    <Box sx={{ marginTop: '-20px' }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
        All-Season Tires
      </Typography>
      <CarShowPics 
        tireId={selectedTireId}   
        defaultImages={['/media/all_season_tire0.png']}
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
        Browse our all-season tires below. Click a tire to view its details and images.
      </Typography>

      <TireCategoryPage
        api_interface="/api/tires/all-season/"        // backend interface  后端接口地址
        selectedTireId={selectedTireId}               // send the currently selected item(for table highlighting) 传入当前选中项（用于表格高亮）
        onSelectTire={(id) => setSelectedTireId(id)}  // update selected ID when a row is clicked 点击行更新选中 ID
      />
    </Box>
  );
}

