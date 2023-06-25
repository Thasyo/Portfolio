import './App.css';

//router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Freelancer from './pages/Freelancer/Freelancer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/freelancer' element={<Freelancer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
