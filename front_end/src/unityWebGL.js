import React from 'react';

const UnityWebGL = ({ src, width, height }) => {
  return (
    <div style={{ width: '300%', height: '300%', overflow: 'hidden' }}>
      <iframe src="https://i.simmer.io/@Saturn500/train-game-v6" title="Game that shows 3D models of trains" style={{ width: '960px', height:'600px' }}></iframe>
    </div>
  );
};

export default UnityWebGL;