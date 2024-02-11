import React from 'react';

const UnityWebGL = ({ src, width, height }) => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://simmer.io/@Saturn500/train-game"
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default UnityWebGL;