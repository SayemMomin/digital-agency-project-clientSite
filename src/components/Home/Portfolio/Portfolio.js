import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useSpring, animated} from 'react-spring'
import carousal1 from '../../../images/carousel-1.png';
import carousal2 from '../../../images/carousel-2.png';
import carousal3 from '../../../images/carousel-3.png';
import carousal4 from '../../../images/carousel-4.png';



const Portfolio = () => {
  const props = useSpring({opacity: 3, from: {opacity: 0}})
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   
    return (
        <section className="m-5 text-white" style={{backgroundColor: '#111430', height: '300px'}}>
            <div className="d-flex justify-content-center pb-2">
                <h4>Here are some of <span className="text-success">Our Works</span> </h4>
            </div>
            <div className=''>
            <Carousel responsive={responsive} style={props}>
            <div><img style={{height: "200px", width: "300px"}} src={carousal1} alt=""/></div>
            <div><img style={{height: "200px", width: "300px"}} src={carousal2} alt=""/></div>
            <div><img style={{height: "200px", width: "300px"}} src={carousal3} alt=""/></div>
            <animated.div style={props}><img style={{height: "200px", width: "300px"}} src={carousal4} alt=""/></animated.div>
            </Carousel>
            </div>
        </section>
    );
};

export default Portfolio;