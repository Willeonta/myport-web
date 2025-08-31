import React, { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import aboutPic from '../../assets/profile/aboutImg.png';
import Education from './educations/Educations';
import './about.css';
import Educations from './educations/Educations';
import Skill from './skills/Skill';

const About = () => {

    const [ aboutFilter, setAboutFilter ] = useState('ABOUT');
    const [ showFullDescription, setShowFullDescription ] = useState(false);
    const shortDescription = "I am a dynamic Full-stack Software Engineer driven by a passion for creating innovative solutions that span the entire technological landscape. My expertise extends beyond crafting seamless user interfaces and robust backend systems into the fascin..."
    const fullDescription = "I am a dynamic Full-stack Software Engineer driven by a passion for creating innovative solutions that span the entire technological landscape. My expertise extends beyond crafting seamless user interfaces and robust backend systems into the fascinating realms of Data Science and Analytics, where I excel at extracting meaningful insights and driving data-informed decisions. With a strong enthusiasm for Artificial Intelligence and Machine Learning, I am constantly exploring and implementing cutting-edge algorithms to build intelligent applications that leverage data to solve complex real-world challenges. This unique blend of skills allows me to develop comprehensive, end-to-end solutions that are not only functional and scalable but also intelligent, insightful, and impactful. I thrive on connecting the dots between development, data, and advanced analytics to deliver truly transformative digital experiences."

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    }

  return (
    <section id='about'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>About Me</h2>
                </Col>

                <Col lg='4' md='3'>
                    <div className='about-btns d-flex flex-column align-items-center'>
                        <button className={`about-btn ${aboutFilter === 'ABOUT'? 'about-btn__active' : ''}`}onClick={()=> setAboutFilter('ABOUT')}>About me</button>
                        <button className={`about-btn ${aboutFilter === 'EDUCATION'? 'about-btn__active' : ''}`}onClick={()=> setAboutFilter('EDUCATION')}>My Education</button>
                        <button className={`about-btn ${aboutFilter === 'SKILLS'? 'about-btn__active' : ''}`}onClick={()=> setAboutFilter('SKILLS')}>My Skills</button>
                    </div>
                </Col>

                <Col lg='8' md='9'>
                    {
                        aboutFilter === 'ABOUT' && <div className='about-content__wrapper'>
                            <div className='about-img-container w-25'>
                                <img src={aboutPic + "?grayscale"} alt='My pic' className='w-100'/>
                            </div>
                            
                            <div className='about-text-content w-90'>
                                <h2>I'm Landry SAWA Jr. INGABIRE</h2>
                                <p>
                                    {showFullDescription ? fullDescription : shortDescription}

                                    <br />

                                    <button onClick={toggleDescription}>
                                        {showFullDescription ? "Minimize" : "Read more..."}
                                    </button>
                                </p>

                                <div className='social-links'>
                                    <h6 className='mb-3'>Connect with me on:</h6>
                                    <span><a href=''><i className='ri-facebook-circle-fill'></i></a></span>
                                    <span><a href=''><i className='ri-linkedin-box-fill'></i></a></span>
                                    <span><a href=''><i className='ri-twitter-x-line'></i></a></span>
                                    <span><a href=''><i className='ri-instagram-fill'></i></a></span>
                                </div>
                            </div>
                            <div className='clearfix'></div>
                        </div>
                    }
                    {
                        aboutFilter === 'EDUCATION' && <Educations />
                    }
                    {
                        aboutFilter === 'SKILLS' && <Skill />
                    }
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default About