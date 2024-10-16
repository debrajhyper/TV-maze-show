import Navbar from './Navbar'
import RecentSchedule from './RecentSchedule'
import ReactPlayer from "react-player";
import slider1Img from '../assets/images/slider1.png'
import slider2Img from '../assets/images/slider2.png'
import slider3Img from '../assets/images/slider3.png'
import slider4Img from '../assets/images/slider4.png'
import slider5Img from '../assets/images/slider5.png'
import disneyImg from '../assets/images/disney.png'
import geographicImg from '../assets/images/geographic.png'
import pixarImg from '../assets/images/pixar.png'
import starwarsImg from '../assets/images/star-wars.png'
import marvelImg from '../assets/images/marvel.png'
import disneyVid from '../assets/videos/disney.mp4'
import geographicVid from '../assets/videos/geographic.mp4'
import pixarVid from '../assets/videos/pixar.mp4'
import starwarsVid from '../assets/videos/star-war.mp4'
import marvelVid from '../assets/videos/marvel.mp4'

const Home = () => {
    return (
        <div>
            {/* navbar start */}
            <Navbar />
            {/* navbar end */}

            {/* main start  */}
            <div className='bg-transparent'>
                {/* carousel start */}
                <div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slider4Img} className="w-100 h-50 object-cover" alt="img" />
                                <div className="carousel-caption  d-md-block">
                                    <h5>raya and the last dragon</h5>
                                    <p>Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider5Img} className="w-100 h-50 object-cover" alt="img" />
                                <div className="carousel-caption  d-md-block">
                                    <h5>luca</h5>
                                    <p>Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider2Img} className="w-100 h-50 object-cover" alt="img" />
                                <div className="carousel-caption  d-md-block">
                                    <h5>falcon and the winter soldier</h5>
                                    <p>Following the events of Avengers: Endgame, Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider3Img} className="w-100 h-50 object-cover" alt="img" />
                                <div className="carousel-caption  d-md-block">
                                    <h5>wanda vision</h5>
                                    <p>Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider1Img} className="w-100 h-50 object-cover" alt="img" />
                                <div className="carousel-caption  d-md-block">
                                    <h5>loki</h5>
                                    <p>The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers Endgame.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div >
                    {/* carousel end */}
                    {/* <!-- Video Cards start --> */}
                    <div className="video-card-container mt-5 ">

                        <div className="video-card" >
                            <img src={disneyImg} className="video-card-image" alt="show" />

                            <ReactPlayer url={disneyVid} playing={true} loop={true} muted={true} width="100%" height="100%" />
                        </div>
                        <div className="video-card">
                            <img src={pixarImg} className="video-card-image" alt="show" />

                            <ReactPlayer url={pixarVid} playing={true} loop={true} muted={true} width="100%" height="100%" />
                        </div>
                        <div className="video-card">
                            <img src={geographicImg} className="video-card-image" alt="show" />

                            <ReactPlayer url={geographicVid} playing={true} loop={true} muted={true} width="100%" height="100%" />
                        </div>
                        <div className="video-card">
                            <img src={marvelImg} className="video-card-image" alt="show" />

                            <ReactPlayer url={marvelVid} playing={true} loop={true} muted={true} width="100%" height="100%" />
                        </div>
                        <div className="video-card">
                            <img src={starwarsImg} className="video-card-image" alt="show" />

                            <ReactPlayer url={starwarsVid} playing={true} loop={true} muted={true} width="100%" height="100%" />
                        </div>
                    </div>
                    {/* <!-- Video Cards end --> */}

                    {/* Television Schedule start */}
                    <div >
                        <h2 className='text-white ps-4'>Television Schedule</h2>
                        <RecentSchedule />
                    </div>
                    {/* Television Schedule end */}

                    {/* Recommended For You start */}
                    <div >
                        <h2 className='text-white ps-4'>Recommended For You</h2>
                        <RecentSchedule />
                    </div>
                    {/* Recommended For You end */}

                    {/* Popular Shows start */}
                    <div>
                        <h2 className='text-white ps-4'>Popular Shows</h2>
                        <RecentSchedule />
                    </div>
                    {/* Popular Shows end */}

                </div>
            </div>
            {/* main end */}
        </div>
    )
}

export default Home
