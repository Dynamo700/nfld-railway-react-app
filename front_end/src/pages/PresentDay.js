import React from 'react';
import MyNavbar from '../components/Navbar';
import '../App.css';

function PresentDay() {
    return (
        <div>
            <MyNavbar />
        <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', margin: '20px 0', backgroundColor: 'black' }}>
            <div style={{textAlign: 'left'}}>
            <h1 className='h1_text'>Present day</h1>
            <p className='p_text'>
            As of today, several museums are available and static displays of locomotives of the Newfoundland railway exist. There is still interest in the Newfoundland railway both from
            railway enthusiasts and those who have worked on the railway. At the Avondale railway museum which also has one of the last stretches of track to exist on the island, they use
            the train that originally ran on the Trinity Loop to give passengers a ride on the stretch of track. Even after all of this time, you can still go for a trip on the railway in a sense.
            <br></br>
            <br></br>
            Even though the railway ceased operations nearly 40 years ago, there still remains some interest in the railway. Some dedicated modelers have made scale models of Locomotives
            that used to run on the railway, Interest in the railway is by no means dead. Some of the NF210 locomotives that ran on the railway still serve overseas 
            on certain railroads. For example, FCAB in Chile still uses several NF210's in their roster, albeit
            with several modifications such as standard gauge trucks, increased engine power and extra windows added to the rear for increased visibility. 
            </p>

            </div>
            
            <img src={`${process.env.PUBLIC_URL}/images/avondale_train_2.jpg`} 
        alt="This is the Avondale Express. A small train that orgianally ran on the Trinity Loop"
        style={{ width: '28%', height: '28%'}}>
        </img>
        <img src={`${process.env.PUBLIC_URL}/images/NF210_FCAB.png`} 
        alt="An NF210 in the year 2022, sporting FCAB livery in Chile."
        style={{ width: '40%', height: '40%'}}>
        </img>
          </div>

          </div>
 
    );
}

export default PresentDay;