import { useAppDispatch } from "../redux/store";
import { setCityName, fetchCityOptions } from "../redux/cityReducer";
import AsyncSelect from "react-select/async";
import { StylesConfig } from "react-select";
import { CSSProperties, useContext } from "react";
import { ThemeContext } from "../App";

function Search() {
  const dispatch = useAppDispatch();
  const updateCityName = (newCityName: string) => {
    dispatch(setCityName(newCityName));
  };

  const loadOptions = async (inputValue: string) => {
    if (inputValue.length > 3) {
      const options = await dispatch(fetchCityOptions(inputValue)).unwrap();
      return options;
    }
    return [];
  };
  const { theme } = useContext(ThemeContext);

  const customControlStyles: CSSProperties = {
    textDecorationColor: theme == true ? 'black' : '',
    backgroundColor: theme == true ? '#212529' : '',
    borderRadius:"15px",
    borderColor:theme == true ? "none" :"#adacac",

  }
  const selectStyle: StylesConfig = {
    control: (provided, state) => {
      return {
        ...provided,
        ...customControlStyles,
      };
    },
  };
  return (
    <div className="w-100">
      <AsyncSelect
        styles={selectStyle}
        className="rounded-pill"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        placeholder="Please type a city"
        onChange={(e: any) => {
          updateCityName(e);
        }}
      />
    </div>
  );
}

export default Search;
