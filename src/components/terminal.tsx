import React, { useEffect, useState } from 'react';
import './terminal.css';

const Terminal: React.FC = () => {
    const lines: string[] = [
        "Hi, I'm Nick,",
        "I'm a senior fullstack developer.",
        "asdf",
        "You can find me on discord below",
    ];

  const typingSpeed = 50;   // milliseconds per character
  const linePause = 1000;   // pause after each line

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<string>('');
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    let timeout: NodeJS.Timeout;

    if (charIndex < lines[lineIndex].length) {
        timeout = setTimeout(() => {
            setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
        }, typingSpeed);
    } else {
        timeout = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
            setCurrentLine('');
            setCharIndex(0);
            setLineIndex((prev) => prev + 1);
        }, linePause);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines]);

    return (
        <div className="terminal">
            <div className="terminal-header">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
            </div>
            <div className="terminal-body">
                {displayedLines.map((line, idx) => (
                <div key={idx}>
                    <span className="prompt">
                        C:\www\NickTheGreek:
                    </span>
                    <span className="terminalResponseLine">
                        &nbsp; {line}
                    </span>
                </div>
                ))}
                <div>
                    <span className="prompt">C:\www\NickTheGreek:</span>{' '}
                    {lineIndex < lines.length ? currentLine : ''}
                    <div className="cursor" />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
