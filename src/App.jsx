import React from "react";
// import AppBar from './components/AppBar'
import DoForYou from "./components/DoForYou";
import { Box, Grid } from "@mui/material";

import ResponsiveAppBar from "./components/AppBar";
import HeroSectionOne from "./components/HeroSectionOne";
import PreviousWork from "./components/PreviousWork"
import UseTechnologies from "./components/UseTechnologies";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import "./App.css";

function App() {
  return (
    <React.Fragment >
      <ResponsiveAppBar />
      <HeroSectionOne />

      <DoForYou/>
      <PreviousWork/>

      <UseTechnologies/>

      <Benefits/>

      <Prices/>
    </React.Fragment>

    
  );
}

export default App;
