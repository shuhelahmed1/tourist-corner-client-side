import React from 'react';
import NavBar from '../NavBar/NavBar';
import Offers from '../Offers/Offers';
import ReviewSlider from '../ReviewSlider/ReviewSlider'
import './Home.css';

const Home = () => {
    return (
        <>
        <NavBar></NavBar>
        <section>
            {/* banner section */}
        
            <div>
                <img className='w-full' style={{height: "500px"}} src="https://i.ibb.co/8721wrh/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand-1-2.png" alt="BannerImage" />
            </div>
        </section>

        {/* main offerings */}
        <Offers></Offers>

        <section className='my-1.5'>
            {/* top destination sections */}
            <h2 className='text-center mb-3'>Top Destinations</h2>
            <div className='grid grid-cols-3 top-destination-section'>
                <div className='top-destination-card'>
                  <img className='top-destination-img' src="https://image.freepik.com/free-photo/nyc-aerial-view-new-york-city-night_181624-45081.jpg" alt="" />
                
                <h4 className='top-destination-text'>New York</h4>
                </div>
                <div className='top-destination-card'>
                  <img className='top-destination-img' src="https://image.freepik.com/free-photo/big-ben-house-parliament-night-london-united-kingdom_268835-1396.jpg" alt="" />
               
                <h4 className='top-destination-text'>London</h4>
                </div>
                <div className='top-destination-card'>
                <img className='top-destination-img' src="https://image.freepik.com/free-photo/famous-eiffel-tower-paris-with-gorgeous-colors_268835-830.jpg" alt="" />
                <h4 className='top-destination-text'>Paris</h4>
                </div>
                <div className='top-destination-card'>
                <img className='top-destination-img' src="https://image.freepik.com/free-photo/modetn-city-luxury-center-dubai-united-arab-emirates_231208-7596.jpg" alt="" />
                <h4 className='top-destination-text'>Dubai</h4>
                </div>
                <div className='top-destination-card'>
                <img className='top-destination-img' src="https://image.freepik.com/free-photo/scenic-sunrise-ocean-istanbul-turkey_53876-14875.jpg" alt="" />
                <h4 className='top-destination-text'>Turkey</h4>
                </div>
                <div className='top-destination-card'>
                <img className='top-destination-img' src="https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196__340.jpg" alt="" />
                <h4 className='top-destination-text'>Italy</h4>
                </div>
            </div>
        </section>

        {/* review section */}

        <section className='w-9/12 mx-auto my-5'>
            <h2 className='text-center mb-3'>Reviews</h2>
            <ReviewSlider></ReviewSlider>
            
        {/* <Carousel>

  <Carousel.Item>
    <div className='review-card'>
    <img
        className="review-img"
        src="https://media.istockphoto.com/photos/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-picture-id1277873802?k=20&m=1277873802&s=612x612&w=0&h=I3aEJcrZRFwZPSmf0jkQMFqDg_KxLnmo-t8bLi8gPpw="
        alt="First slide"
      />
    </div>
      <div>
        <blockquote>"Excellent! Very good service from beginning to end. Even with a COVID-related delay in the middle of it, Lisa stayed in contact with us and got us a reschedule with the utmost of ease. Thank you!"</blockquote>
        <small>- Shane Watson</small>
      </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className='review-card'>
      <img
        className="review-img"
        src="https://media.istockphoto.com/photos/horizontal-portrait-of-a-serious-man-with-beard-picture-id506116452?k=20&m=506116452&s=612x612&w=0&h=PhfC8HDtQjU0jRKosIjoxzHFdRF6euOt7KFXDbCIgXM="
        alt="Second slide"
      />
    </div>
    <div>
    <blockquote>"Kristy was extremely helpful ! Any questions we had were answered very quickly via email or phone call. Not my first time using travel online and definitely NOT my last !"</blockquote>
      <small>- David Warner</small>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className='review-card'>
      <img
        className="review-img"
        src="https://media.istockphoto.com/photos/casual-man-on-white-picture-id531547724?k=20&m=531547724&s=612x612&w=0&h=E2f2We8XZXAxUncND6S6LSU5e1IQ-wO0cm1eMvRrXuo="
        alt="Third slide"
      />
    </div>
    <div>
    <blockquote>"Travel Online managed to secure us a free night in our chosen motel. Service was prompt, and will use the service again."</blockquote>
      <small>- Steve Smith</small>
    </div>
  </Carousel.Item>

</Carousel> */}
        </section>
        </>
    );
};

export default Home;