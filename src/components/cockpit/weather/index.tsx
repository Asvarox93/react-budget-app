import React, { useEffect } from "react";
import axios from "axios";
import { initalWeather } from "../../interfaces/weather/weather_interface";
import WeatherPresentation from "./presentation";

const initWeather = {
  name: "",
  main: {
    temp: 0,
    humidity: 0
  },
  wind: {
    speed: 0
  },
  weather: [
    {
      icon: "",
      description: ""
    }
  ]
};

const Weather: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [weather, setWeather] = React.useState<initalWeather>(initWeather);
  const [coordinates, setCoordinates] = React.useState<{
    latitude: number;
    longitude: number;
  }>();
  const [coordinatesErrors, setCoordinatesErrors] = React.useState<string[]>(
    []
  );

  const CoordinatesError = (error: PositionError) => {
    let errors: string[] = [];
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errors.push("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        errors.push("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        errors.push("The request to get user location timed out.");
        break;
      default:
        errors.push("An unknown error occurred.");
        break;
    }

    if (errors.length > 0) setCoordinatesErrors(errors);
  };

  const coordinatesSuccess = ({ coords }: Position) => {
    const { latitude, longitude } = coords;
    setCoordinates({ latitude, longitude });
  };

  const getCurrentCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      coordinatesSuccess,
      CoordinatesError,
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  const getCurrentWeather = async () => {
    if (coordinates) {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          coordinates.latitude
        }&lon=${
          coordinates.longitude
        }&units=metric&APPID=7e61fbf284a02accf727a737a9c7626a`
      );
      setWeather(res.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentCoordinates();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCurrentWeather();
    // eslint-disable-next-line
  }, [coordinates]);

  return (
    <WeatherPresentation
      coordinatesErrors={coordinatesErrors}
      loading={loading}
      weather={weather}
    />
  );
};

export default Weather;
