import React from 'react';
import MyNavbar from '../components/Navbar';
import UnityWebGL from '../unityWebGL'; // Adjust the path as necessary
import Map from '../Map';
import '../App.css';

function Home() {
  return (
    <div>
      <MyNavbar />
      <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: 'black' }}>
        <h1 className='h1_text'>Welcome to The Newfoundland railway educational app!</h1>
        <h2 className='h2_text'>Here you can learn about the locomotives that were used on the Newfoundland railway.</h2>
      </div>
      {/* Flex container for Unity WebGL and Instructions */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start' }}>
        {/* Unity WebGL application */}
        <UnityWebGL width="900" height="800" />
        {/* Instructions */}
        <div style={{ marginLeft: '20px', padding: '20px', backgroundColor: 'black' }}>
          <h1 className='h1_text'>Instructions</h1>
          <p className='p_text'>
            To move around the map, use the joystick.<br />
            To look around, use your finger or your mouse and pan on the screen.<br />
            To switch the locomotive model, press the "Switch Locomotive" button.<br />
            To sound the horn or whistle of the locomotive, press the "Horn / Whistle" button.<br />
            To reset your position on the map, press the reset button.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'left', textAlign: 'left', margin: '20px 0', backgroundColor: 'black' }}>
        <Map />
        <p className='p_text'>
          Using the interactive map, you can discover railway Museums and displays across the island!<br />
          Several Museums exist across the island which hold not only information about the railway but also artifacts and even preserved locomotives as well. One of the most 
          popular being the Coastal railway Museum which is built inside the largest former railway station on the island. It is also home to Engine 906 which is attached to a 
          mail car and a coach. In addition, a rail speeder that was used to help maintain the tracks can also be found there. In Carbonear, there is also a Museum, this is where 
          the only GMD G8 locomotive on the entire island can be found. In addition, there is also the Railway Society of Newfoundland which is home to engine 593, the only 
          remaining steam locomotive on the entirety of the island.
        </p>
      </div>
    </div>
    
  );
}

export default Home;
