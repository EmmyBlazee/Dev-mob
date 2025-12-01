import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 2 }}>
                            <img src="/devmoblogo.png" alt="DevMob Logo" style={{ height: '60px', objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Premium development services for mobile, web, and games. We bring your digital vision to life with cutting-edge technology.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Connect
                        </Typography>
                        <Box>
                            <IconButton color="inherit" href="https://github.com" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton color="inherit" href="https://twitter.com" target="_blank">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} DevMob. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
