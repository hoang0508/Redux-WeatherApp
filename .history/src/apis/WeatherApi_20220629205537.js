import axios from "axios";
import urls, { apiKey } from "./Url";

const WeatherApi = {
  GET: async (params) => {
    const response = await axios.get(urls.weather, {
      params: {
        ...params,
        units: "metric",
        appid: apiKey,
      },
    });
    return {
      ...response.data,
    };
  },
  GET_CURRENT_POSITION: () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      })
    );
  },
};

export default WeatherApi;
