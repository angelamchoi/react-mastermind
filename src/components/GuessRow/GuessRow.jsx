import React from 'react';

const GuessRow = (props) => (
    <div className ='component' id={`Guess Row${props.num}`}>
        Guess Row {props.num}
    </div>
);

export default GuessRow;