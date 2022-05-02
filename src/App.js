import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Hotels from './Pages/Hotels/Hotels';
import Hotel from './Pages/Hotel/Hotel';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hotels' element={<Hotels/>} />
      <Route path='/hotels/:id' element={<Hotel/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
