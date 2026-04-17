import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Javascript', 'React', 'Java', 'Spring Boot',
    'REST APIs', 'Microservices', 'Google Cloud Platform', 'Agile'
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h4" gutterBottom align="center">
            About Me
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid  item xs={12} md={4} >
              <Box
                  component="img"
                  sx={{
                    width: 320,
                    borderRadius: 4
                  }}
                  alt="The house from the offer."
                  src="/titus.jpeg"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph>
                I’m a passionate Data and Backend Engineer with a strong foundation in building scalable data platforms, 
                distributed systems, and modern web applications. My journey in software development started with a curiosity about how systems and data work together, and it has evolved into a career designing reliable, high-performance backend services and data-driven applications.
              </Typography>
              <Typography variant="body1" paragraph>
                I specialize in building scalable backend systems and data-driven applications, while also creating responsive and intuitive user interfaces. My approach focuses on writing clean, maintainable code that solves real-world problems.
              </Typography>
    
              <Typography variant="h6" gutterBottom>
                Skills & Technologies
              </Typography>
              <Grid container spacing={2}>
                {skills.map((skill) => (
                  <Grid item key={skill}>
                    <Paper
                      elevation={2}
                      sx={{
                        px: 2,
                        py: 1,
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText'
                      }}
                    >
                      <Typography>{skill}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;