import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: 'Services', path: '/#services' },
        { label: 'About', path: '/#about' },
        { label: 'Contact', path: '/#contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
            <Box sx={{ my: 2 }}>
                <img src="/devmoblogo.png" alt="DevMobster Logo" style={{ height: '80px', objectFit: 'contain' }} />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <Button component={RouterLink} to={item.path} sx={{ textAlign: 'center', width: '100%' }}>
                            <ListItemText primary={item.label} />
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(20px)', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <Toolbar>
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                    }}
                >
                    <img src="/devmoblogo.png" alt="DevMobster Logo" style={{ height: '70px', objectFit: 'contain' }} />
                </Box>

                {isMobile ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={RouterLink}
                                to={item.path}
                                sx={{ color: '#fff', fontSize: '1rem' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button variant="contained" color="primary" component={RouterLink} to="/#contact">
                            Start Project
                        </Button>
                    </Box>
                )}
            </Toolbar>
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: theme.palette.background.paper },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
