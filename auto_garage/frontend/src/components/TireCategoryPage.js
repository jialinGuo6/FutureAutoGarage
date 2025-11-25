/**
 * TireCategoryPage Component - 通用轮胎展示组件
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description:
 * - Accepts API interface address (api_interface)
 * - Asynchronously fetch tires
 * - Provides search filtering functionality
 * - Calls parent component callback (onSelectTire) on table row click
 * - Supports highlighting the currently selected tire
 *  * 描述：
 * - 接收 API 接口地址 (api_interface)
 * - 异步请求轮胎数据
 * - 提供搜索过滤功能
 * - 点击表格行后调用父组件回调 (onSelectTire)
 * - 支持表格行高亮显示当前选中轮胎
 * 
 *  * Used in Page:
 * - AllSeasonTires (/pages/AllSeasonTires.js)
 * - WinterTires (/pages/WinterTires.js)
 */

import { useState, useEffect, useMemo } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, TextField
} from '@mui/material';
import axios from '../utils/axiosConfig';
import { useLoading } from '../contexts/LoadingContext';

export default function TireCategoryPage({ api_interface, selectedTireId, onSelectTire }) {
  const [tires, setTires] = useState([]);             // The array of all tires    所有轮胎数据
  const [searchTerm, setSearchTerm] = useState('');   // Search input              搜索输入
  const { showLoading, hideLoading } = useLoading();  // Global loading state全局   loading 状态
  /**
  * Async function to fetch tires
  */
  const fetchTires = async () => {
    showLoading();
    try {
      const response = await axios.get(api_interface);
      setTires(response.data || []);
    } catch (error) {
      console.error(`Error fetching tires from ${api_interface}:`, error);
      setTires([]);
    } finally {
      hideLoading();
    }
  };
  /**
   * Fetch the tires on component mount, and whenever api_interface changes then re-fetch
   */
  useEffect(() => {
    fetchTires();
  }, [api_interface]);
  /**
   * Search filtering logic  搜索过滤逻辑
   * Use useMemo to avoid generating a new array every render  使用 useMemo 避免每次 render 都重新生成新数组
   */
  const filteredTires = useMemo(() => {
    return tires.filter((tire) =>
      tire.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tire.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tire.tread_pattern.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tires, searchTerm]);
  /**
   * Handle table row click                   表格行点击事件
   * - Set local highlight                    - 设置本地选中高亮     
   * - Notify parent to update selected ID    - 通知父组件更新选中 ID 
   */
  const handleRowClick = (tire) => {
    onSelectTire(tire.id);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>

      {/* Search Box 搜索框*/}
      <Box sx={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)',
        borderRadius: '12px', p: 3, mb: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by size, brand, or tread pattern..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#3498db' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#2980b9' },
            }
          }}
        />
      </Box>

      {/* Table 轮胎表格*/}
      {filteredTires.length === 0 ? (
        <Box sx={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)',
          borderRadius: '12px', p: 5, textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <Typography variant="h6" sx={{ color: '#7f8c8d', fontWeight: 500 }}>
            {searchTerm ? 'No tires found matching your search' : 'No tires available'}
          </Typography>
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 600, overflow: 'auto', borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)'
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{
                '& .MuiTableCell-head': {
                  backgroundColor: '#34495e',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }
              }}>
                <TableCell>Rim Size</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>L/S</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Tread Pattern</TableCell>
                <TableCell>Sale Price</TableCell>
                <TableCell>Set of Tire</TableCell>
                <TableCell>Environmental Fee</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Install Included Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredTires.map((tire) => (
                <TableRow
                  key={tire.id}
                  onClick={() => handleRowClick(tire)}  // Click the row then call handleRowClick
                  sx={{
                    backgroundColor:
                      selectedTireId === tire.id
                        ? 'rgba(21, 214, 178, 0.65) !important'  // Current selected row highlighted
                        : 'transparent',
                    '&:hover': { backgroundColor: 'rgba(52,152,219,0.1)' },
                    cursor: 'pointer'
                  }}
                >
                  <TableCell>{tire.rim_size}</TableCell>
                  <TableCell>{tire.size}</TableCell>
                  <TableCell>{tire.load_speed}</TableCell>
                  <TableCell>{tire.brand}</TableCell>
                  <TableCell>{tire.tread_pattern}</TableCell>
                  <TableCell>${tire.sale_price}</TableCell>
                  <TableCell>{tire.set_of_tire}</TableCell>
                  <TableCell>${tire.environmental_fee}</TableCell>
                  <TableCell>${tire.total_price}</TableCell>
                  <TableCell>${tire.install_included}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
