/**
 * FutureAutoGarage - ServiceDetails Component - 服务详情
 * 
 * Author: Jialin Guo
 * Created: 2025-11-10
 * Last Updated: 2025-11-10
 * 
 * 是Service服务的组件
 */
import { Box, Typography, List, ListItem, ListItemText, Paper, Grid } from '@mui/material';

export default function ServiceDetails({servicesType, serviceContent, selectedService, setSelectedService}) {
    return (
      <Box sx={{ width: '100%', maxWidth: '1200px', margin: '-20px auto', padding: '0 20px' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', fontWeight: 600 }}>
        Car Maintenance
      </Typography>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid item={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Maintenance Services
            </Typography>
            <List>
              {servicesType.map((service, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    py: 0.5, 
                    cursor: 'pointer',
                    backgroundColor: selectedService === service ? 'primary.light' : 'transparent',
                    '&:hover': { backgroundColor: 'grey.100' }
                  }}
                  onClick={() => setSelectedService(service)}
                >
                  <ListItemText 
                    primary={service} 
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '0.9rem',
                        color: selectedService === service ? 'white' : 'inherit'
                      } 
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>


        {/* Right Content */}
        <Grid item={{ xs: 12, md: 9 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
              {serviceContent[selectedService].title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              {serviceContent[selectedService].description}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              {serviceContent[selectedService].details}
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Benefits
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {serviceContent[selectedService].benefits.map((benefit, index) => (
                <Typography key={index} component="li" variant="body2" sx={{ mb: 1 }}>
                  {benefit}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    )
}