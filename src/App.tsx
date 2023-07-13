import { createContext, useState } from "react";
import React from "react";
import Theme from "./components/Theme";
import { Provider } from "react-redux";
import store from "./redux/store";

export const ThemeContext = createContext<any>(null);

function App() {
  const [theme, settheme] = useState<any>(false);

  const toggleTheme = () => {
    settheme((curr: any) => (curr === true ? false : true));
  };
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Theme />
        </ThemeContext.Provider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
