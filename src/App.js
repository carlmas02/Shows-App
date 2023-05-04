import './App.css';
import Home from './pages/Home';
import Show from './pages/Show';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import InputForm from './pages/InputForm';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    
      // {(localStorage.getItem("data") == null) ?localStorage.setItem('data',JSON.stringify([])):null}


    
  }, []);

  return (
    

    <div className="App">


      <BrowserRouter>
        
        <Navbar/>
        
        <Routes>

        <Route path = '/' exact element = {<Home/>} > </Route>

        <Route path = '/show/:id' exact element = {<Show/>} > </Route>

        <Route path = '/form/:id' exact element = {<InputForm/>} > </Route>

        <Route path = '/bookings' exact element = {<Booking/>} > </Route>

        </Routes>
      
      </BrowserRouter>

      {/* <Home /> */}

    </div>
  );
}

export default App;
