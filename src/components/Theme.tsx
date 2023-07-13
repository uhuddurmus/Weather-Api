import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { NavbarMenu } from "./Menu";
import Body from "./body";

function Theme() {
  const cityName = useSelector((state: RootState) => state.city.cityName);

  return (
    <div
      style={{ minHeight: "100vh" }}
    >
      <div>
        <NavbarMenu />
      </div>
      <div id="body" className="container mt-5">
        <Body/>
      </div>
    </div>
  );
}

export default Theme;
