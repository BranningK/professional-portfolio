import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import Example from './components/Example';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Example />
      <Footer />
    </div>
  );
}

export default App;
