import React from 'react';

type AlertProps = {
    text: string
}


const Alert: React.FC<AlertProps> = ({text}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    );
};

export default Alert;