import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Data from '../../Data/Data';
import'./style.scss';

function SkillsPage(){
  return(
    <div>
      <Navbar/>
      <div className='skillsContent'>
        {Data.map((item)=>(
          <div className='container'>
            <div className='icon'>{item.icon}</div>
          <div className='containerText'>  
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          </div>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
  )
}
export default SkillsPage