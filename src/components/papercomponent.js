import React from "react";

import { Paper, Box, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";

export default function PaperComponent(props) {
  return (
    <Box align="center" justify="center" p={1} m={1}>
      <Paper elevation={5}>
        <Box p={1} m={1}>
          <Typography variant="h4" className="heading-component">
            {props.data.name}
          </Typography>
          <Box>
            <Typography>Confirmed</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.confirmedValue}
                duration={2.5}
                separator=","
              />
            </Typography>
          </Box>
          <Box>
            <Typography>Deaths</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.deathsValue}
                duration={2.5}
                separator=","
              />
            </Typography>
          </Box>
          <Box>
            <Typography>Recovered</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.recoveredValue}
                duration={2.5}
                separator=","
              />
              <Box>
                <Typography>Active</Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={
                      props.data.confirmedValue -
                      props.data.deathsValue -
                      props.data.recoveredValue
                    }
                    duration={2.5}
                    separator=","
                  />
                </Typography>
              </Box>
            </Typography>
            <Box>
              <Typography>
                Last Updated : {props.data.lastUpdatedTime}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
