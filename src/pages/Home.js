import React from 'react';
import './Home.css';

const HomePage = () => (
  <div className="homepage">
    <h1>
      Welcome to
      <br />
      Math Magicians
    </h1>
    <p>
      A fun application where you can do your basic math by using a
      <span> stylish calculator</span>
      , and also check out some
      <span> quotes from famous mathmaticians </span>
      .
    </p>
    <p>
      Use the navigation bar at the top of the page to use the calculator
      or to jump to the quote section. If you prefer, you can click on the images below!
    </p>
    <p>
      <span>Have fun!</span>
    </p>
    <div className="links-images">
      <a href="/calculator"> Calculator </a>
      <a href="/quote"> Quote </a>
    </div>
  </div>
);

export default HomePage;
