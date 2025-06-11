import React from 'react';

interface Props {
    className: string;
    actionCommand?: () => void;
}

const ActionButton: React.FC<Props> = ({ className, actionCommand }) => {
    return (
        <div className={`${className} commandButton`} onClick={actionCommand}>
            {className}
        </div>
    );
}

export default ActionButton;