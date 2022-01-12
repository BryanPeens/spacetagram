import React, { useEffect, useState } from "react";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider, Page } from "@shopify/polaris";
import { ImageCard } from "./components";
import fetchRoverData from "./api";

function App() {
  const [roverData, setRoverData] = useState([]);

  useEffect(() => {
    fetchRoverData().then((data) => {
      if (data?.photos) {
        setRoverData(data.photos);
      }
    });
  }, []);

  return (
    <AppProvider>
      <Page
        fullWidth
        title="Mars Rover Photos"
        subtitle="Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars"
      >
        <ImageCard />
        <ImageCard />
      </Page>
    </AppProvider>
  );
}

export default App;
