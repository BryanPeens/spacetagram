import React, { useEffect, useState } from "react";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import { LoadingPage, IndexPage } from "./components/index";
import fetchRoverData from "./api";

function App() {
  const [roverData, setRoverData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoverData().then((data) => {
      console.log(data);
      if (data?.photos) {
        setRoverData(data.photos);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AppProvider>
      {
        loading ? <LoadingPage /> :
          <IndexPage
            data={roverData}
            title="Mars Rover Photos"
            subtitle="Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars" />
      }
    </AppProvider>
  );
}

export default App;