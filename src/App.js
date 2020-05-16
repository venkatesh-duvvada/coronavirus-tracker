import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header";
import PaperComponent from "./components/papercomponent";
import { fetchWorldData, fetchIndiaData } from "./api/index.js";

import { Box, Typography } from "@material-ui/core";

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
    return (
      <Box align="center" justify="center">
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );

  return (
    <div className="App">
      <Header heading={"COVID-19 TRACKER"} />

      <PaperComponent data={world} />
      <PaperComponent data={india} />
    </div>
  );
}
