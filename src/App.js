import "./App.css";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Switch> */}
      <div className="App">
        <Route exact path="/" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
      </div>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
