import React from "react";

function CarouselContainer() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000" >
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="carousel-img" src="https://cdn.wallpapersafari.com/85/47/LIbvrV.jpg" alt="First slide" />
                    <em>Shubham Agarwal</em>
                    <h2 class="carousel-text">BTech Undergraduate and a Web Dev enthusiast from the CSE dept of BIT Mesra</h2>

                    <p><i class="social-icons fab fa-facebook-f"></i>
                        <i class="social-icons fab fa-twitter"></i>
                        <i class="social-icons fab fa-instagram"></i>
                        <i class="social-icons fas fa-envelope"></i> </p>
                </div>
                <div class="carousel-item">
                    <img class="carousel-img" src="https://cdn.wallpapersafari.com/85/47/LIbvrV.jpg" alt="Second slide" />
                    <em>Lokesh Sharma</em>
                    <h2 class="carousel-text">BTech Undergraduate and a Web Dev enthusiast from the CSE dept of BIT Mesra</h2>
                    <p><i class="social-icons fab fa-facebook-f"></i>
                        <i class="social-icons fab fa-twitter"></i>
                        <i class="social-icons fab fa-instagram"></i>
                        <i class="social-icons fas fa-envelope"></i> </p>
                </div>
                <div class="carousel-item">
                    <img class="carousel-img" src="https://cdn.wallpapersafari.com/85/47/LIbvrV.jpg" alt="Third slide" />
                    <em>Paritosh Dev</em>
                    <h2 class="carousel-text">BTech Undergraduate and a Web Dev enthusiast from the CSE dept of BIT Mesra</h2>
                    <p><i class="social-icons fab fa-facebook-f"></i>
                        <i class="social-icons fab fa-twitter"></i>
                        <i class="social-icons fab fa-instagram"></i>
                        <i class="social-icons fas fa-envelope"></i> </p>
                </div>
                <div class="carousel-item">
                    <img class="carousel-img" src="https://cdn.wallpapersafari.com/85/47/LIbvrV.jpg" alt="Fourth slide" />
                    <em>Kaushal Sethia</em>
                    <h2 class="carousel-text">BTech Undergraduate and a Web Dev enthusiast from the CSE dept of BIT Mesra</h2>
                    <p><i class="social-icons fab fa-facebook-f"></i>
                        <i class="social-icons fab fa-twitter"></i>
                        <i class="social-icons fab fa-instagram"></i>
                        <i class="social-icons fas fa-envelope"></i> </p>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    );
}

export default CarouselContainer;