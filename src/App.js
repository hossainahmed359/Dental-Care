import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Service from './components/Service/Service';

function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  console.log(services)

  return (
    <div className="App">
      <h1 className="text-danger">Assignment 10</h1>
      {services.map(service => <Service key={service._id} service={service}></Service>)}
    </div>
  );
}

export default App;

// {services?.map(service => <Service key={service._id} service={service}></Service>)}