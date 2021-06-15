import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '2px solid black',
        height: '500px',
        margin: '2em 0',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
