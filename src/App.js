import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favlist from './component/FavList/Favlist';
import Header from './component/Header/Header';
import Home from './component/Home/Home';


function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/favlist'element={<Favlist/>}/>
  </Routes>
  </>
  )
}

export default App;
