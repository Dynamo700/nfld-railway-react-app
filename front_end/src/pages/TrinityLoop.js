import React from 'react';
import MyNavbar from '../components/Navbar';
import '../App.css';

function TrinityLoop() {
    return (
        <div>
        <MyNavbar />
        <div style={{className: 'App', display: 'flex', alignItems: 'right', textAlign: 'left', margin: '20px 0', backgroundColor: 'black'}}>
                <div style={{textAlign: 'left'}}>     
                    <h1 className='h1_text'>Trinity Loop</h1>
                    <br></br>
                    <p className='p_text'>
          The Trinity Loop was created as a result of a problem when attempting to bring a train to the town of Trinity. The town was located along the coast and is surrounded by steep
          hills which would have made the trip by train impossible. The solution was a two kilometer extension that would loop around a nearby pond and gradually lower the railway
          tracks to an acceptable elevation. To do this, the Reid Company hired engineer J.P Powell to design what would later become known as "The Trinity Loop"
          <br></br>
                        <br></br>
          Powell designed a system where the incoming tracks in the northwest would cross over a valley, circle around the outside of a pond and then pass under itself while leaving 
          the valley. The circumference of the loop was a little more than 2000 meters, the total elevation drop was around 10.3 meters and it rotated the tracks a total of 310 
          degrees. The loop was a very unique and unusual feature to Newfoundland but was similar to features commonly seen in the mountain passes in western Canada.
          <br></br>
          After the closure of the railway, former rail worker Clayton Cook began organizing campaigns and petitions to preserve the loop. With the help of several politicians, 
          Terra Transport transferred ownership of the loop to the town of Trinity. It wasn't too long after this that Francis Kelly would purchase the loop and turned the area 
          into an amusement park which included boat rides, amusement rides such as a ferris wheel, a museum and even a small train ride around the loop using a small train made 
          from a maintenance speeder. In February of 1988, the Trinity Loop was registered as a heritage structure helping to preserve its history and structure from drastic change.

          <br></br>
          <br></br>
          In September of 2010 however, Hurricane Igor made landfall in the province, earning it the title as the most destructive tropical cyclone to hit the island. The storm was
          was devastating to the Trinity Loop. Extensive rainfall caused the river flowing through the park to wash away nearly 100 feet of tracks as well as spread over any and all
          remaining features of the park. After the previous owner defaulted on payments shortly after the park had closed in 2004, the land was transferred to the Provincial Government.
          Several people had tried to reopen the park, but none had been successful. To this day, the remains of the Trinity Loop are still present, however nothing has been done
          with the park.
                    </p>
                    
                </div>
                
            <img src={`${process.env.PUBLIC_URL}/images/trinity_loop_1.jpg`} alt="This is Engine 317 at the St. John's railway station." style={{ width: '35%', height: '35%' }} />
            </div>

            </div>                     
          
    );
}

export default TrinityLoop;