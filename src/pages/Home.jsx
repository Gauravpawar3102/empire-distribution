import React from 'react';

function Home() {
  return (
    <div className="Home-page-container">
      <div className="hero-container bg-gray-50 h-60 flex w-full">
        <div className="hero-left2 w-2/3">
          <h1 className="hl-heading">Product Line</h1>
          <p className="hl-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            libero consectetur, expedita amet, repellat, reiciendis esse qui
            sunt eaque ea iure! Fuga quibusdam exercitationem delectus magnam
            dicta. Non, maiores harum!
          </p>
        </div>
        <div className="hero-right bg-red-200 w-1/3 ">image</div>
      </div>
      <div className="our-mission-container">
        <div className="mission-left">
          <div className="ol-heading">Our Mission</div>
        </div>
        <p className="ol-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          voluptatibus vel, molestiae nisi eaque quos temporibus eveniet
          perferendis natus nostrum incidunt sapiente, dolor exercitationem id
          quaerat ipsam expedita cumque a explicabo. Rem culpa quaerat suscipit
          cum eveniet! Ratione, omnis officia!
        </p>
        <div className="mission-right">image</div>
      </div>
      <div className="shop-by-products-container">
        <div className="sbp-top">Shop by Products ➡</div>
        <div className="sbp-bottom">list</div>
      </div>
      <div className="home-apply-account-container">
        <div className="haa-top">
          <div className="haa-heading">
            Empire Distribution USA is a B2B Wholesale Website
          </div>
          <div className="haa-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            earum culpa possimus accusantium, corporis suscipit provident maxime
            nulla optio recusandae ex vero consequatur. Nulla animi atque
            assumenda, minima ipsum ut.
          </div>
        </div>
        <div className="haa-bottom">
          <button className="haa-btn bg-blue-200">
            Apply for Wholesale account
          </button>
        </div>
      </div>
      <div className="home-products-grid">grid</div>
      <div className="home-news-container">
        <div className="hn-top">
          <div className="hn-heading">News</div>
        </div>
        <div className="hn-bottom">
          <div className="h-news-card h-30">
            <div className="img">image</div>
            <div className="date">Posted:2021-06-07 12:38:13</div>
            <h2 className="headline">
              Technology Adaps to minimize impairments
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
