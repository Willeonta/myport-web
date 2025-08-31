
import { Container, Row, Col } from 'reactstrap'
import './services.css';

const servicesData = [
    {
        icon: 'ri-code-line',
        title: 'Web Design & Dev',
        fullDesc: 'Web design and development is the process of creating websites. Design focuses on the visual aesthetics and user experience—what users see and how they interact with the site. Development is the coding and programming that makes the website function, handling everything from back-end databases to front-end interactivity. ',
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'GenAI & AI Solutions',
        fullDesc: 'Generative Agentic AI Solutions combine generative AI\'s content creation with agentic AI\'s autonomous decision-making and goal execution. They leverage large language models to not only produce new text, images, or code but also to plan, reason, and take multi-step actions to achieve complex objectives with minimal human oversight.',
    },
    {
        icon: 'ri-computer-line',
        title: 'Data Science & Analysis',
        fullDesc: 'Data Science & Machine Learning involves using algorithms and statistical models to analyze and interpret complex data. It enables organizations to make data-driven decisions, predict trends, and automate processes. By leveraging large datasets and advanced analytics, businesses can uncover insights and drive innovation.',
    },
    {
        icon: 'ri-cloud-line',
        title: 'Sec & Cloud Solutions',
        fullDesc: 'Security & Cloud Solutions protect digital assets in cloud environments. They involve policies, technologies, and controls like encryption, access management, and threat detection. These solutions ensure data privacy, compliance, and safeguard applications and infrastructure against cyber threats in the ever-evolving cloud landscape.',
    },
    {
        icon: 'ri-landscape-line',
        title: 'FullStack Dev',
        fullDesc: 'A Full Stack Developer handles both front-end (user interface, experience) and back-end (server, database, application logic) development. They possess diverse skills, building complete web applications from start to finish, ensuring seamless functionality and user experience',
    },
    {
        icon: 'ri-search-line',
        title: 'SEO & Digital Market',
        fullDesc: 'SEO & Digital Marketing boosts online visibility and drives targeted traffic. It encompasses strategies like search engine optimization, social media marketing, content creation, and paid advertising to connect businesses with their audience and achieve marketing goals.',
    }
]

const Services = () => {
  return (
    <section id='services'>
        <Container>
            <Row>
                <Col lg='12' className='service-top mb-5'>
                    <h6>Features</h6>
                    <h2>What Services I provide.</h2>
                </Col>
                {
                    servicesData.map((item, index) => (
                        <ServicesItem 
                            key={index} 
                            icon={item.icon}
                            title={item.title}
                            desc={item.fullDesc.substring(0, 100) + '...'}
                        />
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

const ServicesItem= ({ icon, title, desc }) => {
    return (
        <Col lg='4' md='6' sm='6' className='mb-4'>
            <div className='single-service'>
                <span className='service-icon'>
                    <i className={icon}/>
                </span>
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
            </div>
        </Col>
    )
}
export default Services