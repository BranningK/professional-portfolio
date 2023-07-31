import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
// import { Projects } from './components/Projects';
// import { Footer } from './components/Footer';
import Carousel from 'react-elastic-carousel';
import Item from './components/Item'

const breakpoints = [
  { width : 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4 },
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Carousel breakPoints={breakpoints}>
        <Item>item 1</Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Carousel>
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
