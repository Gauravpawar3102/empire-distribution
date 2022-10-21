import React from 'react';

function Footer() {
  return (
    <div className="footer-container flex justify-around bg-indigo-200 p-2 m-2 rounded-lg">
      <ul className="footer-pages-list list-disc cursor-pointer">
        <li>Home</li>
        <li>Products</li>
        <li>About us</li>
        <li>Apply</li>
        <li>Partners</li>
        <li>News</li>
        <li>Contacts</li>
      </ul>
      <ul className="footer-pages-list list-disc cursor-pointer">
        <li>Documents</li>
        <li>FAQ</li>
        <li>Terms and Conditions</li>
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
