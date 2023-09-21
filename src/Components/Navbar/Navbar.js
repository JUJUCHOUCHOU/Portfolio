import Logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom';
import'./style.scss';


function Navbar(){
    const location = useLocation();
    const currentRoute = location.pathname;

    return(
        <nav className="navBar">
            <img src={Logo} className='navBarImage' alt='Logo Julie Cohen'/>
            <div className="navBarLink">
                <Link to="/" aria-label='link to welcome page' className={currentRoute === '/' ? 'activeLink' : 'inactiveLink'}>
                    Accueil
                </Link>
                <Link to="/SkillsPage" aria-label='link to skills page' className={currentRoute === '/SkillsPage' ? 'activeLink' : 'inactiveLink'}>
                    Compétences
                </Link>
                <Link to="/ProjectsPage" aria-label='link to projects page' className={currentRoute === '/ProjectsPage' ? 'activeLink' : 'inactiveLink'}>
                    Projets
                </Link>
                <Link to="/Contact" aria-label='link to contact page' className={currentRoute === '/Contact' ? 'activeLink' : 'inactiveLink'}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}
export default Navbar