import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Box id="contact" sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{ mb: 2, fontWeight: 'bold' }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 8 }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Ready to start your next project? Let's talk.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '1fr 1.5fr',
                        },
                        gap: 4,
                        maxWidth: '1000px',
                        mx: 'auto',
                    }}
                >
                    {/* Contact Info */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            p: 4,
                            borderRadius: 3,
                            bgcolor: 'background.paper',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Contact Information
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'rgba(0, 229, 255, 0.1)', color: 'primary.main' }}>
                                <EmailIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Email</Typography>
                                <Typography variant="body1">info@devmob.com</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'rgba(0, 229, 255, 0.1)', color: 'primary.main' }}>
                                <PhoneIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Phone</Typography>
                                <Typography variant="body1">+2340000000000</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'rgba(0, 229, 255, 0.1)', color: 'primary.main' }}>
                                <LocationOnIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Location</Typography>
                                <Typography variant="body1">Nigeria</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Contact Form */}
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            p: 4,
                            borderRadius: 3,
                            bgcolor: 'background.paper',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
                            <TextField fullWidth label="Name" variant="outlined" />
                            <TextField fullWidth label="Email" variant="outlined" />
                        </Box>
                        <TextField fullWidth label="Subject" variant="outlined" />
                        <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={5}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{ mt: 1, alignSelf: 'flex-start', minWidth: 200 }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
