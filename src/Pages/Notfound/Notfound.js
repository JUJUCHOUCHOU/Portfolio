import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';
import'./style.scss';

function Notfound(){
    return(
        <div className="Notfound">
            <Navbar/>
            <div className="notFoundMain">
                <h1>Oups!</h1>
                <h6>La page que vous recherchez semble introuvable ...</h6>
                <Link className='NotfoundLink' to='/'>Retournez sur la page d'accueil.</Link>
            </div>
            <Footer/>
        </div>
    )
}
export default Notfound