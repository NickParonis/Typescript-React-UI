import Card from './Card.tsx';
import './Cardcontainer.css';
import { useState } from 'react';

const CardList = () => {
    const [cards, setCards] = useState([
            {color: "purple", icon: "fa-solid fa-code", title: "My Projects", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
            {color: "green", icon: "fa-solid fa-file", title: "My Resume", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
            {color: "blue", icon: "fa-brands fa-searchengin", title: "My Goals", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ])
    return (
        <>  
            <div className='cardcontainer'>
                {cards.map( (card) => 
                    <Card key={card.title} title={card.title} text={card.text} icon={card.icon} color={card.color}/>
                )}
            </div>
        </>
    );
}
export default CardList;