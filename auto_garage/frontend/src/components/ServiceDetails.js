/**
 * FutureAutoGarage - ServiceDetails Component 
 * Author: Jialin Guo
 * Created: 2025-11-10
 * Description: 
 * - This is a component for layout the page structure for two service related pages.
 * - It includes the left sidebar and the right content area.
 * Used in Page:
 * - Service - CarMaintenance(/pages/CarMaintenance.js)
 * - Service - AutoRepairs(/pages/AutoRepairs.js)
 */
import React from 'react';
import { Box, Typography, List, ListItemText, Paper, Grid } from '@mui/material';
import { ListItemButton, ListItemIcon, Divider } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build'; 
export default function ServiceDetails({servicesType, serviceContent, selectedService, setSelectedService}) {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', px: 2, mt: 4, marginTop: '-20px' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>      
        Car Maintenance
      </Typography>
      
      <Grid container spacing={3} direction="row" wrap="nowrap">
        <Grid size={3}>
          {/* Left Sidebar */}
          <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3}}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
              Maintenance Services
            </Typography>
            <List sx={{ p: 0 }}>
              {servicesType.map((service, idx) => (
                <React.Fragment key={idx}>
                  <ListItemButton
                    selected={selectedService === service}
                    onClick={() => setSelectedService(service)}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      py: 1,
                      px: 2,
                      boxShadow: selectedService === service ? 2 : 0,
                      background: selectedService === service 
                        ? 'linear-gradient(90deg, #1976d2 60%, #1565c0 100%)'
                        : '#f8f9fa',
                      color: selectedService === service ? 'white' : 'text.primary',
                      fontWeight: selectedService === service ? 700 : 500,
                      border: selectedService === service ? '1px solid #1565c0' : '1px solid transparent',
                      transition: 'background 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        background: selectedService === service 
                          ? 'linear-gradient(90deg, #1565c0 60%, #1976d2 100%)' 
                          : '#e3f2fd',
                        color: selectedService === service ? 'white' : '#1565c0',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 34, color: selectedService === service ? 'white' : '#1565c0' }}>
                      <BuildIcon />
                    </ListItemIcon>
                    <ListItemText 
                      primary={service}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '1.07rem',
                        }
                      }}
                    />
                  </ListItemButton>
                  {idx !== servicesType.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Right Content */}
         <Grid size={9}>
          <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3, height: "90%", backgroundColor: '#fdfdfd' }}>
            <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
              {serviceContent[selectedService].title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: 'text.secondary' }}>
              {serviceContent[selectedService].description}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: 'text.secondary' }}>
              {serviceContent[selectedService].details}
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
              Benefits
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              {serviceContent[selectedService].benefits.map((benefit, idx) => (
                <Typography 
                  key={idx} 
                  component="li" 
                  variant="body2" 
                  sx={{ mb: 1.2, color: 'text.secondary' }}
                >
                  {benefit}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
