import Card from './Card.tsx';
import { useState } from 'react';

const CardList = () => {
    const [cards, setCards] = useState([
            {color: "--clr: #89ec5b", icon: "fa-solid fa-code", title: "My Projects", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
            {color: "color2", icon: "fa-solid fa-file", title: "My Resume", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
            {color: "color3", icon: "fa-brands fa-searchengin", title: "My Goals", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ])
    return (
        <>  
            {cards.map( (card) => 
                <Card key={card.title} title={card.title} text={card.text} icon={card.icon} color={card.color}/>
            )}
        </>
    );
}
export default CardList;