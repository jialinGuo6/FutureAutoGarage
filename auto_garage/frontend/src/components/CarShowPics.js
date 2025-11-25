/**
 * CarShowPics Component - 图片展示
 * Author: Jialin Guo
 * Description: This is a component for displaying images.
 * - According to the tireId received from the parent component, request images. 根据父组件传入的 tireId 请求图片
 * - If tireId is empty, display default images. 若 tireId 为空显示默认图片
 * - Provide left and right scrolling, thumbnail navigation, and image count display. 提供左右轮播、缩略图导航和图片计数显示
 * Used in Page:
 * - AllSeasonTires (/pages/AllSeasonTires.js)
 * - WinterTires (/pages/WinterTires.js)
 * - ProductRearView (/pages/ProductRearView.js)
 * - ProductLights (/pages/ProductLights.js)
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
   * When tireId changes, load images  当 tireId 变化时加载图片
   * - If tireId is empty, display default images - tireId 为空显示默认图片
   * - If tireId is not empty, request the interface to get the corresponding tire images - tireId 有值则请求接口获取对应轮胎图片 
   */
  useEffect(() => {
    if (!tireId) {
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

  /** Change to the next image */
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);

  /** Change to the previous image */
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  /** Error or no images available to display */
  if (error) {
    return (
      <Paper elevation={3} sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', mb: 3 }}>
        <BrokenImage sx={{ fontSize: 60, color: 'grey.400', mr: 1 }} />
        <Typography color="text.secondary">{error}</Typography>
      </Paper>
    );
  }

  /** If there are no images to display */
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
      {/* Display the current image */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <img
          src={images[currentImageIndex].image}
          alt={images[currentImageIndex].alt_text}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'all 0.3s ease' }}
        />
      </Box>

      {/* Left and right scrolling */}
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

      {/* Image count */}
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

      {/* Option: The thumbnail navigation bar 缩略图导航条*/}
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
