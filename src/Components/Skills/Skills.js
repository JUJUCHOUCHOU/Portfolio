import './style.scss';

function Skills({title, content, icon}){
    return(
        <div className="CardContainer">
            <img src={icon}alt={title}/>
            <div className="CardInfo" aria-labelledby="project-title">
                <h3>{title}</h3>
                <p className="CardinfoText" aria-labelledby="info-card">{content}</p>
            </div>
        </div>
    )
}
export default Skills