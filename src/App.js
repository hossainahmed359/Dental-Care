import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';

function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  // console.log(services)

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