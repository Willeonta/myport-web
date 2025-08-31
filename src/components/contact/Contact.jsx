import Form from '../form/Form';
import './contact.css';
import { Container, Row, Col } from 'reactstrap';

const contactData = [
  {
    title: 'Address',
    info: 'Kampala, Uganda',
    link: 'https://www.google.com/maps/place/Kampala,+Uganda'
  },
  {
    title: 'Call & WhatsApp',
    info: '+256 776 05007',
    link: 'https://wa.me/25677605007'
  },
  
]

const InfoData = [
  {
    title: 'Email',
    info: 'landryingabire065@gmail.com',
    link: 'mailto:landryingabire065@gmail.com'
  },
  {
    title: 'LinkedIn',
    info: 'Landry Ingabire',
    link: 'https://www.linkedin.com/in/landryingabire605/'
  },
]


const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 cont'>
            <h2>Get in Touch</h2>
            <h6>Feel free to reach out for collaborations or just a chat!</h6>
          </Col>
          <Col lg='6' md='6'>
            <div className='contact-container d-flex align-items-center gap-5'>
              {
                contactData.map((item, index) => (
                  <div className='single-info__box w-50' key={index}>
                    <h6>{item.title}:</h6>
                    <p>
                      <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.info}</a>
                    </p>
                  </div>
                ))
              }
            </div>
            <div className='contact-container d-flex align-items-center gap-5'>
              {
                InfoData.map((item, index) => (
                  <div className='single-info__box w-50' key={index}>
                    <h6>{item.title}:</h6>
                    <p>
                      <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.info}</a>
                    </p>
                  </div>
                ))
              }
            </div>
          </Col>
          <Col lg='6' md='6'>
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact;