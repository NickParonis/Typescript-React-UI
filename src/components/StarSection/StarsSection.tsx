import './Stars.css';
import './StarsSection.css';
import terminalResponses from '../../data/terminalResponses.json'
import quotes from '../../data/quotes.json'
import Terminal from './terminal';
import ActionButton from './actionButton';
import { useState, useEffect } from 'react';

function StarsSection() {
    const stars = ['stars', 'starsBig'];
    const [commandButtons, setcommandButtons] = useState([{ClassName: "test", Name: "RandomQuote", Click: "displayRandomQuote"}]);

    const [lines, setLines] = useState(terminalResponses[0].text);
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [teminalMenu] = useState("mainMenu");

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

    useEffect(() => {
        if (!isTypingDone) {
            console.log("command buttons added to state");
            setcommandButtons([]);
        };
        if (isTypingDone && teminalMenu == "mainMenu") {
            setcommandButtons([
                { ClassName: "RandomQuote", Name: "Earth Wisdom", Click: "displayRandomQuote" },
                { ClassName: "RandomQuote", Name: "Play a game", Click: "displayRandomQuote" }
            ]);
        }
    }, [isTypingDone]);

    const availableCommands: Record<string, () => void> = {
        displayRandomQuote: displayRandomQuote,
    };

    // const handleClearLines = () => {
    //     setLines([]);
    // };

    return (
        <section className='starsSection'>
            <div className='biosection'>
                <div className='displayGlass'>
                    <span className="shine"></span>
                    <Terminal lines={lines} onTypingDone={() => setIsTypingDone(true)} />
                    <div className="commandContainer">
                        <div className="commands">
                            {commandButtons.map((commandButton) => 
                                <ActionButton 
                                    key={commandButton.Name}
                                    className={commandButton.ClassName} 
                                    name={commandButton.Name}
                                    actionCommand={availableCommands[commandButton.Click]} 
                                />
                            )}
                        </div>
                    </div>

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