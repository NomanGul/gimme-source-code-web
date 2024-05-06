import React from "react";

import { Box, Container, Typography, Grid } from "@mui/material";
// import CodeIcon from '@mui/icons-material/CodeIcon';
import CodeIcon from "@mui/icons-material/Code";
function DoForYou() {
  return (
    <>
      <Box textAlign="center" py={8} lineHeight={5} px={4}>
        <Typography
          fontWeight={700}
          id="moveToService"
          variant="h5"
          component="h4"
        >
          What can we do for you?
        </Typography>

        <Typography variant="subtitle2" component="h5" lineHeight={2}>
          The question would be: what can we NOT do?
        </Typography>

        <Typography
          variant="subtitl2"
          component="p"
          lineHeight={2}
          color="orange"
          // letterSpacing={1}
        >
          For anything involving Full Stack Development, we got you covered.
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={12} py={5} sx={{ px: { xs: 4, md: 12 } }}>
          <Grid
            item
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {/* <CodeIcon sx={{ marginLeft: 27 }} /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={40}
              color="orange"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              ></path>
            </svg>

            <Typography
              variant="body1"
              component="h2"
              fontWeight={600}
              lineHeight={2.5}
              // paddingTop={2.5}
              sx={{ textAlign: { xs: "center", md: "center" } }}

              // sx={{ textAlign: { xs: "center", md: "block" } }}
            >
              Web App MVP
            </Typography>

            <Typography
              variant="body2"
              component="p"
              textAlign="center"
              // fontSize={17}
              marginLeft={8}
              lineHeight={1.5}
              sx={{
                marginLeft: 10,
                color: "#64748B",
                textAlign: { xs: "center", md: "center" },
                marginLeft: { xs: "5", md: "none" },
              }}
            >
              From zero to a functional product. Your customers will love it.
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {/* <CodeIcon sx={{ marginLeft: 26 }} /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={40}
              color="orange"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              ></path>
            </svg>

            <Typography
              fontWeight={600}
              lineHeight={2.5}
              variant="body1"
              component="h2"
              px={2}
            >
              AI Project
            </Typography>

            <Typography
              variant="body2"
              component="p"
              textAlign="center"
              // fontSize={17}
              lineHeight={1.5}
              sx={{ marginLeft: 1, color: "#64748B" }}
            >
              Our experience with the latest AI technologies, makes us the
              perfect candidate to bring your idea to life.
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={40}
              color="orange"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              ></path>
            </svg>

            <Typography
              variant="body1"
              component="h2"
              fontWeight={600}
              lineHeight={2.5}
            >
              Landing Page
            </Typography>

            <Typography
              variant="body2"
              component="p"
              textAlign="center"
              lineHeight={1.5}
              sx={{ marginLeft: 1, color: "#64748B" }}
            >
              Get a high converting website that displays the best side of your
              product.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container spacing={12} py={5} sx={{ px: { xs: 4, md: 12 } }}>
          <Grid
            item
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={40}
              color="orange"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
              ></path>
            </svg>
            <Typography
              variant="body1"
              component="h2"
              fontWeight={600}
              lineHeight={2.5}
            >
              Chrome Extension
            </Typography>

            <Typography
              variant="body2"
              component="p"
              textAlign="center"
              lineHeight={1.5}
              sx={{
                color: "#64748B",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Sometimes the best way to bring a great user experience is
              integrating products into a browser.
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={40}
              color="orange"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
              ></path>
            </svg>
            
            <Typography
              variant="body1"
              component="h2"
              fontWeight={600}
              lineHeight={2.5}
              sx={{ fontWeight: "700", textAlign: "center" }}
            >
              Full Stack Software Development
            </Typography>
            <Typography
              variant="body2"
              component="p"
              textAlign="center"
              lineHeight={1.3}
              sx={{ color: "#64748B" }}
            >
              Let us take care of that functionality you have been meaning to
              implement.
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={40}
              color="orange"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              ></path>
            </svg>

            <Typography
              variant="body1"
              component="h2"
              fontWeight={600}
              lineHeight={2.5}
              textAlign={"center"}
            >
              Consulting
            </Typography>

            <Typography
              variant="body2"
              component="p"
              textAlign="center"
              lineHeight={1.3}
              sx={{ color: "#64748B" }}
            >
              You don't know if something can be implemented? Do you know how
              long it will take? Or how much will it cost? Ask us!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DoForYou;
