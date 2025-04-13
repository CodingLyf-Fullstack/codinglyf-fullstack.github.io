import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h4" gutterBottom align="center">
            Contact
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 4,
              '& .MuiTextField-root': { mb: 2 }
            }}
          >
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <PhoneIcon sx={{ pt: 1 }}> </PhoneIcon>
                 +91-9884550435
              </Grid>
              <Grid item xs={12} sm={12}>
                <EmailIcon sx={{ pt: 1 }}> </EmailIcon>
                <Link sx={{ cursor: 'pointer' }}>
                  tituskrupamon@gmail.com
                </Link>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;