import Carousel from "../components/Carosuel";
import React from 'react';



function maincontent() {

    return (
        <body>
            <div class="headerbackground">
                <h1 class="homeheadtitle"> Welcome To Life Sports</h1>
            <div>
        
            </div>

                <Carousel />

                <div>
                    <h2 class="headertitletwo">Who Are We?</h2>

                    <p class="paragraphone">We are a non-profit organization partnered with Red Ventures. Our overall goal to connect with and provide  the youth through sports which include our two academies LifeHoops and LifeKicks.</p>

                </div>
                <div>
                    <h3 class="headertitlethree">For Students and Coaches</h3>
                    <h4 class="headertitlefour">Access the beta excercise log here</h4>
                    <button class="logbutton" onClick="./components/exercises-list.component">Exercise Log</button>
                </div>
            </div>
        </body>
    )

}










export default maincontent;