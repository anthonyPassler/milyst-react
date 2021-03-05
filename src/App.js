import './styles/App.scss';
import LandingPage from "./components/LandingPage/LandingPage.js";
import Lists from "./components/Lists/Lists.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
