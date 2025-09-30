import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Grid, 
  Box,
  ThemeProvider,
  createTheme,
  Paper,
  Divider,
  CircularProgress
} from '@mui/material';
import BgShape from "../assets/Clip path group.svg"; // ✅ add your svg
import { motion } from 'framer-motion';
import BgShape2 from "../assets/Clip path group2.svg";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B466D',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const ContactUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const renderCard = (title, content) => (
    <Card variant="outlined" sx={{ mb: 4, borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.015)', boxShadow: 6 } }}>
      <CardHeader title={title} sx={{ bgcolor: 'primary.main', color: 'white' }} />
      <CardContent>{content}</CardContent>
    </Card>
  );

  return (
   <ThemeProvider theme={theme}>
  <Box
    sx={{
      flexGrow: 1,
      bgcolor: "background.paper",
      minHeight: "100vh",
      p: { xs: 2, sm: 4, md: 4 },
    }}
  >
    {/* Get in Touch Section */}
    <div className="mt-28 relative overflow-x-hidden">
      {/* SVG background */}
      <img
        src={BgShape}
        alt="Decorative background"
        className="absolute top-20 left-0 w-full h-auto opacity-90 pointer-events-none max-w-none"
      />
       <img
        src={BgShape2}
        alt="Decorative background"
        className="absolute top-40 left-0 w-full h-auto opacity-90 pointer-events-none max-w-none"
      />

      {/* Title */}
      <motion.h2
        className="font-extrabold text-[45px] lg:text-[60px] pb-16 sm:mb-0 text-center text-[#0B466D] relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 mb-12">
        <Grid container spacing={4}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mb: 4,
                height: 0,
                paddingBottom: "56.25%",
                position: "relative",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: 3,
              }}
              className="font-poppins"
            >
              {!mapLoaded && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#f0f0f0",
                  }}
                  className="font-poppins"
                >
                  <CircularProgress />
                </Box>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.203336047934!2d67.26210887401167!3d24.856903945402394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1727465448702!5m2!1sen!2s"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              ></iframe>
            </Box>

            {/* Location Card */}
            {renderCard(
              "Location Details",
              <>
                <Box display="flex" alignItems="center" mb={2} className="font-poppins">
                  <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    St-4, Sector 17-D, NH 5, Karachi, Karachi City, Sindh
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2} className="font-poppins">
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <a
                      href="tel:+922111128128"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      (021) 111 128 128
                    </a>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" className="font-poppins">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <a
                      href="mailto:info.khi@nu.edu.pk"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      info.khi@nu.edu.pk
                    </a>
                  </Typography>
                </Box>
              </>
            )}
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            {renderCard(
              "President",
              <>
                <Typography variant="body1" gutterBottom>
                  <strong>Name:</strong> Neha Amir
                </Typography>
                <Box display="flex" alignItems="center" className="font-poppins">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <a
                      href="mailto:k224116@nu.edu.pk"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      k223177@nu.edu.pk
                    </a>
                  </Typography>
                </Box>
              </>
            )}

            {renderCard(
              "Vice President",
              <>
                <Typography variant="body1" gutterBottom>
                  <strong>Name:</strong> Muhammad Hasnain
                </Typography>
                <Box display="flex" alignItems="center" className="font-poppins">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <a
                      href="mailto:k224718@nu.edu.pk"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      k224536@nu.edu.pk
                    </a>
                  </Typography>
                </Box>
              </>
            )}
            {renderCard(
              "General Secretary",
              <>
                <Typography variant="body1" gutterBottom>
                  <strong>Name:</strong> Shoaib Raza
                </Typography>
                <Box display="flex" alignItems="center" className="font-poppins">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <a
                      href="mailto:k224530@nu.edu.pk"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      k223223@nu.edu.pk
                    </a>
                  </Typography>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  </Box>
</ThemeProvider>

  );
};

export default ContactUs;
