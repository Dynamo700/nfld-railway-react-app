import React from 'react';
import MyNavbar from '../components/Navbar';
import '../App.css';

function Locomotives() {
    return (
        <div>
            <div style={{ textAlign: 'left' }}>
            <MyNavbar />
                
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left', margin: '20px 0', backgroundColor: 'black' }}>
                <div style={{ textAlign: 'left', flex: 1 }}>
                    <h1 className='h1_text'>Diesel Locomotives</h1>
                    <p className='p_text'>
                        When the Newfoundland railway became a part of the Canadian National, two types of diesels were sent to the railway; the NF210, and the G8. The NF210 was built by General
                        Motors Diesel specifically for use on the island. They produce 1200 horsepower and they also had an exceptionally roomy cabin for a narrow gauge locomotive. As a result,
                        after the closure of the railway, several of the NF210s and rolling stock were sent to countries such as Chile, Nigeria, and Nicaragua.
                        <br /><br />
                        The G8's were based on a popular export model, they were low slung and produced 800 horsepower. They were primarily used for the branch lines
                        on the island. Unlike the NF210s, crews said that the G8's had an extremely rough ride. All but two were scrapped when the railway closed down.
                        Number 803 currently resides in Carbonear outside of the Carbonear railway station, and G8 number 805 is at ExpoRail, a large railway museum in
                        Montreal along with a few narrow gauge cars.
                    </p>
                    <img src={`${process.env.PUBLIC_URL}/images/diesel_loco_4.jpg`} alt="This is G8 number 805 on display in ExpoRail in Montreal." style={{ width: '34%', height: '34%', marginRight: '10px' }} />
                <img src={`${process.env.PUBLIC_URL}/images/diesel_loco_3.jpg`} alt="An NF210 in it's orginal green and yellow paintjob." style={{ width: '36%', height: '36%' }} />
                </div>
                
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', margin: '20px 0', backgroundColor: 'black'}}>
                <div>
                <h1 className='h1_text'>Steam Locomotives</h1>  
          <p className='p_text'>The Newfoundland railway used a variety of different locomotives. The first steam locomotives they received were in fact from the PEI railway which was upgrading their
            tracks from narrow gauge to standard gauge. The newfoundland railway inherited several different steam locomotives from a variety of manufacturers such as Baldwin Locomotive
            Works, American Locomotive works, and even the Hawthorn Leslie and Company from the United Kingdom. In addition, some locomotives were even created in Newfoundland in the Reid-Newfoundland
            Company Shops. Said locomotives were numbered 113 to 120 as well as 152 and 153. Of all the steam locomotives used on the railway, only one exists. Number 593. A 4-6-2 steam locomotive built
            by Baldwin Locomotive Works in 1920 and was retired in 1958. It can be found at the Railway Society of Newfoundland in Corner Brook where it is attached to a boxcar, a baggage car,
            a coach and a caboose.
        </p>
                    <img src={`${process.env.PUBLIC_URL}/images/steam_loco_3.jpg`} 
                        alt="This is Engine 317 at the St. John's railway station."
                        style={{ width: '40%', height: '40%'}}
                    />
                    <img src={`${process.env.PUBLIC_URL}/images/engine_593_1.jpg`} 
                        alt="This is Engine 317 at the St. John's railway station."
                        style={{ width: '40%', height: '40%'}}
                    />
                </div>
                </div>
        </div>
    );
}

export default Locomotives;
