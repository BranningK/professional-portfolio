import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Carousel } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Carousel />
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
