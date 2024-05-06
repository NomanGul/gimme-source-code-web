import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";

import Image from "./img/bracket.png";

import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Email } from "@mui/icons-material";

function Prices() {
  return (
    <>
      <Box py={10}>
        <Typography
          id="pricing"
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight={600}
        >
          Fixed prices for every project
        </Typography>

        <Typography
          variant="subtitle2"
          component="h2"
          textAlign="center"
          fontSize={17}
          color="#64748B"
          px={2}
        >
          If you want to explore another type of project, let us know!
        </Typography>
      </Box>
      <Grid
        container
        spacing={16}
        display="flex"
        alignContent="center"
        textAlign="center"
        justifyContent="center"
        sx={{ px: { xs: 6.195, md: 20 } }}
      >
        <Grid item md={4}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3.5 }}>
            <Typography variant="h6" component="h2" fontWeight={600}>
              Landing Page
            </Typography>

            <Typography variant="subtitle" component="p" color="#64748B" py={7}>
              In less than 48 hours.
            </Typography>

            <Typography variant="subtitle" component="p" color="#64748B">
              Starting at
            </Typography>

            <Typography variant="h4" component="p" fontWeight={700} py={3}>
              $999
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "orange",
                textTransform: "capitalize",
                marginTop: 2,
              }}
            >
              Book Discover Call
            </Button>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Box>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3.5 }}>
              <Typography variant="h6" component="h2" fontWeight={600}>
                Chrome Extension
              </Typography>

              <Typography
                variant="subtitle"
                component="p"
                color="#64748B"
                py={7}
              >
                In less than a month
              </Typography>

              <Typography variant="subtitle" component="p" color="#64748B">
                Starting at
              </Typography>

              <Typography variant="h4" component="p" fontWeight={600} py={3}>
                $3,999
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  textTransform: "capitalize",
                  marginTop: 2,
                }}
              >
                Book Discover Call
              </Button>
            </Paper>
          </Box>
        </Grid>

        <Grid item md={4}>
          <Box>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3.5 }}>
              <Typography variant="h6" component="h2" fontWeight={600}>
                MVP
              </Typography>

              <Typography
                variant="subtitle"
                component="p"
                color="#64748B"
                py={7}
              >
                In less than a month.
              </Typography>

              <Typography variant="subtitle" component="p" color="#64748B">
                Starting at
              </Typography>

              <Typography variant="h4" component="p" fontWeight={600} py={3}>
                $7,500
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  textTransform: "capitalize",
                  marginTop: 2,
                }}
                q
              >
                Book Discover Call
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Box py={15} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" fontWeight={700} textAlign="center">
          <img src={Image} alt="" width={70} className="bracket" />
          Gimme Source Code
        </Typography>

        <Box
          className="icon"
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={3.5}
        >
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
      </Box>

      <Box display="flex" justifyContent="center" gap={2} marginTop={-14}>
        <Typography
          variant="h6"
          fontWeight={700}
          textAlign="center"
          sx={{ textDecoration: "none" }}
        >
          <a href="#moveToService"> Service</a>
        </Typography>
        <Typography variant="h6" fontWeight={700} textAlign="center">
          <a href="#previousWork"> Portfolio</a>
        </Typography>
        <Typography variant="h6" fontWeight={700} textAlign="center">
          <a href="#pricing">Pricing</a>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography color="#64748B" lineHeight={6} variant="body2">
          © 2023 Gimme Source Code. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Prices;
