import React, { useEffect, useState } from "react";
import SensorData from "./components/common/SensorData";  // Adjust path if necessary
; // Import your Firebase configuration

const SensorData = () => {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    // Set up a listener for real-time updates from Firebase
    const sensorRef = database.ref("sensor-data"); // Replace "sensor-data" with your path
    sensorRef.on("value", (snapshot) => {
      const data = snapshot.val(); // Get the sensor data from Firebase
      setSensorData(data); // Update state with the new data
    });

    // Clean up the listener on unmount
    return () => {
      sensorRef.off();
    };
  }, []);

  return (
    <div>
      <h1>Sensor Data</h1>
      {sensorData ? (
        <pre>{JSON.stringify(sensorData, null, 2)}</pre>
      ) : (
        <p>Loading sensor data...</p>
      )}
    </div>
  );
};

export default SensorData;
