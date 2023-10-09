import Card from './Card.tsx';
import './Cardcontainer.css';
import { useState } from 'react';

const CardList = () => {
    const [cards, setCards] = useState([
            {color: "purple", icon: "fa-solid fa-code", title: "Github", text: "see what can I build, some code", buttontext: "visit github"},
            {color: "green", icon: "fa-solid fa-file", title: "My Resume", text: "Lorem Ipsum is simply dummy text of the p", buttontext: "show"},
            {color: "blue", icon: "fa-solid fa-file", title: "About me", text: "Who am I, what do I believe, what is fun and how to find me.", buttontext: "Contact"},
    ])
    return (
        <>  
            <div className='cardcontainer'>
                {cards.map( (card) => 
                    <Card key={card.title} title={card.title} text={card.text} icon={card.icon} color={card.color} buttontext={card.buttontext}/>
                )}
            </div>
        </>
    )
}
export default CardList;