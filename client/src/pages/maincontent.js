import Carousel from "../components/Carosuel";
import React from 'react';



function maincontent() {

    return (
        <body>
            <div>
                <h1> Welcome To Life Sports</h1>


                <Carousel />

                <div>
                    <h2>Who Are We</h2>

                    <p>We are a non-profit organization partnered with Red Ventures. Our overall goal to connect with youth through sports which include our two subcateroy academies LifeHoops and LifeKicks.</p>

                </div>
                <div>
                    <h3>For Students and Coaches</h3>
                    <h4>Access the beta excercise log here</h4>
                    <button onClick="./components/exercises-list.component">Exercise Log</button>
                </div>
            </div>
        </body>
    )

}










export default { maincontent };