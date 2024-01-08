import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory' 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={<WatchHistory/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
