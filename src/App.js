import React from 'react';
import UnityWebGL from './unityWebGL'; // Adjust the path as necessary
import Map from './Map';


function App() {
  return (
    <div className="App" style={{ backgroundColor: 'teal'}}>
      {/* Add your text here in a container */}
      <div style={{textAlign: 'center', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <h1>Welcome to The Newfoundland railway website!</h1>
        <h2>Here you can learn about the locomotives that were used on the Newfoundland railway.</h2>
        </div>
        <UnityWebGL />
          {/* Unity WebGL application */}
        <br></br>

        <div>
            <Map />
          </div>
        
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        
        
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


          <div style={{display: 'flex', alignItems: 'center', textAlign: 'left', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        {/* <h1>Locomotives</h1> */}
        <p>The newfoundland railway used a variety of different locomotives. The first steam locomotives they recieved were in fact from the PEI railway which was upgrading their
          tracks from narrow guage to standard guage. The newfoundland railway inherited several differnet steam locomotives from a variety of manufacturers such as Baldwin Locomotive
          Works, American Locomotive works, and even the Hawthorn Leslie and Company from the United Kingdom. In addition, some locomotives were even created in Newfoundland in the Reid-Newfoundland Company Shops. Said 
          locomotives were numbered 113 to 120 as well as 152 and 153. Oh all the steam locomotives used on the railway, only one exists. Number 593. A 4-6-2 steam locomotive built
          by Baldwin Locomotive Works in 1920 and was retired in 1958. It can be found at the Railway Society of Newfoundland in Corner Brook where it is attached to a boxcar, a baggage car,
          a coach and a caboose. 
        </p>
        <img src={`${process.env.PUBLIC_URL}/images/engine_593_1.jpg`} 
        alt="This is Engine 593."
        style={{ width: '50%', height: '50%'}}>
        </img>
        </div>

          <div style={{textAlign: 'center', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <h1>Muesums</h1>
        <p>Several Muesums exist across the island which hold not only information about the railway but also artifacts and even perserved locomotives as well. One of the most popular
          being the Coastal railway Muesum which is built inside the largest former railway station on the island. It is also home to Engine 906 which is attached to a mail car and a
          coach. In addition, a rail speeder that was used to help maintain the tracks can also be found there. In Carbonear there is also a Muesum, this is where the only GMD G8 locomotive
          on the entire island can be found. In addition

    

        </p>
          </div>
          

          
          
    </div>


    
  );
}



export default App;
