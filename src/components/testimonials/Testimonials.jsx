import './testimonials.css'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';

const testimonialData = [
    {
        name: "John Doe",
        feedback: "This is an amazing service! Highly recommend.",
        rating: 5
    },
    {
        name: "Jane Smith",
        feedback: "Very satisfied with the quality of work.",
        rating: 4
    },
    {
        name: "Alice Johnson",
        feedback: "Great experience from start to finish.",
        rating: 3
    }
]

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2, 
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true
    }

  return (
    <section id='testimonials' className='testimonials'>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h6>Testimonials</h6>
                    <h2>What People Say About Me</h2>
                </Col>
                <Col lg='6' className='m-auto'>
                    <Slider {...settings}>
                        {
                            testimonialData.map((item, index) => (
                                <TestimonialItem key={index} {...item} />
                            ))
                        }
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

const TestimonialItem = ({ name, feedback, rating }) => {
    return (
        <div className='single-testimonial'>
            <h5>{name}</h5>
            <p>{feedback}</p>
            <div className='rating'>
                {
                    Array.from({ length: rating }, (_, i) => (
                        <i key={i} className='ri-star-fill' />
                    ))
                }
                <p>{rating} out of 5 stars</p>
            </div>
        </div>
    )
}

export default Testimonials