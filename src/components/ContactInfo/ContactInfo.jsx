import React from 'react';
import './C-info.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';
import { BiSolidMessageAlt } from 'react-icons/bi';
const ContactInfo = () => {
  return (
    <div className=" C-info  shadow py-3 px-3  ">
      <h3 className="text-white mb-3">
        Don’t Hesitate to contact with us for any kind of information Inner
        Circular Roa
      </h3>
      <div className="address mb-3">
        <ul className="list-unstyled list-group">
          <li className="text-white">
            <FaLocationArrow /> Inner Circular Road, Park Valley, NYZ
          </li>
          <li className="text-white">
            <FaMobileAlt /> +111 888 2222, +022 888 2022
          </li>
          <li className="text-white">
            <BiSolidMessageAlt />
            example@example.com
          </li>
        </ul>
      </div>
      <div className="icons d-flex gap-2 mt-3">
        <Link to="/">
          <FaFacebook />
        </Link>

        <Link to="/">
          <FaTwitter />
        </Link>

        <Link to="/">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
