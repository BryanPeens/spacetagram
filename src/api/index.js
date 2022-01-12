const NASA_API_KEY = "ctd45rgg9NAoF6hkAMheuhC9V2u4ZVb5rBWUIcpq";
const NASA_ROVER_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-6-3&api_key=${NASA_API_KEY}`;

export default function fetchRoverData() {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  return fetch(NASA_ROVER_URL, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      throw new Error(`Encountered an error while fetching data : ${error}`);
    });
}
