import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";

import React from "react";

function HeroSectionOne() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ backgroundColor: "#fef5d1" }}
    >
      <Grid item md={6}>
        <Container sx={{ paddingY: 22 }}>
          <Typography
            variant="h3"
            component="h4"
            textAlign="center"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Turn your Idea into a
          </Typography>

          <Typography
            variant="h3"
            component="h4"
            sx={{
              textAlign: { xs: "center", md: "left", color: "orange" },
              fontSize: { xs: 20, md: 37 },
            }}
            textAlign="center"
          >
            Landing Page, MVP, AI Web App,Chrome Extension
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            paddingTop={1}
            sx={{ textAlign: { xs: "center", md: "left", color: "#64748B" } }}
          >
            Crafting Code and Building the Future: Kick-ass Software for
            Startups, One Flat Fee.
            <Box className="icon">
              <a href="https://github.com/NomanGul" target="_blank">
                <GitHub sx={{ color: "orange", margin: "5px 0px" }} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/noman-gul/?originalSubdomain=pk"
                target="_blank"
              >
                <LinkedIn sx={{ color: "orange", margin: "5px 10px" }} />
              </a>

              <a href="https://twitter.com/NomanGulKhan" target="_blank">
                {" "}
                <Twitter sx={{ color: "orange", margin: "5px 10px" }} />{" "}
              </a>

              <a href="mailto:nomangul2001@gmail.com" target="_blank">
                <Email sx={{ color: "orange", margin: "5px 10px" }} />
              </a>
              <a href="https://www.nomangul.com/" target="_blank">
                <PersonIcon sx={{ color: "orange", margin: "5px 10px" }} />
              </a>
            </Box>
          </Typography>

          <Box paddingTop={1} sx={{ display: { xs: "flex", md: "flex" } }}>
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
  );
}

export default HeroSectionOne;
