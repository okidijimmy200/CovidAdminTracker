import React from 'react'
import {MdOutlineDashboard  } from 'react-icons/md'
import { BsFillBarChartFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'

import './sidebar.scss'

export default function sidebar() {
  return (
    <>
    <nav className="sidebar">
        <h2 className='title'>Covid Tracker</h2>
        <div className='sidebar-flex'>

        <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
                <span className='side-nav__icon'><MdOutlineDashboard /></span>
                    <span>Dashboard</span>
            </li>
            <li className="side-nav__item">
                {/* <a href="#" class="side-nav__link"> */}
                    <span className="side-nav__icon">
                        <BsFillBarChartFill />
                        {/* <use xlink:href="img/spritspam#icon-aircraft-take-off"></use> */}
                    </span>
                    <span>Statistics</span>
                {/* </a> */}
            </li>
            <li className="side-nav__item">
                {/* <a href="#" class="side-nav__link"> */}
                    <span className="side-nav__icon">
                        <FaMapMarkedAlt />
                        {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
                    </span>
                    <span>Map</span>
                {/* </a> */}
            </li>
            <li className="side-nav__item">
                {/* <a href="#" className="side-nav__link"> */}
                    <span className="side-nav__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
                        <B
                    </span>
                    <span>Support</span>
                {/* </a> */}
            </li>
            <li className="side-nav__item">
                {/* <a href="#" className="side-nav__link"> */}
                    <svg className="side-nav__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
                    </svg>
                    <span>Report</span>
                {/* </a> */}
            </li>
            <li className="side-nav__item">
                {/* <a href="#" className="side-nav__link"> */}
                    <svg className="side-nav__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
                    </svg>
                    <span>Setting</span>
                {/* </a> */}
            </li>
        </ul>
        <div className="legal">
            Legal @ 2022 
        </div>
        </div>
    </nav>
</>
  )
}
