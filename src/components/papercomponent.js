import React from "react";

import { Paper, Box } from "@material-ui/core";
import CountUp from "react-countup";
import "./papercomponent.css";

export default function PaperComponent(props) {
  return (
    <Box p={1} m={1}>
      <Paper elevation={5}>
        <Box className="paper-component">
          <Box className="heading-component"> {props.data.name}</Box>

          <Box>
            <Box className="heading-confirmed">Confirmed</Box>
            <Box className="heading-confirmed-value">
              <CountUp
                start={0}
                end={props.data.confirmedValue}
                duration={2.5}
                separator=","
              />
            </Box>
          </Box>
          <Box>
            <Box className="heading-deaths">Deaths</Box>
            <Box className="heading-deaths-value">
              <CountUp
                start={0}
                end={props.data.deathsValue}
                duration={2.5}
                separator=","
              />
            </Box>
          </Box>
          <Box>
            <Box className="heading-recovered">Recovered</Box>
            <Box className="heading-recovered-value">
              <CountUp
                start={0}
                end={props.data.recoveredValue}
                duration={2.5}
                separator=","
              />
              <Box>
                <Box className="heading-active">Active</Box>
                <Box className="heading-active-value">
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
                </Box>
              </Box>
            </Box>
            <Box className="last-updated">
              Last Updated : {props.data.lastUpdatedTime}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
