import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowCircleRight } from 'react-icons/hi'


const About = () => {
    return (
        <section className="about" id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">About Us</h1>
                        <p>Serving Delicious cravings!</p>
                    </div>
                    <p className='mid'>
                        Welcome to Foodie, where culinary dreams come true!

                        At Foodie, we believe that food is not just about sustenance but an experience that brings people together. Our passion for creating delightful and memorable dining experiences drives everything we do.
                        Join us at Foodie and embark on a culinary adventure that will tantalize your senses and leave you craving for more. Your table is waiting!

                    </p>
                    <Link to={"/"}>Explore Menu
                        <span>
                            <HiOutlineArrowCircleRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About
