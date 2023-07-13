import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Tahmin from "./Tahmin";
import { fetchForecastData, fetchWeatherData } from "../redux/weatherReducer";

function Body() {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const dispatch = useAppDispatch();

  const cityName = useSelector((state: RootState) => state.city.cityName);
  const handleOnSearchChange = (value: any) => {
    if (value?.label?.length > 3) {
      dispatch(fetchWeatherData(value?.value));
      setTimeout(() => {
        dispatch(fetchForecastData(value?.value));
      }, 1000); // 1.5 saniye bekleme süresi (1500 milisaniye)
    }
  };
  const currentWeather1 = useSelector(
    (state: RootState) => state?.weather?.currentWeather
  );
  const forecast1 = useSelector(
    (state: RootState) => state?.weather?.currentForecast
  );
  useEffect(() => {
    setCurrentWeather("");
    setForecast("");
    handleOnSearchChange(cityName);
  }, [cityName]);

  console.log("cityName", cityName);
  useEffect(() => {
    setCurrentWeather(currentWeather1);
    setForecast(forecast1);
  }, [forecast1, currentWeather1]);

  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-md-6 my-auto">
          <div className="col-10 mx-auto">
            <Search />
          </div>
        </div>
        <div className="col-md-6 ">
          {currentWeather && (
            <CurrentWeather data={currentWeather} cityName={cityName} />
          )}
          {!currentWeather && (
            <div className="weather">
              <div className="top">
                <div>
                  <p className="city"></p>
                  <p className="weather-description"></p>
                </div>
                <img
                  alt="weather"
                  className="weather-icon"
                  src={`icons/unknown.png`}
                />
              </div>
              <div className="bottom">
                <p className="temperature" style={{ visibility: "hidden" }}>
                  00°C
                </p>
                <div className="details">
                  <div className="parameter-row">
                    <span
                      className="parameter-label"
                      style={{ visibility: "hidden" }}
                    >
                      Details
                    </span>
                  </div>
                  <div
                    className="parameter-row"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="parameter-label">Feels like</span>
                    <span
                      className="parameter-value"
                      style={{ visibility: "hidden" }}
                    >
                      00°C
                    </span>
                  </div>
                  <div
                    className="parameter-row"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value">00 m/s</span>
                  </div>
                  <div
                    className="parameter-row"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">00%</span>
                  </div>
                  <div
                    className="parameter-row"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">00 hPa</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {forecast && <Tahmin data={forecast} />}
      {!forecast && (
        <>
          <>
            {" "}
            <label className="title" style={{ visibility: "hidden" }}>
              Daily
            </label>
            <div className="daily-item">
              <img
                src={`icons/unknown.png`}
                className="icon-small"
                alt="weather"
              />
              <label className="day"></label>
              <label className="description"></label>
              <label className="min-max" style={{ visibility: "hidden" }}>
                °C / °C
              </label>
            </div>
            <div
              className="daily-details-grid"
              style={{ visibility: "hidden" }}
            >
              <div className="daily-details-grid-item">
                <label>Pressure:</label>
                <label></label>
              </div>
              <div className="daily-details-grid-item">
                <label>Humidity:</label>
                <label></label>
              </div>
              <div className="daily-details-grid-item">
                <label>Clouds:</label>
                <label>%</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Wind speed:</label>
                <label> m/s</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Sea level:</label>
                <label>m</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Feels like:</label>
                <label>°C</label>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
}

export default Body;
