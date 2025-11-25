/**
 * FutureAutoGarage - HomePage Component 
 * Author: Jialin Guo
 * Created: 2025-11-03
 */
import Banner from "../components/Banner"; 
import GotoBox from "../components/GotoBox";
import { Typography, Grid } from '@mui/material';
export default function HomePage() {
    return (
        <div style={{ padding: '20px' }}>
                {/* Banner Component - Homepage Image Carousel */}
                <Banner />
                <Grid container spacing={100} direction="column" alignItems="center" sx={{ mt: 2 }}>
                    <Grid>
                        <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
                             Future Service
                        </Typography>

                        <Typography component='h4' variant='h5' sx={{ textAlign: 'center', mt: 2}}>
                            Professional, Accurate, Effective, Honest, and All for Customers.
                        </Typography>
                    </Grid>
                </Grid>
                {/* GotoBox Component - Navigation Links */}
                <GotoBox/>
        </div>
    );
}
