import './footer.css';
import { Container } from 'reactstrap';


const newTime = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='pb-4'>
        <Container className='text-center footer'>
            <p>&copy;2019 - {newTime}, All Rights Reserved by SawaJr.</p>
        </Container>
    </footer>
  )
}
export default Footer