import logo from './logo.svg';
import './App.css';
import About from './About';
import Navbar from './Navbar';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Acievement';
import Certifications from './Certifications';
import Projects from './Projects';
import POR from './Por';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acc from './Accordion';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="mx-md-5 ">
      {/* <header className="App-header"> */}
      {/* <Acc/> */}
        <About/>
        <Education/>
        <Skills/>
        <Achievement/>
        
        <Projects/>
        <Certifications/>
        <POR/>
        </div>
        <Footer/>
      {/* </header> */}
    </div>
  );
}

export default App;
