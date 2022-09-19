import React from "react";
import Container from "@mui/material/Container";
import NetworkOnline from "@mui/icons-material/Wifi";
import NetworkOffline from "@mui/icons-material/WifiOff";
import { makeStyles } from "@mui/styles";
import useNetwork from "../hooks/useNetwork";
import NetworkInfoTable from "./NetworkInfoTable";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  icon: {
    fontSize: "100px !important",
    margin: "0 auto",
  },
  iconOnline: {
    color: "green",
  },
  iconOffline: {
    color: "grey",
  },
  sinceText: {
    textAlign: "center",
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    margin: "20px 0px",
  },
});

const UseNetworkExample = () => {
  const classes = useStyles();
  const onlineIconStyles = `${classes.icon} ${classes.iconOnline}`;
  const offlineIconStyles = `${classes.icon} ${classes.iconOffline}`;

  const networkState = useNetwork();
  const { online, since } = networkState;

  return (
    <Container maxWidth="md">
      <div className={classes.container}>
        {online ? (
          <NetworkOnline className={onlineIconStyles} />
        ) : (
          <NetworkOffline className={offlineIconStyles} />
        )}
      </div>
      {since && (
        <p className={classes.sinceText}>
          {online ? "Online" : "Offline"} since {since}
        </p>
      )}
      <div>
        <h1 className={classes.heading}>Network Status</h1>
        <NetworkInfoTable data={networkState} />
      </div>
    </Container>
  );
};

export default UseNetworkExample;
