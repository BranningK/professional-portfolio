import { Component } from "react";
import Carousel from 'react-elastic-carousel';
import githubDark from '../assets/logos/github/githubDark.png';

const breakpoints = [
  { width : 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4 },
]

export default class App extends Component {
  state ={
    items: [
      { id: 1, img: githubDark, alt: "Blah" , title: `item 1` },
      { id: 1, img: githubDark, alt: "Blah" , title: `item 1` },
      { id: 1, img: githubDark, alt: "Blah" , title: `item 1` },
      { id: 1, img: githubDark, alt: "Blah" , title: `item 1` },
      { id: 1, img: githubDark, alt: "Blah" , title: `item 1` },
      { id: 1, img: githubDark, alt: "Blah" , title: `item 1` },
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakpoints}>
        {items.map(item => <img className="carouselProject" key={item.id} src={item.img} alt={item.alt}/>)}
      </Carousel>
    )
  }

}