import './Header.css';
import { Container } from 'reactstrap';
import logo from '../../assets/images/brain.png';
import { useEffect, useRef } from 'react';

const navItems = [
    {
        title: 'Home',
        url: '#home',
        id: 1,
    },
    {
        title: 'About',
        url: '#about',
        id: 2
    },
    {
        title: 'Services',
        url: '#services',
        id: 3
    },
    {
        title: 'Projects',
        url: '#projects',
        id: 4
    },
    {
        title: 'Contact',
        url: '#contact',
        id: 5
    },
]

const Header = () => {

    const menuRef = useRef(null);

    const headerRef = useRef(null);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header__shrink')
            } else {
                headerRef.current.classList.remove('header__shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll', null)
        }
    }, []);

    const menuToggle = () => menuRef.current.classList.toggle('menu__active');

    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left:0,
            top: location - 70
        })
    };

  return (
    <header className='header' ref={headerRef} id='home'>
      <Container>
        <div className='navbar d-flex align-items-center justify-content-between'>
            <div className='logo d-flex align-center'>
                <img src={logo} alt='Logo' width={30} />
                <h3><a href='/'>SawaJr.</a></h3>
            </div>
            <div className='navbar_list' ref={menuRef} onClick={menuToggle}>
                <ul className='nav-list'>
                    {
                        navItems.map((item) =>(
                            <li className='nav-items' key={item.id}>
                                <a href={item.url} onClick={handleClick}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='nav-button d-flex align-items-center gap-4'>
                <button className='btn'>
                    <a href='/'>
                        My Github
                        <i className="ri-github-fill"></i>
                    </a>
                </button>
                <span className='mobile-nav'>
                    <i className="ri-menu-line" onClick={menuToggle}></i>
                </span>
            </div>
        </div>
      </Container>
    </header>
  )
}
export default Header