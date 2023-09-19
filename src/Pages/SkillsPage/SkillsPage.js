import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Skills from '../../Components/Skills/Skills';
import Data from '../../Data/Data';
import'./style.scss';

function SkillsPage(){
  return(
    <div>
      <Navbar/>
      <div className='SkillsContent'>
        {Data.map((item)=>(
          <div className='Container'>
            <div className='icon'>{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
  )
}
export default SkillsPage