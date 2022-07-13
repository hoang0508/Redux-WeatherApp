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
      ...response,
    };
  },
};

export default WeatherApi;
