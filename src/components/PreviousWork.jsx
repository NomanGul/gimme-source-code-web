import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
function PreviousWork() {
  return (
    <>
      <Box sx={{ backgroundColor: "#fffcef" }} paddingTop={10}>
        <Typography
          id="previousWork"
          fontWeight={700}
          textAlign="center"
          variant="h5"
          component="h4"
        >
          Previous Work
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          textAlign="center"
          lineHeight={4}
        >
          Here are some examples of our work
        </Typography>
      </Box>

      <Grid
        container
        spacing={12}
        sx={{ px: { xs: 4, md: 8, backgroundColor: "#fffcef" } }}
        py={10}
      >
        <Grid item md={4}>
          <Box className="animation work_card">
            <img
              src="https://futureideas.dev/tweet_niche.png"
              maxWidth={370}
              width="100%"
              style={{ borderRadius: "15px", boxShadow: "2.5px 2px 5px gray", }}
              // height={450}
            />
          </Box>
          <Box
            marginTop={3}
            sx={{
              backgroundColor: "#92400E",
              color: "white",
              display: "inline-block",
              padding: "1px 8px",
              borderRadius: 2,
            }}
          >
            <Typography>Web App MVP</Typography>
          </Box>

          <Typography
            fontWeight={700}
            variant="h5"
            component="h4"
            marginTop={1}
          >
            Tweet Niche
          </Typography>

          <Typography
            variant="subtitl2"
            component="p"
            color="#64748B"
            marginTop={1}
            lineHeight={1.5}
          >
            Product that helps business owners find their target user on
            Twitter.
          </Typography>

          <Button
            sx={{
              border: "2px solid orange",
              color: "orange",
              borderRadius: 3,
              marginTop: "0.8rem",
            }}
          >
            Preview
          </Button>
        </Grid>

        <Grid item md={4}>
          <Box className='work_card'>
            <img
              src="https://futureideas.dev/linklessgpt.png"
              // width={370}
              maxWidth={370}
              width="100%"
              style={{ borderRadius: "15px", boxShadow: "2.5px 2px 5px gray" }}
              // height={450}
            />
          </Box>
          <Box
            marginTop={3}
            sx={{
              backgroundColor: "#D97706",
              color: "white",
              display: "inline-block",
              padding: "1px 8px",
              borderRadius: 2,
            }}
          >
            <Typography>Chrome Extension</Typography>
          </Box>

          <Typography
            fontWeight={700}
            variant="h5"
            component="h4"
            marginTop={1}
          >
            LinklessGPT
          </Typography>

          <Typography
            variant="subtitl2"
            component="p"
            color="#64748B"
            marginTop={1}
            lineHeight={1.5}
          >
            Chrome extension that summarises the contents of any website without
            clicking on it.
          </Typography>

          <Button
            sx={{
              border: "2px solid orange",
              color: "orange",
              borderRadius: 3,
              marginTop: "0.8rem",
            }}
          >
            Preview
          </Button>
        </Grid>

        <Grid item md={4}>
          <Box className='work_card'>
            <img
              src="https://futureideas.dev/blackblocks.png"
              // width={370}
              maxWidth={370}
              width="100%"
              style={{ borderRadius: "15px", boxShadow: "2.5px 2px 5px gray" }}
              // height={450}
            />
          </Box>
          <Box
            marginTop={3}
            sx={{
              backgroundColor: "#FBBF24",
              color: "white",
              display: "inline-block",
              padding: "1px 8px",
              borderRadius: 2,
            }}
          >
            <Typography>Landging Page</Typography>
          </Box>

          <Typography
            fontWeight={700}
            variant="h5"
            component="h4"
            marginTop={1}
          >
            Black Blocks
          </Typography>

          <Typography
            variant="subtitl2"
            component="p"
            color="#64748B"
            marginTop={1}
            lineHeight={1.5}
          >
            Tool that helps entrepreneurs validate an idea before building it.
          </Typography>

          <Button
            sx={{
              border: "2px solid orange",
              color: "orange",
              borderRadius: 3,
              marginTop: "0.8rem",
            }}
          >
            Preview
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PreviousWork;
