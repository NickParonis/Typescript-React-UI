import './Stars.css';
import './StarsSection.css';
import terminalResponses from '../../data/terminalResponses.json'
import quotes from '../../data/quotes.json'
import Terminal from './terminal';
// import ActionButton from './actionButton';
// import { useState, useEffect } from 'react';
import { useState } from 'react';

function StarsSection() {
    const stars = ['stars', 'starsBig'];
    // const [commandButtons, setcommandButtons] = useState([{ClassName: "test", Name: "RandomQuote", Click: "displayRandomQuote"}]);
    
    const [lines, setLines] = useState(terminalResponses[0].text);
    const [isTypingDone, setIsTypingDone] = useState(false);
    // const [teminalMenu] = useState("mainMenu");

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

    const switchLightMode = () => {
        const root = document.documentElement;
        if (root.getAttribute('data-theme') === 'light') {
          root.removeAttribute('data-theme'); // back to dark default
        } else {
          root.setAttribute('data-theme', 'light');
        }

        const section = document.querySelector('.starsSection');
        if (section) {
            section.classList.toggle('starsSection-light');
        }

        const section2 = document.querySelector('.cardlist');
        if (section2) {
            section2.classList.toggle('cardlist-light');
        }

        const section3 = document.querySelector('.displayGlass');
        if (section3) {
            section3.classList.toggle('displayGlass-light');
        }

        // const section4 = document.querySelector('.prompt');
        // if (section4) {
        //     section4.classList.toggle('prompt-light');
        // }

        const section5 = document.querySelector('.bg-animation');
        if (section5) {
            section5.classList.toggle('bg-animation-light');
        }

    }

    // useEffect(() => {
    //     if (!isTypingDone) {
    //         console.log("command buttons added to state");
    //         setcommandButtons([]);
    //     };
    //     if (isTypingDone && teminalMenu == "mainMenu") {
    //         setcommandButtons([
    //             { ClassName: "RandomQuote", Name: "Earth Wisdom", Click: "displayRandomQuote" },
    //             { ClassName: "RandomQuote", Name: "Play a game", Click: "displayRandomQuote" }
    //         ]);
    //     }
    // }, [isTypingDone]);

    // const availableCommands: Record<string, () => void> = {
    //     displayRandomQuote: displayRandomQuote,
    // };

    // const handleClearLines = () => {
    //     setLines([]);
    // };

    return (
        <section className='starsSection'>
            <div className='biosection'>
                <div className='darkMode'>
                    <input type="checkbox" 
                        className="checkbox" 
                        id="checkbox"
                        onChange={() => switchLightMode()}>
                    </input>
                    <label htmlFor="checkbox" className="checkbox-label">
                        <i className="fas fa-sun"></i>
                        <i className="fas fa-moon"></i>
                        <span className="ball"></span>
                    </label>
                </div>
                <div className='displayGlass'
                onClick={() => displayRandomQuote()}>
                    <span className="shine"></span>
                    <Terminal lines={lines} onTypingDone={() => setIsTypingDone(true)} />
                    {/* <div className="commandContainer">
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
                    </div> */}
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