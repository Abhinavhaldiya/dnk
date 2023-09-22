import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  {HomeCarousalData} from './MainCarousalData.js'


const MainCarousal = () => {
    const items = HomeCarousalData.map((item)=> <img className="cursor-poiter -z-10" role='presentation' src={item.image} alt='/sdskfsgklg' width="400" height="300" />)
    return (<AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />)
    };
export default MainCarousal;