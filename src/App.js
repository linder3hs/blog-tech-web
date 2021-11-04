// import "./App.css";
// import Home from "./views/Home";
import Contact from "./views/Contact";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Home /> */}
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
