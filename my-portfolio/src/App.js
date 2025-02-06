import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
   <div>
    <Router>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/projects' element={<Projects></Projects>} ></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
      
    </Router>

<Footer></Footer>
   </div>
  );
}

export default App;
