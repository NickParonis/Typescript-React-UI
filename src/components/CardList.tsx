import Card from './Card.tsx';
import './Cardcontainer.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Cardsdata from '../data/cards.json'

const CardList = () => {
    const [cards, setCards] = useState([
            {color: "", icon: "", title: "", text: "", buttontext: ""},
    ]);
    useEffect( () => {
        setCards(Cardsdata.cardsdata)
        console.log(Cardsdata.cardsdata)
    }, []);
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