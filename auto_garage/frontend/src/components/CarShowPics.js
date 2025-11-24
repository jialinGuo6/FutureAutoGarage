/**
 * CarShowPics Component - 轮胎图片展示
 *
 * 功能：
 * - 根据父组件传入的 tireId 请求图片
 * - 若 tireId 为空显示默认图片
 * - 提供左右轮播、缩略图导航和图片计数显示
 * - 样式优化，提升专业感和可读性
 */

import { useState, useEffect } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight, BrokenImage } from '@mui/icons-material';
import axios from '../utils/axiosConfig';
import { useLoading } from '../contexts/LoadingContext';

export default function CarShowPics({ tireId, defaultImages}) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState(null);
  const { showLoading, hideLoading } = useLoading();

  /**
   * 当 tireId 变化时加载图片
   * - tireId 为空显示默认图片
   * - tireId 有值则请求接口获取对应轮胎图片
   */
  useEffect(() => {
    if (!tireId) {
      // 使用默认图片
      setImages(defaultImages.map((src, i) => ({
        id: i,
        image: src,
        alt_text: `Promotional Image ${i + 1}`
      })));
      setCurrentImageIndex(0);
      return;
    }

    const fetchImages = async () => {
      showLoading();
      setError(null);
      try {
        const response = await axios.get(`/api/tires/${tireId}/images/`);
        const imgs = response.data.length ? response.data : defaultImages.map((src, i) => ({
          id: i,
          image: src,
          alt_text: `Promotional Image ${i + 1}`
        }));
        setImages(imgs);
        setCurrentImageIndex(0);
      } catch (err) {
        console.error('Error fetching tire images:', err);
        setError('Failed to load images');
      } finally {
        hideLoading();
      }
    };

    fetchImages();
  }, [tireId]);

  /** 切换到下一张图片 */
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);

  /** 切换到上一张图片 */
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  /** 异常显示 */
  if (error) {
    return (
      <Paper elevation={3} sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', mb: 3 }}>
        <BrokenImage sx={{ fontSize: 60, color: 'grey.400', mr: 1 }} />
        <Typography color="text.secondary">{error}</Typography>
      </Paper>
    );
  }

  /** 图片为空时显示提示 */
  if (images.length === 0) {
    return (
      <Paper elevation={3} sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', mb: 3 }}>
        <BrokenImage sx={{ fontSize: 60, color: 'grey.400', mr: 1 }} />
        <Typography color="text.secondary">
          {tireId ? 'No images available for this tire' : 'Select a tire to view images'}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{
      position: 'relative',
      height: 400,
      borderRadius: '12px',
      mb: 3,
      overflow: 'hidden',
      backgroundColor: '#f9f9f9'
    }}>
      {/* 中央图片 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <img
          src={images[currentImageIndex].image}
          alt={images[currentImageIndex].alt_text}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'all 0.3s ease' }}
        />
      </Box>

      {/* 左右轮播按钮 */}
      {images.length > 1 && (
        <>
          <IconButton
            onClick={prevImage}
            sx={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.3)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.3)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <ChevronRight />
          </IconButton>
        </>
      )}

      {/* 图片计数显示 */}
      <Typography variant="caption" sx={{
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        p: '4px 8px',
        borderRadius: '12px'
      }}>
        {currentImageIndex + 1} / {images.length}
      </Typography>

      {/* 可选：缩略图导航条 */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        p: 1,
        backgroundColor: 'rgba(255,255,255,0.6)',
        overflowX: 'auto'
      }}>
        {images.map((img, index) => (
          <Box
            key={img.id}
            onClick={() => setCurrentImageIndex(index)}
            sx={{
              border: currentImageIndex === index ? '2px solid #15d6b2' : '2px solid transparent',
              borderRadius: '6px',
              cursor: 'pointer',
              flex: '0 0 auto'
            }}
          >
            <img src={img.image} alt={img.alt_text} style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: '4px' }} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
