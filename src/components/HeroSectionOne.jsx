import { Container, Typography, Box, Button, Grid, Link } from "@mui/material";

import React, { useEffect, useState } from "react";

function HeroSectionOne() {
  const text = ['Landing Page', 'MVP', 'AI Web App', 'Chrome Extension' ]
  // const [animateText, setAnimateText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=>{
      setCurrentIndex(prev=> {
         if (prev < text.length) {
           return prev + 1
         } else{
          return 0
         }
      })
    }, 4000)
    return () => {
      clearInterval(id);
    };
  },[text])

  return (
    <Box width={'100%'} bgcolor={'#fef5d1'}>
          <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ width: '100%', maxWidth: '1440px', margin: 'auto', minHeight: '100vh' }}
    >
      <Grid item md={6}>
        <Container sx={{ paddingY: 22 }}>
          <Typography            variant="h3"
            component="h4"
            textAlign="center"
            sx={{ textAlign: { xs: "center", md: "left" }, fontWeight: '800' }}
          >
            Turn your Idea into a
          </Typography>

          <Typography
            variant="h3"
            component="h4"
            sx={{
              textAlign: { xs: "center", md: "left", color: "orange" },
              fontSize: { xs: 20, md: 37, lg: 48},
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              borderRight: '4px solid white',
              fontWeight: 800
            }}
            textAlign="center"
            className="animate-typing"
          >
            {text[currentIndex]}
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            paddingTop={1}
            sx={{ textAlign: { xs: "center", md: "left", color: "#64748B" } }}
          >
            Crafting Code and Building the Future: Kick-ass Software for
            Startups, One Flat Fee.
          </Typography>

          <Box paddingTop={1} sx={{ display: { xs: "flex", md: "flex" } }}>
            <a href="https://cal.com/nomangul" target="_blank">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "orange",
                textTransform: "capitalize",
                // xs: { margin: "auto" },
                margin: { xs: "auto", md: "0" },
              }}
            >
              Book a Call
            </Button>
            </a>
          
          </Box>
        </Container>
      </Grid>

      <Grid item>
        <Box>
          <img
            src="https://futureideas.dev/mockup.jpg"
            alt=""
            width={320}
            height={450}
            style={{ borderRadius: 15, boxShadow: "-3px -2px 8px gray" }}
          />
        </Box>
      </Grid>
    </Grid>
    </Box>

  );
}

export default HeroSectionOne;
