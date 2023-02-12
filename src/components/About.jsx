

import React from 'react';

const About = () => {
  return (
    <html>

      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
        </style>
      </head>
      <body>
        <h1>About Page</h1>
        <div className='about'>


          <div className='text-about'>
            <p>
              Making everyone who likes FlashCards unstoppable
            </p>
            <p>We believe that anyone can learn anything. All it takes is a tenacious spirit,
              the right guidance, and the tools to see it through. We know thatone who likes FlashCardss are under
              more pressure than ever. It can leave them overwhelmed, be anxiety-producing and make it all too easy to burn out.

              It’s our job to give everyone who likes FlashCards the tools and confidence to succeed, no matter what their motivation, or what they’re striving to achieve.
            </p>
          </div>
          <div className='slika'>
            <img src='https://sportscommunity.com.au/wp-content/uploads/2017/07/shutterstock_340452164.jpg' alt='a'></img>
          </div>
        </div>
      </body>
    </html >

  );
};

export default About;