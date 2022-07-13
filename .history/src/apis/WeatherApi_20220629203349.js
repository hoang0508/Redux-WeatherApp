import axios from "axios";
import urls from "./Url";

const WeatherApi = {
  GET: async (params) => {
    const response = await axios.get(urls.weather, {
      params: {
        ...params,
      },
    });
  },
};

export default WeatherApi;
