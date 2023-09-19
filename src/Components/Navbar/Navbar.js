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
                <Link to="/" className={currentRoute === '/' ? 'activeLink' : 'inactiveLink'}>
                    Accueil
                </Link>
                <Link to="/SkillsPage" className={currentRoute === '/SkillsPage' ? 'activeLink' : 'inactiveLink'}>
                    Compétences
                </Link>
                <Link to="/ProjectsPage" className={currentRoute === '/ProjectsPage' ? 'activeLink' : 'inactiveLink'}>
                    Projets
                </Link>
                <Link to="/Contact" className={currentRoute === '/Contact' ? 'activeLink' : 'inactiveLink'}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}
export default Navbar