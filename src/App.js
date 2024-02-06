import React from 'react';
import UnityWebGL from './unityWebGL'; // Adjust the path as necessary

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'teal'}}>
      {/* Add your text here in a container */}
      <div style={{textAlign: 'center', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <h1>Welcome to The Newfoundland railway website!</h1>
        <h2>Here you can learn about the locomotives that were used on the Newfoundland railway.</h2>
        </div>
        <br></br>
        <div style={{textAlign: 'center', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <h1>History</h1>
        <p>The Newfoundland railway began construction in 1881 and it was completed in 1898. In order to cut down on costs at that time, the railway was built on 
          narrow gauge track which had a smaller width than the track on the mainland. The line stretched from St. John's to Port Aux Basques. When Newfoundland joined 
          Canada in 1949, the railway became a part of the Canadain National's system. CN would inherit 46 steam locomotives along with three center cab diesels. CN spent 
          heavily on improvments to the system. 53 new NF210 diesels began arriving in 1952, and full dieselization was achieved by 1957. Projects to improve the tracks 
          brought schedule and service improvments and until 1954 freight traffic increased. That was also the year that the Trans Canada Highway was opened. Since then, 
          rail traffic declined. As a result, the CN Caribou otherwise known as "The Newfie Bullet" was cancelled, and it made it's last run on June 3, 1969 having been 
          replaced by buses. Mixed trains continued to operate on branchlines until 1984, when their closure left only the mixed train between Bishops Falls and Corner Brook 
          to run until the end of the railway. Freight traffic caused revenue problems, and a move by CN's Terra Transport division to containerization proved to only be a temporay 
          solution. Finally on June 20 1988, the announcement was made that the railway would be shut down. The final train left Bishops Falls at 12:00 PM on September 30, 1988 and 
          arrived in Corner Brook at 7:00 PM. Terra Transport workers began taking up the tracks on October 12, 1988.</p>
          </div>
       
      
      <div style={{textAlign: 'center', margin: '20px 0'}}>

      </div>
      {/* Unity WebGL application */}
      <UnityWebGL />
    </div>
  );
}

export default App;
