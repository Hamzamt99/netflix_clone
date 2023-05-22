import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favlist from './component/FavList/Favlist';
import Navbar from './component/Nav/Navbar'
import Home from './component/Home/Home';


function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/favlist'element={<Favlist/>}/>
  </Routes>
  </>
  )
}

export default App;
