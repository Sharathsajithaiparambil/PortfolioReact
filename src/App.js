
import './App.css';
import AboutPage from './pages/About';
import Banner from './pages/Banner';
import ContactForm from './pages/Contact';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Main/>
      <Routes>
           <Route path="/" element={ <Banner/>}/>
           <Route path='/about' element={<AboutPage/>}></Route>
           <Route path='/services' element={<Services/>}></Route>
           <Route path='/contact' element={<ContactForm/>}></Route>
      
        
     </Routes>
     <Footer/>
 </Router>



    </div>
  );
}

export default App;
