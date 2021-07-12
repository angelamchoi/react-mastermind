import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';

const GuessRow = (props) => (
    <div className ='component' id={`Guess Row${props.num}`}>
        Guess Row {props.num}
        <GuessPegs />
    </div>
);

export default GuessRow;