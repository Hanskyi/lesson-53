import React from 'react';

const Number = () => {

    const randomNumbers: JSX.Element[] = [];
    const randomNumberSave: number[] = [];

    while (randomNumberSave.length < 5) {
        const randomNumber: number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

        if (!randomNumberSave.includes(randomNumber)) {
            randomNumberSave.push(randomNumber);
        }
    }

    randomNumberSave.sort((a, b) => a - b);

    for (let i: number = 0; i < 5; i++) {
        randomNumbers.push(
            <div key={i} className={`random-number random-number-${i}`}> {randomNumberSave[i]}</div>
        );
        console.log(randomNumberSave);
    }
    return <>{randomNumbers}</>;
}

export default Number;