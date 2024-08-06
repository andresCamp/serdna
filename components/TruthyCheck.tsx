import React from 'react';



const checkIfLessThan = (left: number, right: number): boolean => {
    return left < right;
};

const TruthyCheck: React.FC<{}> = ({ }) => {
    let left = 1
    let right = 1
    const isTruthy = checkIfLessThan(left, right);

    return (
        <div className='text-white'>
            <p>Is {left} less than {right}? {isTruthy.toString()}</p>
        </div>
    );
};

export default TruthyCheck;