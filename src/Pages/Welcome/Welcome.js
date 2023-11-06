import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Portrait from '../../assets/PhotoPerso.jpg'
import'./style.scss';

function Welcome(){
    return(
        <div className='Welcome'>
            <Navbar/>
            <main className='WelcomeMain'>
                <div className='MainContainer'>
                    <div className='titleContainer'>
                    <img className='portrait'src={Portrait} alt='Portrait julie Cohen'/>
                    <div className='titleH'>
                    <h1>Julie Cohen</h1>
                    <h2>Intégrateur Web</h2>
                    <h3 className='parcours'>Mon parcours...</h3>
                    </div>
                    </div>
                    <p className='text'>"Aprés avoir travaillé en grande distribution et dans les services à la personne, j'ai décidé de faire une reconversion professionnelle comme intégrateur web avec OpenClassrooms, ce qui m'as permis de confirmer mes choix d'orientation dans ce domaine si vaste."</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Welcome