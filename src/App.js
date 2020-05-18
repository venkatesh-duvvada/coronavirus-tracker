import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header";
import PaperComponent from "./components/papercomponent";
import Update from "./components/update";
import { fetchWorldData, fetchIndiaData } from "./api/index.js";

import { Box, Grid } from "@material-ui/core";

export default function App() {
  const [world, setWorld] = useState({});
  const [india, setIndia] = useState({});

  useEffect(() => {
    const fetchWorldDataNew = async () => {
      const worldData = await fetchWorldData();

      setWorld(worldData);
    };

    fetchWorldDataNew();

    const fetchIndiaDataNew = async () => {
      const indiaData = await fetchIndiaData();
      setIndia(indiaData);
    };
    fetchIndiaDataNew();
  }, []);

  if (!(world.confirmedValue && india.confirmedValue))
    return <Box className="loading">Loading...</Box>;

  return (
    <div className="App">
      <Header heading={"COVID-19 TRACKER"} />

      <Update />

      <Grid container>
        <Grid item lg={6} sm={12}>
          <PaperComponent data={india} />
        </Grid>
        <Grid item lg={6} sm={12}>
          <PaperComponent data={world} />
        </Grid>
      </Grid>
    </div>
  );
}
