import React from 'react';
import UnityWebGL from './unityWebGL'; // Adjust the path as necessary
import Map from './Map';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'teal'}}>
      {/* Add your text here in a container */}
      <div style={{textAlign: 'center', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <h1>Welcome to The Newfoundland railway educational app!</h1>
        <h2>Here you can learn about the locomotives that were used on the Newfoundland railway.</h2>
        </div>
        <UnityWebGL />
          {/* Unity WebGL application */}
        <br></br>

        <div style={{display: 'flex', alignItems: 'left', textAlign: 'flex', margin: '20px 0', backgroundColor: 'lightgrey'}}>
          
            <Map />
            
        <p>Using the interactive map, you can discover railway Muesums and displays across the island!
          <br></br>
          Several Muesums exist across the island which hold not only information about the railway but also artifacts and even perserved locomotives as well. One of the most popular
          being the Coastal railway Muesum which is built inside the largest former railway station on the island. It is also home to Engine 906 which is attached to a mail car and a
          coach. In addition, a rail speeder that was used to help maintain the tracks can also be found there. In Carbonear there is also a Muesum, this is where the only GMD G8 locomotive
          on the entire island can be found. In addition, there is also the Railway Society of Newfoundland which is home to engine 593, the only remaining steam locomotive on the entirety
          of the island.</p>
          </div>
        
        <div style={{display: 'flex', alignItems: 'right', textAlign: 'left', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        
        <h1>History</h1>
        <br></br>
        <p>The Newfoundland railway began construction in 1881 and it was completed in 1898. In order to cut down on costs at that time, the railway was built on 
          narrow gauge track which had a smaller width than the track on the mainland. The line stretched from St. John's to Port Aux Basques. When Newfoundland joined 
          Canada in 1949, the railway became a part of the Canadain National's system. CN would inherit 46 steam locomotives along with three center cab diesels. CN spent 
          heavily on improvments to the system. 53 new NF210 diesels began arriving in 1952, and full dieselization was achieved by 1957. Projects to improve the tracks 
          brought schedule and service improvments and until 1954 freight traffic increased. That was also the year that the Trans Canada Highway was opened. Since then, 
          rail traffic declined. As a result, the CN Caribou otherwise known as "The Newfie Bullet" was cancelled, and it made it's last run on June 3, 1969 having been 
          replaced by buses. Mixed trains continued to operate on branchlines until 1984, when their closure left only the mixed train between Bishops Falls and Corner Brook 
          to run until the end of the railway. Freight traffic caused revenue problems, and a move by CN's Terra Transport division to containerization proved to only be a temporay 
          solution. Finally on June 20 1988, the announcement was made that the railway would be shut down. The final train left Bishops Falls at 12:00 PM on September 30, 1988 and 
          arrived in Corner Brook at 7:00 PM. Terra Transport workers began taking up the tracks on October 12, 1988. Afterwards, all of the locomotives, rolling stock, along with 
          pieces of track were auctioned off. Equipment or locomotives that could not be sold were dismantled for scrap.</p>
          <br></br>
          <br></br>
          <img src={`${process.env.PUBLIC_URL}/images/steam_loco_2.jpg`} 
        alt="This is Engine 317 at the St. John's railway station."
        style={{ width: '50%', height: '50%'}}>
        </img>    
          </div>


          
        
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/steam_loco_3.jpg`} 
        alt="This is Engine 317 at the St. John's railway station."
        style={{ width: '100%', height: '100%'}}>
        </img>
        <img src={`${process.env.PUBLIC_URL}/images/steam_loco_1.jpg`} 
        alt="This is Engine 317 at the St. John's railway station."
        style={{ width: '100%', height: '100%'}}>
        </img>
        <img src={`${process.env.PUBLIC_URL}/images/diesel_loco_1.jpg`} 
        alt="This is Engine 317 at the St. John's railway station."
        style={{ width: '100%', height: '100%'}}>
        </img>
        </div>
          <div style={{textAlign: 'left'}}>
          <h1>Locomotives</h1>  
          <p>The newfoundland railway used a variety of different locomotives. The first steam locomotives they recieved were in fact from the PEI railway which was upgrading their
          tracks from narrow guage to standard guage. The newfoundland railway inherited several differnet steam locomotives from a variety of manufacturers such as Baldwin Locomotive
          Works, American Locomotive works, and even the Hawthorn Leslie and Company from the United Kingdom. In addition, some locomotives were even created in Newfoundland in the Reid-Newfoundland 
          Company Shops. Said locomotives were numbered 113 to 120 as well as 152 and 153. Oh all the steam locomotives used on the railway, only one exists. Number 593. A 4-6-2 steam locomotive built
          by Baldwin Locomotive Works in 1920 and was retired in 1958. It can be found at the Railway Society of Newfoundland in Corner Brook where it is attached to a boxcar, a baggage car,
          a coach and a caboose. After the closure of the railway, several of the NF210s and rolling stock were sent to countries such as Chile, Nigeria and Nicaragua where some are 
          still operating to this day. As for the GMD G8's, all but two were scrapped. Number 803 currently resides in Carbonear outside of the Carbonear railway station, and G8 
          number 805 is at ExpoRail, a large railway mueseum in Montreal along with a few narrow gauge cars.
        </p>
            </div>                
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', margin: '20px 0', backgroundColor: 'lightgrey'}}>
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/trinity_loop_1.jpg`} 
        alt="This is Engine 317 at the St. John's railway station."
        style={{ width: '90%', height: '90%'}}>
        </img>
        <img src={`${process.env.PUBLIC_URL}/images/trinity_loop_2.jpg`} 
        alt="This is Engine 317 at the St. John's railway station."
        style={{ width: '90%', height: '90%'}}>
        </img>
        
        </div>
        <div style={{textAlign: 'left'}}>
            <h1>Trinity Loop</h1>
        <p>
          The Trinity Loop was created as a result of a problem when attempted to bring a train to the town of Trinity. The town was loacted along the coast and is surronded by steep
          hills which would have made teh trip by train impossible. The solution was a two kilometer extension that would loop around a nearby pond and gradually lower the railway
          tracks to an acceptable elevation. To do this, the Reid Company hired enginner J.P Powell to design what would later become known as "The Trinity Loop"
          <br></br>
          <br></br>
          Powell designed a system where the incoming tracks in the northwest would cross over a valley, circle around the outside of a pond and then pass under itself while leaving 
          the valley. The circumference of the loop was a little more than 2000 meters, the total elevation drop was around 10.3 meters and it rotated the tracks a total of 310 
          degrees. The loop was very unique and unusual feature to Newfoundland but was similar to features commonly seen in the mountain passes in western Canada.
          <br></br>
          After closing, former rail worker Clayton Cook began organizing campiagns and petitions to perserve the loop. With the help of several politicians, Terra Transport
          transferred ownership of the loop to the town of Trinity. It wasn't too long after this that Francis Kelly would purchase the loop and turned the area into an 
          amusment park which included boat rides, amusment rides such as a ferris wheel, a mueseum and even a small train ride around the loop using a small train made from a 
          maintaince speeder. In Febuary of 1988, the Trinity Loop was registered as a hertiage structire helping to perserve its history and structure from drastic change.
          <br></br>
          <br></br>
          In September of 2010 however, Hurricane Igor made landfall in the province, earning it the title as the most destructive tropical cyclone to hit the island. The storm was
          was devasating to the Trinity Loop. Extensive rainfall caused the river flowing through the park to wash away nearly 100 feet of tracks as well as spread over any and all
          remaining features of the park. After the previous owner defaulted on payments shortly after the park had closed in 2004, the land was transferred to the Provincial Government.
          Several people had tried to reopen the park, but none had been successful. To this day, the remains of the Trinity Loop are
        </p>
        </div>
          </div>
    </div>
  );
}

export default App;
