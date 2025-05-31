import './Stars.css';
import './StarsSection.css';
import terminalResponses from '../data/terminalResponses.json'
import Terminal from './terminal';
import { useState } from 'react';

function StarsSection() {
    const stars = ['stars', 'starsBig'];

    const [lines, setLines] = useState(terminalResponses[0].text);

    const loadMessageById = (id: string) => {
        const msg = terminalResponses.find(m => m.id === id);
        if (msg) {
            setLines(prev => [...prev, ...msg.text]);
        }
    };

    const handleClearLines = () => {
        setLines([]);
    };

    return (
        <section className='starsSection'>
            <div className='biosection'>
                <div className='bio text-center'>
                <Terminal lines={lines} />
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