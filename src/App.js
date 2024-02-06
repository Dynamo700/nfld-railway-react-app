import React from 'react';
import UnityWebGL from './unityWebGL'; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      {/* Add your text here in a container */}
      <div style={{textAlign: 'center', margin: '20px 0'}}>
        <h1>Welcome to The Newfoundland railway website!</h1>
        <p>Here you can learn about the locomotives that were used on the Newfoundland railway.</p>
      </div>
      {/* Unity WebGL application */}
      <UnityWebGL />
    </div>
  );
}

export default App;
