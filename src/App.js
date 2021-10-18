import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import Services from './components/Services/Services';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/services"><Services></Services></Route>
          <Route path="/servicedetails/:serviceId"><ServiceDetails></ServiceDetails></Route>
          <Route path="/aboutus"><AboutUs></AboutUs></Route>
          <Route path="/doctors"><Doctors></Doctors></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
