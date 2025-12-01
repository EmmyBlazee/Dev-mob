import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android. We build seamless, high-performance apps.',
        icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications using React, Next.js, and other cutting-edge technologies.',
        icon: <WebIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: 'Game Development',
        description: 'Immersive 2D and 3D games for mobile and desktop. We bring fun and engagement to your audience.',
        icon: <SportsEsportsIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: 'Coding Services',
        description: 'Expert coding solutions, API integration, and backend development for businesses and individuals.',
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
    },
];

const Services = () => {
    return (
        <Box id="services" sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{ mb: 8, fontWeight: 'bold' }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                        },
                        gap: 4,
                    }}
                >
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 10px 30px rgba(0, 229, 255, 0.2)',
                                },
                            }}
                        >
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 3 }}>
                                <Box
                                    sx={{
                                        mb: 2,
                                        p: 2,
                                        borderRadius: '50%',
                                        bgcolor: 'rgba(0, 229, 255, 0.1)',
                                        color: 'primary.main',
                                        display: 'inline-flex',
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
