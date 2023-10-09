import './Card.css'

interface Props {
    icon: string;
    title: string;
    text: string;
    color: string;
    buttontext: string;
    buttonURL: string;
}

const Card = ( props: Props ) => {
    return (
        <div className={"card__bx card__bx__" + props.color}>
            <div className="card__data">
                <div className="card__icon">
                    <i className={props.icon}></i>
                </div>
                <div className="card__content">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <a href={props.buttonURL} target="_blank">
                        {props.buttontext}
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Card;