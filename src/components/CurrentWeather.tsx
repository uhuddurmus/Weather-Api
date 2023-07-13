import { useSelector } from "react-redux";
import "./currentweather.css";
import { RootState } from "../redux/store";
import { useContext } from "react";
import { ThemeContext } from "../App";

const CurrentWeather = ( data: any) => {
  const cityName = useSelector((state: RootState) => state.city.cityName);
  const { theme } = useContext(ThemeContext);



  return (
    <div className={theme==true?"weather-bg-dark weather":"weather-bg weather"}>
      <div className="top">
        <div>
          <p className="city">{cityName?.label}</p>
          <p className="weather-description">{data?.data?.weather[0]?.description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data?.data?.weather[0]?.icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data?.data.main?.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Detaylar</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Hissedilen</span>
            <span className="parameter-value">
              {Math.round(data?.data.main?.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Rüzgar</span>
            <span className="parameter-value">{data?.data.wind?.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Nem</span>
            <span className="parameter-value">{data?.data.main?.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Basınç</span>
            <span className="parameter-value">{data?.data.main?.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
