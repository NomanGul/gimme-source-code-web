import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
function UseTechnologies() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#fbbf24", color: "white", fontWeight: "600" }}
        py={10}
      >
        <Box>
          <Typography variant="h4" textAlign="center" px={4}>
            Some technologies we use
          </Typography>
        </Box>
        <Grid container spacing={10} py={9} px={10}>
          <Grid item md={4}>
            <Box>
              <img src="https://futureideas.dev/react.png" Width={200}></img>
            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <img
                src="  https://futureideas.dev/python.png"
                Width={200}
                // width="100%"
              ></img>
            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <img
                src="https://futureideas.dev/tailwind.png"
                Width={200}
                // width="100%"
              ></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UseTechnologies;
