import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  Icon
} from "@material-ui/core";
import { Props } from "../../../interfaces/weather/weather_interface";
import SnackBar from "../../../budget/addForm/presentation/snackBar";

const useStyle = makeStyles(theme => ({
  card: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    marginBottom: "1rem",
    height: 240,
    background:
      "linear-gradient(to bottom, #3f51b5 0%, #3f5199 41%, #3F51A2 100%)",
    boxShadow: "0 3px 5px 2px rgba(63,81,162, .3)",
    overflowY: "hidden",
    color: "#fff",
    position: "relative"
  },

  cardContent: {
    marginTop: 0,
    paddingTop: 0
  },
  media: {
    minheight: 50
  },
  temp: {
    marginTop: "1.4rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.8rem"
    }
  },
  icons: {
    color: "#fff",
    marginRight: "0.3rem"
  },
  weather: {
    display: "flex",
    flexBasis: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "0.6rem",

    [theme.breakpoints.down("xs")]: {
      marginTop: "0.2rem",
      flexWrap: "wrap"
    }
  }
}));

const WeatherPresentation: React.FC<Props> = ({
  coordinatesErrors,
  weather,
  loading
}) => {
  const classes = useStyle();

  if (loading)
    return (
      <Card className={classes.card}>
        <Typography>Weather</Typography>
        <SnackBar
          snackbar={coordinatesErrors.length > 0 ? true : false}
          errors={coordinatesErrors}
        />
        <Typography variant="h5" component="h5" align="center">
          Loading...
        </Typography>
      </Card>
    );

  return (
    <Card className={classes.card}>
      <Typography>Weather</Typography>
      <CardContent className={classes.cardContent}>
        <Typography variant="h3" component="h3" align="center">
          {weather.name}
        </Typography>
        <Typography
          className={classes.temp}
          variant="h4"
          component="h4"
          align="center"
        >
          {weather.main.temp} &#8451;
        </Typography>
        <div className={classes.weather}>
          <div className={classes.weather}>
            <img
              className={classes.media}
              src={
                weather.weather[0].icon
                  ? `https://openweathermap.org/img/w/${
                      weather.weather[0].icon
                    }.png`
                  : "#"
              }
              alt="Weather icon"
            />
            <Typography variant="body2" component="p" align="center">
              {weather.weather[0].description}
            </Typography>
          </div>
          <Typography variant="body2" component="p" className={classes.weather}>
            <Icon className={classes.icons}>invert_colors</Icon>
            {weather.main.humidity}
            {"%"}
          </Typography>
          <Typography variant="body2" component="p" className={classes.weather}>
            <Icon className={classes.icons}>toys</Icon> {weather.wind.speed}
            {" km/h"}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherPresentation;
