import './Card.css'

interface Props {
    icon: string;
    title: string;
    text: string;
    color: string;
}

const Card = ( props: Props ) => {
    return (
        <div className='card__container'>
            <div className="card__bx" style={{ }}>
                <div className="card__data">
                    <div className="card__icon">
                        <i className={props.icon}></i>
                    </div>
                    <div className="card__content">
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                        <a href="#">Check More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;