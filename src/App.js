import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;

// {services?.map(service => <Service key={service._id} service={service}></Service>)}

/*
<Services></Services>
<AboutUs></AboutUs>
<Doctors></Doctors>
<Login></Login>
<NotFound></NotFound>
*/