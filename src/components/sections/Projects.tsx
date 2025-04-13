import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  roles: string[];
}

const projects: Project[] = [
  {
    title: "SWIC Portal",
    description: `SWIC (Special Supplemental Nutrition Program for Women, Infants, and Children) is a US federally funded program supporting nutritional needs for eligible women and children. 
    Developed the SWIC Portal, a transaction recording and claim generation platform that streamlines subsidy reimbursements for WIC-eligible purchases. The application captures transaction data from certified retailers, generates claim files based on subsidy structures, and facilitates seamless claim submissions to government agencies. It also handles claim corrections and resubmissions for accurate reimbursement processing.`,
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["React", "Spring Boot", "JavaScript", "REST", "App Engine", "Firestore", "BigQuery"],
    roles: [
      'Solely led the end-to-end delivery of the project, handling everything from requirement gathering with Product Owners to architecture, development, deployment, and client support.',

      'Architected a scalable microservices-based solution using Spring Boot, React, Cloud SQL, and various GCP components (App Engine, Cloud Tasks, Firestore).',

      'Designed and implemented RESTful APIs (GET, POST, PUT, DELETE) with advanced filtering (by stores, agencies, date range) and pagination for optimal performance.',

      'Developed a daemon service on App Engine to read transaction data from BigQuery, compress and upload files to customer FTP, download and process files, and store processed data in Firestore, using Cloud Tasks for asynchronous operations.',

      'Built a highly-performant React Data Table component that efficiently renders and manages 100K+ rows without freezing.',

      'Contributed to a 10% increase in team revenue by delivering a scalable, client-centric solution with production-grade stability and maintainability.'
    ]
  },
  {
    title: "Insights",
    description: `A cloud-based platform offering real-time insights and predictive analytics to improve retail operations, enhance decision-making, and optimize store performance.
          Provides actionable dashboards, transaction analysis, and sales performance metrics to help retailers identify trends and opportunities.
          Integrates seamlessly with GCP services, BigQuery, and Dataflow pipelines to process high-volume transactional data for enterprise clients.`,
    roles: [
        'Designed and developed robust Apache Beam pipelines using Dataflow to process TLog data including Sales, Tenders, Transactions, and Returns, enabling seamless handling of thousands of transactions daily and storing results efficiently in BigQuery',
        
        'Created Cloud Functions integrated with Google Scheduler to automate data fetching from services like Site Service and posting consumer data to CDM on a scheduled basis.',

        'Optimized a performance-critical Cloud Function by 80% using CompletableFuture, drastically reducing response time for parallel API calls.',

        'Leveraged BigQuery MERGE queries to update and maintain clean datasets with high consistency.',

        'Built custom React.js components for Looker (Google’s Data Visualization tool), driving meaningful visual insights for business stakeholders.',

        'Recognized as Best Distinguished Award Winner – 2022 for innovation and technical excellence in front-end R&D.'
    ], 
    image: "https://images.unsplash.com/photo-1728044849277-9cb3cd94e729?ixlib=rb-1.2.1&auto=format&fit=crop&w=2050&q=80",
    technologies: ["Java", "React", "Javascript", "GCP Dataflow", "Cloud Functions", "Big Query"],
  }
];

const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 12,
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Projects
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={12} key={index}>
                <Card
                  
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                        <strong>{project.title}</strong>
                    </Typography>
                    <Typography variant="h6" component="h6" paragraph>
                      {project.description}
                    </Typography>
                    <>
                    <Typography variant="h6" component="h6" paragraph>
                      
                      <strong>Roles:</strong>
                    </Typography>
                      {project.roles.map((r, i) => {
                         return <Typography key ={i} variant="body2" color="text.secondary" paragraph>  {r}</Typography>
                      })
                    }
                    </>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          variant="body2"
                          component="span"
                          sx={{
                            mr: 1,
                            px: 1,
                            py: 0.5,
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: 1,
                            display: 'inline-block',
                            mb: 1
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;