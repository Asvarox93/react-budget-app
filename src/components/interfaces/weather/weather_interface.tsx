export interface Props {
  coordinatesErrors: string[];
  weather: initalWeather;
  loading: boolean;
}

export type initalWeather = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
};
