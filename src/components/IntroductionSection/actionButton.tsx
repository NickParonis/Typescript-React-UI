import React from 'react';

interface Props {
    className: string;
    name: string;
    actionCommand?: () => void;
}

const ActionButton: React.FC<Props> = ({ className, name, actionCommand }) => {
    return (
        <div className={`${className} commandButton`} onClick={actionCommand}>
            {name}
        </div>
    );
}

export default ActionButton;