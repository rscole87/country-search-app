import "./styles/App.css";
import "font-awesome/css/font-awesome.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
