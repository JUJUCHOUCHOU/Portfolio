import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import'./style.scss';

function Contact (){
    return(
        <div className="ContactContainer">
            <Navbar/>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScAk-XesALfkMj0IjdqY-kATsSPaw6atzz-s_CASorHrymc7w/viewform?embedded=true" title="formulaire"width="100%" height="721" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
        <Footer/>
        </div>
    )
}

export default Contact