/**
 * FutureAutoGarage - Theme Component
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description: Custom Material-UI theme for consistent appearance across the application.
 * 自定义的Material-UI主题，用于统一应用的外观。
 * @type {import('@mui/material/styles').Theme}
 */
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', 
      light: '#42A5F5',
      dark: '#0D47A1',
    },
    secondary: {
      main: '#D32F2F', 
      light: '#F44336',
      dark: '#B71C1C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#263238',
      secondary: '#546E7A',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          marginBottom: '24px',
          background: '#2C3E50',
          color: '#FFFFFF',
          width: '100vw',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)',
          color: '#ffffff',
          borderRadius: '12px',
          minWidth: '400px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            color: '#ffffff',
            textAlign: 'center',
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          gap: '16px',
          paddingBottom: '24px',
          '& .MuiButton-root': {
            color: '#ffffff',
            border: '1px solid #ffffff',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
            '&.MuiButton-contained': {
              backgroundColor: '#ffffff',
              color: '#1976D2',
              border: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            border: '2px solid #ffffff',
            borderRadius: '4px',
            backgroundColor: 'transparent',
          },
          '&.Mui-checked .MuiSvgIcon-root': {
            border: '2px solid #ffffff',
            backgroundColor: '#ffffff',
            color: '#1976D2',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          maxHeight: 600,
          overflow: 'auto',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#3498db',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#2980b9',
          }
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#34495e',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.9rem'
          }
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          },
          '&:nth-of-type(even)': {
            backgroundColor: 'rgba(248, 249, 250, 0.8)'
          },
          '&:hover': {
            backgroundColor: 'rgba(52, 152, 219, 0.1)'
          }
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3498db'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2980b9'
            }
          }
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {// root指的是box的根元素，代表整個box
          '&.footer-box': {
            marginTop: 'auto',
            paddingTop: '4px',
            paddingBottom: '8px',
            background: 'linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)',
            color: '#ffffff',
            borderRadius: '8px',
            width: '70vw',
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'relative',
            '& .MuiTypography-root': {
              fontSize: '10px',
            },
          },
          '&.search-container': {
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          },
          '&.empty-state': {
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 30%, #ECEFF1 100%)',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }
        },
      },
    },
  },
});