import { Component } from "react";
import Carousel from 'react-elastic-carousel';
import githubDark from '../assets/logos/github/githubDark.png';
import weatherApp from '../assets/weatherPostSearch.png';

const breakpoints = [
  { width : 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4 },
];

export default class App extends Component {
  state ={
    items: [
      { id: 1, img: githubDark, alt: "Image of the project running in the terminal" , title: `README Generator` },
      { id: 2, img: weatherApp, alt: "Blah" , title: `Weather Forecast` },
      { id: 3, img: githubDark, alt: "Blah" , title: `Random Password Generator` },
      { id: 4, img: githubDark, alt: "Blah" , title: `Team Profile Generator` },
      { id: 5, img: githubDark, alt: "Blah" , title: `MusiQuest` },
      { id: 6, img: githubDark, alt: "Blah" , title: `Workplace Tracker` },
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakpoints}>
        {items.map(item => <div className="carouselProject"><img className="carouselImage" key={item.id} src={item.img} alt={item.alt}/><p className="carouselText">{item.title}</p></div>)}
      </Carousel>
    );
  };

};