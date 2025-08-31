import { Container, Row, Col } from 'reactstrap';
import './projects.css';

import img01 from '../../assets/projectImgs/1.png';
import img02 from '../../assets/projectImgs/2.png';
import img03 from '../../assets/projectImgs/4.png';
import ProjectsCard from './projectCard/ProjectsCard';


const projectsData = [
  {
    imgUrl: img01,
    title: 'Travel Platform',
    url: '/travel'
  },
  {
    imgUrl: img02,
    title: 'E-commerce Website',
    url: '/ecommerce'
  },
  {
    imgUrl: img03,
    title: 'Restaurant Website',
    url: '/restaurant'
  }
]


const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <Row>
          <Col lg='12' className='projects-top mb-5'>
            <h2>My Projects</h2>
            <h6>Explore my projects by clicking on it.</h6>
          </Col>

          {
            projectsData.map((item, index) => (
              <ProjectItem 
                key={index}
                imgUrl={item.imgUrl}
                title={item.title}
                url={item.url}
              />
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

const ProjectItem = ({ imgUrl, title, url }) => {
  return (
    <Col lg='4' md='6' sm='6'>
      <div className='p_list'>
        <ProjectsCard 
          imgUrl={imgUrl}
          title={title}
          url={url}
        />
      </div>
    </Col>
  )
}
export default Projects