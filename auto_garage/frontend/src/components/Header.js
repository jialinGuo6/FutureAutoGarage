/**
 * FutureAutoGarage - Header Component - 网站头部导航
 * 
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * 
 * 包含Logo图片展示区和主导航菜单，支持下拉菜单功能
 */
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    // 下拉菜单状态管理
    const [tireAnchorEl, setTireAnchorEl] = useState(null);
    const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
    const [productAnchorEl, setProductAnchorEl] = useState(null);
    const tireOpen = Boolean(tireAnchorEl);
    const serviceOpen = Boolean(serviceAnchorEl);
    const productOpen = Boolean(productAnchorEl);
    // 打开轮胎下拉菜单
    const handleTireClick = (event) => {
        setServiceAnchorEl(null);
        setTireAnchorEl(event.currentTarget);
        setProductAnchorEl(null);
    };
    // 打开服务下拉菜单
    const handleServiceClick = (event) => {
        setTireAnchorEl(null);
        setServiceAnchorEl(event.currentTarget);
        setProductAnchorEl(null);
    };
    // 打开产品下拉菜单
    const handleProductClick = (event) => {
        setTireAnchorEl(null);
        setServiceAnchorEl(null);
        setProductAnchorEl(event.currentTarget);
    }
    // 关闭轮胎下拉菜单
    const handleTireClose = () => {
        setTireAnchorEl(null);
    };
    // 关闭服务下拉菜单
    const handleServiceClose = () => {
        setServiceAnchorEl(null);
    };
    //关闭产品下拉菜单
    const handleProductClose = () => {
        setProductAnchorEl(null);
    };
    
    return (
    <>
        {/* 独立的头部Logo和联系信息图片区域 */}
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 24px',
            backgroundColor: 'transparent',
            borderBottom: '1px solid #E0E0E0'
        }}>
            {/* 左侧Logo组 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img 
                    src="/static/images/logo_s.png" 
                    alt="Logo" 
                    style={{ height: '40px' }}
                />
                <img 
                    src="/static/images/FUTURE_GARAGE.png" 
                    alt="FUTURE_GARAGE" 
                    style={{ height: '20px' }}
                />
            </Box>
            {/* 右侧联系信息 */}
            <img 
                src="/static/images/contact_info.png" 
                alt="Contact Info" 
                style={{ height: '50px', margin: '2px' }}
            />
        </Box>
        
        {/* 导航栏 */}
        <AppBar position="static" sx={{ top: 54, zIndex: 1100 }}>
            <Toolbar sx={{ minHeight: '48px !important', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>

                    {/* 服务下拉菜单 */}
                    <Button color="inherit" onClick={handleServiceClick}>
                        Services ▾
                    </Button>
                    <Menu anchorEl={serviceAnchorEl} open={serviceOpen} onClose={handleServiceClose}>
                        <MenuItem onClick={handleServiceClose} component={Link} to="/auto-repairs">
                            Auto Repairs
                        </MenuItem>
                        <MenuItem onClick={handleServiceClose} component={Link} to="/car-maintenance">
                            Car Maintenance
                        </MenuItem>
                    </Menu>

                    {/* 轮胎下拉菜单 */}
                    <Button color="inherit" onClick={handleTireClick}>
                        Tires ▾
                    </Button>
                    <Menu anchorEl={tireAnchorEl} open={tireOpen} onClose={handleTireClose}>
                        <MenuItem onClick={handleTireClose} component={Link} to="/all-season-tires">
                            All Season Tires
                        </MenuItem>
                        <MenuItem onClick={handleTireClose} component={Link} to="/winter-tires">
                            Winter Tires
                        </MenuItem>
                    </Menu>
                    
                    {/* 其他产品下拉菜单 */}
                    <Button color="inherit" onClick={handleProductClick}>
                        Products ▾
                    </Button>
                    <Menu anchorEl={productAnchorEl} open={productOpen} onClose={handleProductClose}>
                        <MenuItem onClick={handleProductClose} component={Link} to="/product-lights">
                            Led Car Headlights
                        </MenuItem>
                        <MenuItem onClick={handleProductClose} component={Link} to="/product-rear-view">
                            Rear View System
                        </MenuItem>
                    </Menu>
                     {/* 其他导航链接 */}
                    <Button color="inherit" component={Link} to="/about">
                        About Us
                    </Button>
                    <Button color="inherit" component={Link} to="/contact-location">
                        Contact Us
                    </Button>
                    <Button color="inherit" component={Link} to="/faq">
                        FAQ
                    </Button>

                </Box>
            </Toolbar>
        </AppBar>
    </>
    );
}