/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const key = process.env.REACT_APP_WEATHER_API_KEY;
const serverUrl = process.env.REACT_APP_WEATHER_API_URL;

export async function meteoRequest(cityname) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: `${cityname}`,
          appid: key,
          units: 'metric',
          lang: 'fr'
        },
      },
    );
    return response;
  } catch (err) {
    return err.response;
  }
}
