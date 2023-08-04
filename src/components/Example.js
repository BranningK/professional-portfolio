import { Component } from "react";
import Carousel from 'react-elastic-carousel';
import weatherApp from '../assets/weatherPostSearch.png';
import workplaceManager from '../assets/workplaceManager.png';
import READMEgen from '../assets/READMEgenIMG.png';
import passwordGen from '../assets/passwordGenIMG.png';
import teamGen from '../assets/teamGenAfter.png';
import musiQuest from '../assets/musiQuest.png';


const breakpoints = [
  { width : 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 }, 
  { width: 1200, itemsToShow: 4 },
];

export default class App extends Component {
  state ={
    items: [
      { id: 1, img: READMEgen, alt: "Image of the README generator running in the CLI." , title: `README Generator`, link: 'https://github.com/BranningK/READMEgen/' },
      { id: 2, img: weatherApp, alt: "Image of the current weather on the webpage." , title: `Weather Forecast`, link: 'https://branningk.github.io/weatherForecast/' },
      { id: 3, img: passwordGen, alt: "Image of the password generator site in the browser" , title: `Random Password Generator`, link: 'https://branningk.github.io/randomPasswordGen/' },
      { id: 4, img: teamGen, alt: "Image of the generated team profile in the browser." , title: `Team Profile Generator`, link: 'https://github.com/BranningK/teamProfileGen/' },
      { id: 5, img: musiQuest, alt: "Image of the MusiQuest app running in the browser." , title: `MusiQuest`, link :'https://altavada.github.io/musiquest/' },
      { id: 6, img: workplaceManager, alt: "Image of the workplace tracker running in the CLI." , title: `Workplace Manager`, link: 'https://github.com/BranningK/employeeTracker' },
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakpoints}>
        {items.map(item => <div className="carouselProject"><img className="carouselImage" key={item.id} src={item.img} alt={item.alt}/><a className="carouselText" href={item.link} target="_blank">{item.title}</a></div>)}
      </Carousel>
    );
  };

};