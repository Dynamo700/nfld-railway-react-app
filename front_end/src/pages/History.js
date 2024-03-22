import React from 'react';
import MyNavbar from '../components/Navbar';


function history() {
    return (
        <div> {/* Start of the wrapper div */}
        <MyNavbar />
            
            <div style={{className: 'App', display: 'flex', alignItems: 'right', textAlign: 'left', margin: '20px 0', backgroundColor: 'black'}}>
                <div style={{textAlign: 'left'}}>
                    <h1 className='h1_text'>History</h1>
                    <br></br>
                    <p className='p_text'>
                        The Newfoundland railway began construction in 1881 and it was completed in 1898. In order to cut down on costs at that time, the railway was built on
                        narrow gauge track which had a smaller width than the track on the mainland. The line stretched from St. John's to Port Aux Basques. When Newfoundland joined
                        Canada in 1949, the railway became a part of the Canadian National's system. CN would inherit 46 steam locomotives along with three center cab diesels. 
                        <br></br>
                        <br></br>
                        CN spent heavily on improvements to the system. 53 new diesels began arriving in 1952, and full dieselization was achieved by 1957. Projects to improve the tracks
                        brought schedule and service improvements and until 1954 freight traffic increased.
                        <br></br>
                        <br></br>
                        That was also the year that the Trans Canada Highway was opened. Since then, 
                        rail traffic declined. As a result, the CN Caribou otherwise known as "The Newfie Bullet" was canceled, and it made its last run on June 3, 1969, having been 
                        replaced by buses. Mixed trains continued to operate on branchlines until 1984, when their closure left only the mixed train between Bishops Falls and Corner Brook 
                        to run until the end of the railway. 
                        <br></br>
                        <br></br>
                        Freight traffic caused revenue problems, and a move by CN's Terra Transport division to containerization proved to only be a temporary 
                        solution. Finally, on June 20, 1988, the announcement was made that the railway would be shut down. The final train left Bishops Falls at 12:00 PM on September 30, 1988, and 
                        arrived in Corner Brook at 7:00 PM. Terra Transport workers began taking up the tracks on October 12, 1988. Afterwards, all of the locomotives, rolling stock, along with 
                        pieces of track were auctioned off. Equipment or locomotives that could not be sold were dismantled for scrap.
                    </p>
                    <br></br>
                    <br></br>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/steam_loco_2.jpg`} 
                    alt="This is Engine 317 at the St. John's railway station."
                    style={{ width: '40%', height: '40%'}}
                    className="img-zoom"
                />
            </div>

            
            
        </div> 
    );
}

export default history;

