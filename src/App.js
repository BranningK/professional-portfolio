import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner'
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
