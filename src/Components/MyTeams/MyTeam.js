import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import samjhana from '../Images/samjhana.jpg';
import sachin from '../Images/sachin.jpg';
import suman from '../Images/suresh_pp.jpg';
import sumina from '../Images/sumina.jpg';
import suraj from '../Images/suraj.jpg';
// import './MyTeam.css';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [

    <div className="item m-4" data-value="1">
        <img src={samjhana} alt="NoImage" className="w-full h-64 object-cover " loading='lazy' />
        <h4><span className="text-xl text-blue-500">Samjhana Shrestha </span><br /> FrontEnd Developer </h4>
    </div>,
    <div className="item m-4 " data-value="2">
        <img src={suraj} alt="NoImage" className="w-full h-64 object-cover" loading='lazy'/>
        <h4><span className="text-xl text-blue-500">Suraj Timalsina </span><br /> Full-Stack Developer </h4>
    </div>,
    <div className="item m-4" data-value="3">
        <img src={suman} alt="NoImage" className="w-full h-64 object-cover" loading='lazy' />
        <h4><span className="text-xl text-blue-500">Suman Adhikari </span><br /> Full-Stack Developer </h4>
    </div>,
    <div className="item m-4 " data-value="4">
        <img src={sachin} alt="NoImage" className="w-full h-64 object-cover" loading='lazy'/>
        <h4><span className="text-xl text-blue-500">Sachin Devkota </span><br /> Marketing </h4>
    </div>,
    <div className="item m-4 " data-value="5">
        <img src={sumina} alt="NoImage" className="w-full h-64 object-cover" loading='lazy'/>
        <h4><span className="text-xl text-blue-500">Sumina Shrestha </span><br /> Finance and Revenue </h4>
    </div>,
];

const MyTeam = () => (
    <>
    <div className='flex justify-center font-mono text-3xl text-blue-400'>
        My Team
    </div>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={5000}
            autoPlayDirection="ltr" // Set direction to 'ltr' for forward autoplay
            infinite={true} // Ensures the carousel loops infinitely
            disableButtonsControls
        />
    </>
);

export default MyTeam;
