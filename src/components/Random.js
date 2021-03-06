import React from 'react';

function Random(props) {
  let number = Math.floor(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} => {number}
      </p>
    </div>
  );
}
 export default Random;