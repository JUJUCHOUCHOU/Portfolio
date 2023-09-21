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
                    <p className='text'>"Après avoir travaillé dans la grande distribution et les services à la personne, j'ai choisi de me réorienter vers le domaine de la création de sites internet. Passionnée par l'apprentissage continu et convaincue des innombrables opportunités offertes par le métier d'intégrateur web, je souhaite poursuivre mon chemin dans cette voie. Dans cette optique, je suis à la recherche d'un contrat de professionnalisation qui me permettra de perfectionner mes compétences dans ce domaine."</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Welcome