import { useContext } from "react";
import "./tahmin.css"
import { ThemeContext } from "../App";
const WEEK_DAYS = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const Tahmin = (data: any) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  const { theme } = useContext(ThemeContext);

  console.log(theme)
 return (
    <>
      <label className="title">Daily</label>
      {data?.data?.list?.map((item: any, idx: any) => {
        if(idx<7){
          return(
            <>
              <div className="daily-item">
                <img
                  src={`icons/${item.weather[0].icon}.png`}
                  className="icon-small"
                  alt="weather"
                />
                <label className="day">{forecastDays[idx]}</label>
                <label className="description">{item.weather[0].description}</label>
                <label className="min-max">
                  {Math.round(item.main.temp_max)}°C /
                  {Math.round(item.main.temp_min)}°C
                </label>
              </div>
              <div className="daily-details-grid">
                <div className={theme==false ? "daily-details-grid-item":""}>
                  <label>Basınç:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className={theme==false ? "daily-details-grid-item":""}>
                  <label>Nem:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className={theme==false ? "daily-details-grid-item":""}>
                  <label>Bulut:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={theme==false ? "daily-details-grid-item":""}>
                  <label>Rüzgar:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={theme==false ? "daily-details-grid-item":""}>
                  <label>Deniz seviyesi:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={theme==false ? "daily-details-grid-item":""}>
                  <label>Hissedilen:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </>
          )
        }
      })}
    </>
  );
};

export default Tahmin;
