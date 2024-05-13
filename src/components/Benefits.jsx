import React from "react";
import { Typography, Box, Button, Grid, CardMedia } from "@mui/material";
import introVideo from '../../src/assets/video/intro.mp4'


function Benefits() {
  return (
    <>
      <Box backgroundColor="#fffcef" maxWidth='1440px' margin='auto'>
        <Grid container spacing={8} pl={10} py={10}>
          <Grid item md={6}>
            <Typography
              variant="subtitle1"
              component="p"
              color="orange"
              fontWeight={600}
              lineHeight={2}
            >
              Why us?
            </Typography>

            <Typography
              variant="h4"
              component="p"
              fontWeight={600}
              lineHeight={2}
            >
              Benefits
            </Typography>

            <Typography
              variant="subtitle"
              component="p"
              color="#64748B"
              lineHeight={2}
              py={3}
            >
              If you were not convinced yet, here are some perks of working with
              us:
            </Typography>

            <Typography
              variant="body"
              fontWeight={600}
              display="flex"
              align="center"
              lineHeight={2.5}
              mb={3}
            >
              <Box
                sx={{
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  padding: 0.2,

                  color: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-1 -3 26 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  width={30}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
              </Box>
              <Box px={1.5}>Lightning fast service.</Box>
            </Typography>

            <Typography
              variant="body"
              fontWeight={600}
              display="flex"
              align="center"
              lineHeight={4}
              mb={3}
            >
              <Box
                sx={{
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  marginTop: 1.5,
                  // padding: 0.5,

                  color: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-1 2 26 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  width={30}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </Box>
              <Box px={1.2}>Fixed price. No surprises.</Box>
            </Typography>

            <Typography
              variant="body"
              display="flex"
              align="center"
              lineHeight={2}
              fontWeight={600}
              mb={3}
            >
              <Box
                sx={{
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  // marginTop: 1,
                  paddingTop: "4px ",
                  color: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.1 -1 26 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  width={30}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  ></path>
                </svg>
              </Box>
              <Box px={1.5}>Top-notch quality.</Box>
            </Typography>

            <Typography
              variant="body"
              display="flex"
              align="center"
              fontWeight={600}
              // lineHeight={40}
              lineHeight={2}
              padding="2px"
              mb={3}

            >
              <Box
                sx={{
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  // marginTop: 1,
                  // paddingTop: 2,

                  color: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 -3.5 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  width={30}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  ></path>
                </svg>
              </Box>
              <Box px={1.5} textAlign="left">
                100% personalized and owned by you.
              </Box>
            </Typography>
          </Grid>
          <Grid item md={6} borderRadius="30rem" textAlign="left" sx={{ display: 'flex',
                justifyContent: 'center'}}>
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                height: '100vh',
                width: 'fit-content',
              }}
            >
              <video src={introVideo} height='100%' controls></video>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Benefits;
