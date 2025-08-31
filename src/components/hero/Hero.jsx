import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import CV from '../../assets/cv/CV.pdf';
import me from '../../assets/images/hero.jpg';
import img1 from '../../assets/images/23.jpg'
import img2 from '../../assets/images/33.jpg'
import img3 from '../../assets/images/38.jpg'
import img4 from '../../assets/images/43.jpg'
import './Hero.css';

const date = new Date();

const currentTime = date.getHours();

let greeting;

if (currentTime < 12) {
    greeting = "Good Morning";
} else if (currentTime < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

const imagData = [
    {
        id:1,
        picImg: me
    },
    {
        id:2,
        picImg: img1
    },
    {
        id:3,
        picImg: img2
    },
    {
        id:4,
        picImg: img3
    },
    {
        id:5,
        picImg: img4
    }
]

const Hero = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        swipeToSlide: true
    }

  return (
    <section className='hero__section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='content'>
                        <p className='mb-3'>Welcome To My World</p>
                        <h5 className='mb-4'>{greeting} My People!!!</h5>
                        <h2 className='hero-name mb-5'>I'm <span> Landry SAWA Jr. INGABIRE</span></h2>
                        <p>
                            I'm a <span className='hero-name2'>Full-stack Software Engineer</span> skilled in building robust web solutions. 
                            My passion extends to <span className='hero-name2'>Data Science & Analytics and AI/Machine Learning</span>, 
                            leveraging data and intelligence to create impactful applications from end-to-end.
                        </p>

                        <div className='mt-5 hero-buttons d-flex align-items-center gap-4'>
                            <button className='btn btn-cv'>
                                <a href={CV} download>Hire Me</a>
                            </button>
                            <button className='btn btn-contact'>
                                <a href=''>Contact Me</a>
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <Slider {...settings}>
                        {imagData.map(item => (
                            <HeroImage key={item.id} picImg={item.picImg} />
                        ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

const HeroImage = ({ picImg }) => {
    return (
        <div className='hero-image'>
            <img src={picImg + "?grayscale"} alt='Hero Pic' />
        </div>
    )
}
export default Hero