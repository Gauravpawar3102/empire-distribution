import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container flex justify-around bg-indigo-200 p-2 m-2 rounded-lg">
      <ul className="footer-pages-list list-disc cursor-pointer">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/about">About us</Link>
        </li>
        <li className="hover:underline">
          <Link to="/register">Apply</Link>
        </li>
        <li className="hover:underline">
          <Link to="/partners">Partners</Link>
        </li>
        <li className="hover:underline">
          <Link to="/news">News</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
      <ul className="footer-pages-list list-disc cursor-pointer">
        <li>
          <li className="hover:underline">
            <Link>Documents </Link>
          </li>
        </li>
        <li>
          <li className="hover:underline">
            <Link>FAQ</Link>
          </li>
        </li>

        <li className="hover:underline">
          <Link>Terms and Conditions</Link>
        </li>
      </ul>
      <ul className="self-center bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-lg text-white  shadow-lg ">
        <li>12249 Foothill Blvd,Sylmar,CA 91342</li>
        <li>+1 (747) 500-1766</li>
        <li>deals@empiredistributionusa.com</li>
      </ul>
    </div>
  );
}

export default Footer;
