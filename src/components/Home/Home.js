import React from 'react';
import { Carousel } from 'react-bootstrap';
import Offers from '../Offers/Offers';
import './Home.css';

const Home = () => {
    return (
        <>
        <section>
            {/* banner section */}

            <div>
                <img className='w-100' style={{height: "350px"}} src="https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div>
        </section>

        {/* main offerings */}
        <Offers></Offers>

        <section className='my-4'>
            {/* top destination sections */}
            <h2 className='text-center mb-4'>Top destinations</h2>
            <div className='d-grid top-destination-section'>
                <div className='top-destination-card'>
                <img className='w-100' src="https://image.freepik.com/free-photo/nyc-aerial-view-new-york-city-night_181624-45081.jpg" alt="" />
                <h4 className='top-destination-text'>New York</h4>
                </div>
                <div className='top-destination-card'>
                <img className='w-100' src="https://image.freepik.com/free-photo/big-ben-house-parliament-night-london-united-kingdom_268835-1396.jpg" alt="" />
                <h4 className='top-destination-text'>London</h4>
                </div>
                <div className='top-destination-card'>
                <img className='w-100' src="https://image.freepik.com/free-photo/famous-eiffel-tower-paris-with-gorgeous-colors_268835-830.jpg" alt="" />
                <h4 className='top-destination-text'>Paris</h4>
                </div>
                <div className='top-destination-card'>
                <img className='w-100' src="https://image.freepik.com/free-photo/modetn-city-luxury-center-dubai-united-arab-emirates_231208-7596.jpg" alt="" />
                <h4 className='top-destination-text'>Dubai</h4>
                </div>
                <div className='top-destination-card'>
                <img className='w-100' src="https://image.freepik.com/free-photo/scenic-sunrise-ocean-istanbul-turkey_53876-14875.jpg" alt="" />
                <h4 className='top-destination-text'>Turkey</h4>
                </div>
                <div className='top-destination-card'>
                <img className='w-100' src="https://img.freepik.com/free-photo/roman-coliseum-seen-from-afar_1219-15.jpg?t=st=1646138173~exp=1646138773~hmac=eac923e87dac1e7774863b76ef1998cd8ffd99018696d132182ab904544a7a63&w=740" alt="" />
                <h4 className='top-destination-text'>Italy</h4>
                </div>
            </div>
        </section>

        <section className='w-75 mx-auto'>

            {/* review section */}
            <h2 className='text-center mb-4'>Reviews</h2>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/confident-young-businessman-suit-standing-with-arms-folded_171337-18599.jpg?size=626&ext=jpg"
      alt="First slide"
    />
    <Carousel.Caption className='carousel-caption'>
      <blockquote>"Excellent! Very good service from beginning to end. Even with a COVID-related delay in the middle of it, Lisa stayed in contact with us and got us a reschedule with the utmost of ease. Thank you!"</blockquote>
      <small>- Shane Watson</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/happy-young-african-businessman_171337-736.jpg?size=626&ext=jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <blockquote>"Kristy was extremely helpful ! Any questions we had were answered very quickly via email or phone call. Not my first time using travel online and definitely NOT my last !"</blockquote>
      <small>- David Warner</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/photo-successful-handsome-business-man-with-his-team-working-office_496169-1638.jpg?size=626&ext=jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <blockquote>"Travel Online managed to secure us a free night in our chosen motel. Service was prompt, and will use the service again."</blockquote>
      <small>- Steve Smith</small>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </section>
        </>
    );
};

export default Home;