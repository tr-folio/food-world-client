import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import OrderFood from './Pages/OrderFood/OrderFood';

function App() {
  return (
    <div className="App">
      {/* <img src="https://i.ibb.co/Wg6sVpC/recipe-2508859.jpg"/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/order-food" element={<OrderFood/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
