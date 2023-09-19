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
                    <img src={Portrait} alt='Photo de julie Cohen'/>
                    <h1>Julie Cohen</h1>
                    <p className='MainText'>Intégrateur Web</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Welcome