import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { image } from '../images';
import '../banner/banner.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: image.security_img,
      caption: 'Our blockchain auditing app boasts robust, cutting-edge security measures to safeguard audit data, ensuring confidentiality, integrity, and compliance.1',
      name: 'Security',
    },
    {
      id: 2,
      image: image.transparency_img,
      caption: 'Our blockchain auditing app prioritizes security, ensuring the integrity and confidentiality of audit data.',
      name: 'Transparency'
    },
    {
      id: 3,
      image: image.scalability_img,
      caption: 'Our blockchain auditing app ensures the scalability needed to grow alongside business demands.',
      name: "Scalability",
    },
    {
      id: 4,
      image: image.accuracy,
      caption: 'Our blockchain auditing app ensures precise financial reporting, empowering informed decision-makin',
      name:" Accuracy",
    },
    {
      id: 5,
      image: image.cost_effectiveness_img,
      caption: 'Our blockchain auditing app reduces cost, enhances financial efficiency, and streamlines reporting.',
      name: 'Cost Effectiveness'
    },
    {
      id: 6,
      image: image.efficiency_img,
      caption: 'Our blockchain auditing app optimizes financial reporting, reducing time and costs.',
      name: 'Efficiency'
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id} className='mobile-card'>
          <h2>{slide.name}</h2>
          <p>{slide.caption}</p>
          <img src={slide.image} alt={`Slide ${slide.id}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
