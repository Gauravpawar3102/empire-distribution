import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <div className="Navabar-container flex justify-between p-2 h-20 items-center  ">
        <div className="navbar-left text-3xl font-mono font-bold flex justify-start w-1/2">
          <div className="Koality-Distribution-logo flex justify-center cursor-pointer">
            <span className="text-3xl">🏫</span>
            <span className="text-4xl">Empire</span>{' '}
          </div>
        </div>
        <div className="navbar-right flex justify-around w-1/2">
          <div className="phone-container flex items-center gap-2">
            <div className="phone-icon text-3xl">📞</div>
            <div className="phone-number-container ">
              <div className="phone-text text-xl text-gray-500 ">Phone</div>
              <div className="phone-number font-semibold">
                +1 (747) 500-1766
              </div>
            </div>
          </div>
          <div className="email-container flex items-center gap-2">
            <div className="email-icon text-3xl">📧</div>
            <div className="email-address-container ">
              <div className="email-text text-xl text-gray-500">Email</div>
              <div className="email-address font-semibold">
                deals@empiredistributionusa.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-pages-container flex justify-around p-2 border-b-2 border-b-gray-400 pb-6 items-center ">
        <div className="navbar-pages-left  ">
          <ul className="pages-list flex gap-2  ">
            <li className="home-text cursor-pointer pr-2 border-r-2   border-r-gray-500  hover:text-blue-700">
              <Link to="/">Home</Link>
            </li>
            <li className="products-text cursor-pointer pr-2 border-r-2   border-r-gray-500  hover:text-blue-700">
              <Link to="products">Products</Link>
            </li>
            <li className="about-text cursor-pointer pr-2 border-r-2   border-r-gray-500  hover:text-blue-700">
              <Link to="about">About us</Link>
            </li>
            <li className="apply-text cursor-pointer pr-2 border-r-2   border-r-gray-500  hover:text-blue-700">
              <Link to="register">Apply</Link>
            </li>
            <li className="partners-text cursor-pointer pr-2 border-r-2   border-r-gray-500  hover:text-blue-700">
              <Link to="partners">Partners</Link>
            </li>
            <li className="news-text cursor-pointer pr-2 border-r-2   border-r-gray-500  hover:text-blue-700">
              <Link to="news">News</Link>
            </li>
            <li className="contacts-text cursor-pointer pr-2 hover:text-blue-700">
              <Link to="contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        {search ? (
          <div className="search-bar-container flex bg-cyan-300 items-center p-2">
            <input
              className="p-1 outline-none text-gray-500 font-mono"
              type="text"
              placeholder="Search "
            />
            <div
              className="close  cursor-pointer  ml-2 text-xl"
              onClick={handleSearch}
            >
              ❌
            </div>
          </div>
        ) : (
          <div
            className="navbar-pages-right cursor-pointer"
            onClick={handleSearch}
          >
            🔍 Search
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
