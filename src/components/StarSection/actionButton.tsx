import React from 'react';
import './terminal.css';

interface Props {
    className: string;
    actionCommand?: () => void;
}

const ActionButton: React.FC<Props> = ({ className, actionCommand }) => {
    return (
        <div className={className} onClick={actionCommand}></div>
    );
}

export default ActionButton;