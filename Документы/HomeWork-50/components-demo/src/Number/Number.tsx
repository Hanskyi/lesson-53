import React from 'react';



const Number = () => {


const  randomNumbers:JSX.Element[] = []



        for( let i:number = 0; i < 5; i++) {
            const randomNumber: number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            randomNumbers.push (
                <div className="random-number">{randomNumber}</div>
            )
        }

    return <>{randomNumbers}</>


}

export default Number;