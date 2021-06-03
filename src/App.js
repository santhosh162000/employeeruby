import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/login';
import Signup from './Components/signup/signup';
import registration from './Components/Registration/registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/registration" component={registration}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
