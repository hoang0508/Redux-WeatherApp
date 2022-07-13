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
    const national = await WeatherApi.GET_NATIONAL_BYlOCATION({
      lat: response?.data?.lat,
      lon: response?.data?.lon,
    });
    return {
      ...response.data,
      national,
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
  //
  GET_NATIONAL_BYlOCATION: async (params) => {
    const response = await axios.get(urls.city, {
      params: {
        ...params,
        appid: apiKey,
      },
    });
    return {
      city:
        response?.data?.[0]?.local_names?.vi ||
        response?.data?.[0]?.local_names?.en,
      country: response?.data?.[0]?.country,
    };
  },
};

export default WeatherApi;
