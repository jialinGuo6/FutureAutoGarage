/**
 * FutureAutoGarage - LoadingContext Component
 * Author: Jialin Guo
 * Created: 2025-11-03
 * 加载上下文，用于管理加载状态
 */
import { createContext, useContext, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{isLoading, showLoading, hideLoading }}>
      {children}
      <Backdrop open={isLoading} sx={{ zIndex: 9999 }}>
        <CircularProgress color="primary" />
      </Backdrop>
    </LoadingContext.Provider>
  );
};