import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/login';
import registration from './Components/Registration/registration';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/profile';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/signup" component={registration}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
