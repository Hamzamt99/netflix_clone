import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Favlist from './component/FavList/Favlist';



function App() {
  return (
  <>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/favlist'element={<Favlist/>}/>
  </Routes>
  </>
  )
}

export default App;
