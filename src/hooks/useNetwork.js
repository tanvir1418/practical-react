import { useEffect, useState } from "react";

const getNetworkConnection = () => {
  return (
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection ||
    null
  );
};

const getNetworkConnectionInfo = () => {
  const connection = getNetworkConnection();

  if (!connection) {
    return {};
  }

  return {
    rtt: connection.rtt, //connection round trip time
    type: connection.type, //connection type used to communicate with network (wifi. bluetooth, cellular etc...)
    downlink: connection.downlink, //estimated bandwidth
    downlinkMax: connection.downlinkMax, //maximum bandwidth
    saveData: connection.saveData, //true if user has set reduced usage option
    effectiveType: connection.effectiveType, //slow-2g,3g,4g
  };
};

const useNetwork = () => {
  const [state, setState] = useState({
    since: new Date().toString(),
    online: navigator.onLine,
    ...getNetworkConnectionInfo(),
  });

  useEffect(() => {
    console.log("useNetwork useEffect runs");

    const handleOnline = () => {
      console.log("You are connected.");
      setState((prevState) => ({
        ...prevState,
        online: true,
        since: new Date().toString(),
      }));
    };

    const handleOffline = () => {
      console.log("NOT connected.");
      setState((prevState) => ({
        ...prevState,
        online: false,
        since: new Date().toString(),
      }));
    };

    const handleConnectionChange = () => {
      setState((prevState) => ({
        ...prevState,
        ...getNetworkConnectionInfo(),
      }));
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    const connection = getNetworkConnection();
    connection?.addEventListener("change", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      connection?.removeEventListener("change", handleConnectionChange);
    };
  }, []);

  return state;
};

export default useNetwork;
