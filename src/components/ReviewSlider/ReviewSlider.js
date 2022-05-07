import React, { useEffect, useState } from "react";
import './ReviewSlider.css';

const reviews = [
    {reviewImg: 'https://i.ibb.co/cJNLyXM/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-picture-id1277873802-k-20-m-12.jpg',
    review: '"Excellent! Very good service from beginning to end. Even with a COVID-related delay in the middle of it, Lisa stayed in contact with us and got us a reschedule with the utmost of ease. Thank you!"'},
    {reviewImg: 'https://i.ibb.co/VDk6ZCr/horizontal-portrait-of-a-serious-man-with-beard-picture-id506116452-k-20-m-506116452-s-612x612-w-0-h.jpg',
    review: '"Kristy was extremely helpful ! Any questions we had were answered very quickly via email or phone call. Not my first time using travel online and definitely NOT my last !"'}
]

let count = 0;
export default function Slider(){
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        startSlider();
    },[])
    const startSlider = ()=>{
        setInterval(()=>{
            handleOnNextClick();
        },3000)
    }
    const handleOnNextClick = () => {
        count = (count + 1) % reviews.length;
        setCurrentIndex(count)
    }
    const handleOnPrevClick = () => {
        const reviewsLength = reviews.length;
        count = (currentIndex + reviewsLength - 1) % reviewsLength;
        setCurrentIndex(count);
    }

    return <div className="w-full select-none relative">
        <div>
            <img className="review-img mx-auto border rounded-circle" src={reviews[currentIndex]?.reviewImg} alt="" />
            <p>{reviews[currentIndex]?.review}</p>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center">
            <button onClick={handleOnPrevClick}>prv</button>
            <button onClick={handleOnNextClick}>nxt</button>
        </div> 
    </div>
}