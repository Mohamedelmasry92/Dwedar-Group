import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import About from './Components/About/About';
import Layout from '../src/Components/Layout/Layout'
import Contact from './Components/Contact/Contact';
import Team from './Components/Team/Team';
import Services from './Components/Services/Services';
import Service1Consultations from './Components/Service1Consultations/Service1Consultations';
import Service2Auditing from './Components/Service2Auditing/Service2Auditing';
import Service3Organizations from './Components/Service3Organizations/Service3Organizations';
import Service4Taxing from './Components/Service4Taxing/Service4Taxing';
import Service5Problems from './Components/Service5Problems/Service5Problems';
import Service6Improvement from './Components/Service6Improvement/Service6Improvement';
import NotFound from './Components/NotFound/NotFound';


function App() {

  let routers = createBrowserRouter([
    {path : '' , element: <Layout /> , children: [
      {index : true , element: <Home />},
      {path : 'about' , element: <About />},
      {path : 'contact' , element: <Contact />},
      {path : 'team' , element: <Team />},
      {path : 'services' , element: <Services />},
      {path : 'service-1' , element: <Service1Consultations />},
      {path : 'service-2' , element: <Service2Auditing />},
      {path : 'service-3' , element: <Service3Organizations />},
      {path : 'service-4' , element: <Service4Taxing />},
      {path : 'service-5' , element: <Service5Problems />},
      {path : 'service-6' , element: <Service6Improvement />},
      {path : '*' , element: <NotFound />},

    ]}
  ])

  return <RouterProvider router={routers} ></RouterProvider>
}

export default App;
