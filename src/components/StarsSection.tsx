import './Stars.css';
import './StarsSection.css';
import terminalResponses from '../data/terminalResponses.json'
import quotes from '../data/quotes.json'
import Terminal from './terminal';
import { useState } from 'react';

function StarsSection() {
    const stars = ['stars', 'starsBig'];

    const [lines, setLines] = useState(terminalResponses[0].text);
    const [isTypingDone, setIsTypingDone] = useState(false);

    const displayRandomQuote = () => {
        if (isTypingDone) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            if (quote) {
                setIsTypingDone(false);
                setLines(prev => [...prev, "---", quote.author + ": ", quote.quoteText]);
            }
        }
    };

    // const handleClearLines = () => {
    //     setLines([]);
    // };

    return (
        <section className='starsSection'>
            <div className='biosection'>
                <div className='bio text-center' onClick={() => displayRandomQuote()}>
                <Terminal lines={lines} onTypingDone={() => setIsTypingDone(true)} />
                </div>
            </div>
            <div className="bg-animation">
                {stars.map((item) => (
                    <div key={item} id={item}></div>
                ))}
            </div>
        </section>
    );
}

export default StarsSection;