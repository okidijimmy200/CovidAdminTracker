import React from 'react'
import {MdOutlineDashboard  } from 'react-icons/md'
import { BsFillBarChartFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineCloudDownload } from 'react-icons/ai'

import './sidebar.scss'

export default function sidebar() {
  return (
    <>
    <nav className="sidebar">
        <h2 className='title'>Covid Tracker</h2>
        <div className='sidebar-flex'>
            <div>
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
                        <BiSupport />
                    </span>
                    <span>Support</span>
                {/* </a> */}
            </li>
            <li className="side-nav__item">
                {/* <a href="#" className="side-nav__link"> */}
                    <span className="side-nav__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
                        <HiOutlineDocumentReport />
                    </span>
                    <span>Report</span>
                {/* </a> */}
            </li>
            <li className="side-nav__item">
                {/* <a href="#" className="side-nav__link"> */}
                    <span className="side-nav__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
                        <AiFillSetting />
                    </span>
                    <span>Setting</span>
                {/* </a> */}
            </li>
        </ul>
            </div>
            <div>
                <ul className="side-nav logout">
                <li className="side-nav__item">
                <span className="side-nav__icon">
                        <FiLogOut />
                    </span>
                <span>Logout</span>
            </li>
                </ul>

            </div>

        <div className="download">
            <div className='download__container'>
            <span className="side-nav__icon">
                <AiOutlineCloudDownload />
            </span>
            <h2 className='title__download'>Download Report</h2>
                <p className='text'>Do you want to export all your data as a backup file</h3>
            <button>Download</button>
            </div>

        </div>
        </div>
    </nav>
</>
  )
}
