import React from 'react';

interface NumberProps {
    numbers: number[];
}

const Number: React.FC<NumberProps> = ({ numbers }) => {
    const numberElements: JSX.Element[] = [];

    for (let i = 0; i < numbers.length; i++) {
        numberElements.push(
            <div key={i} className="random-number">
                {numbers[i]}
            </div>
        );
    }

    return <>{numberElements}</>;
};

export default Number;