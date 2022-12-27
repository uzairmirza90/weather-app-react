import "./App.css";
import Weather from "./components/weather";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function App() {
  return (
    <div className="main">
      <div className="heading">
        <h1>
          Weather Forecast
          <WbSunnyIcon
            style={{ marginLeft: "15px" }}
            className="font"
            fontSize="inherit"
          ></WbSunnyIcon>
        </h1>
      </div>
      <div className="app">
        <Weather />
      </div>
    </div>
  );
}

export default App;
