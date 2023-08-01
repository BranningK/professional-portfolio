import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
// import { Projects } from './components/Projects';
// import { Footer } from './components/Footer';
import Example from './components/Example';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Example />
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
