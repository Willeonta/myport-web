
import { Container, Row, Col } from 'reactstrap';
import './experiences.css';

const experiencesData = [
    {
        title: 'FullStack Developer',
        desc: 'A Full Stack Developer is a versatile software engineer who works on both the front-end and back-end of a web application. On the front-end, they are responsible for the user-facing part of the application, including the layout, design, and interactive elements. This often involves using languages like HTML, CSS, and JavaScript, along with frameworks such as React, Angular, or Vue.js. On the back-end, they handle the server-side logic, databases, and APIs that power the application. This could involve working with languages like Python, Java, Ruby, or Node.js, and frameworks like Django, Ruby on Rails, or Express. They also manage databases like MySQL, PostgreSQL, or MongoDB. A full-stack developer has a comprehensive understanding of the entire application stack, allowing them to troubleshoot issues, optimize performance, and contribute to all stages of the development lifecycle. Their broad skill set makes them a valuable asset to any development team.'
    },
    {
        title: 'AI Engineer',
        desc: 'An AI Engineer is a specialized professional at the intersection of software engineering, data science, and machine learning. Their primary role is to design, build, and maintain the infrastructure and applications that power AI and machine learning systems. This includes tasks such as data preprocessing, model training, and deployment. Unlike data scientists who focus on statistical analysis and model creation, an AI Engineer is a hands-on builder. They write clean, scalable code to bring models from research and development into production environments. They are skilled in MLOps (Machine Learning Operations), ensuring the seamless integration of models into existing software systems, and monitoring their performance. They work with a variety of tools and frameworks, including TensorFlow, PyTorch, and cloud platforms like AWS, Azure, and Google Cloud. Their ultimate goal is to bridge the gap between AI research and practical, real-world applications, creating robust, efficient, and reliable systems that leverage the power of artificial intelligence to solve complex problems.'
    },
]


const experiencesDatas = [
    {
        title: 'Data Scientist & Analyst',
        desc: 'A Data Scientist and Analyst is a professional who uses a blend of statistics, computer science, and domain expertise to extract insights from data. They are storytellers who translate complex data into actionable business intelligence. Data Analysts focus on "what happened" by cleaning, processing, and analyzing datasets to uncover trends and patterns. They create dashboards and reports to visualize their findings, helping stakeholders make informed decisions. Data Scientists, on the other hand, delve into "why it happened" and "what will happen." They build predictive models and machine learning algorithms to forecast future outcomes, optimize processes, and develop new products. Their work involves advanced statistical modeling, programming, and a deep understanding of algorithms.Both roles are critical in the data-driven world, working together to turn raw data into a strategic asset. While the Analyst provides a rearview mirror, the Scientist offers a roadmap for the future.'
     },
     {
        title: 'Ethical Hacker',
        desc: 'An ethical hacker is a cybersecurity professional who uses their skills to find vulnerabilities in computer systems, networks, and applications. Unlike malicious hackers, they do so with the explicit permission of the owner to improve security. They think like a hacker to proactively identify and fix weaknesses before they can be exploited by criminals. Their work involves penetration testing, where they simulate a real-world attack to assess a system\'s defenses. They might try to bypass firewalls, crack passwords, or exploit software flaws. Once a vulnerability is found, they report it to the organization along with recommendations for remediation. Their goal is not to cause harm, but to strengthen security posture, protecting sensitive data and preventing costly cyberattacks. They operate under a strict code of ethics and are crucial for modern cybersecurity.'
     },
]

const Experiences = () => {
  return (
    <section className='experience-section'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>My Experience</h2>
                </Col>

                <Col lg='6' md='6'>
                    <div className='experience-conatiner'>
                        {
                            experiencesData.map((item, index) => (
                                <ExperiencesItem
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))
                        }
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='experience-conatiner'>
                        {
                            experiencesDatas.map((item, index) => (
                                <ExperiencesItem
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}


const ExperiencesItem = ({ title,  desc }) => {
    return (
        <div className='single-experience'>
            <span className='experience-icon'>
                <i className='ri-book-open-fill'></i>
            </span>
            <h5>{title}</h5>
            <p>{desc.substring(0, 100) + '...'}</p>
        </div>
    )
}

export default Experiences