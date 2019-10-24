import React from 'react';



function Carousel() {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="false">

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <img className="d-block w-100" src="https://pbs.twimg.com/media/DnYc6tBUUAAllZH.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://lifesports.org/wp-content/uploads/lifehoops-14.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://lifesports.org/wp-content/uploads/lifehoops-4.jpg" alt="Third slide" />
                </div>
            </div>
       
       
         
       {/*We have carousel controls that are buttons and let's us go from previous slide or next slide */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
     
   
    </div >
    )
}

export default Carousel;