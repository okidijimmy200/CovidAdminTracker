import React from 'react'
import {MdOutlineDashboard  } from 'react-icons/md'
import { BsFillBarChartFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'

import './sidebar.scss'

export default function sidebar() {
  return (
    <>
    <nav className="sidebar">
        <h2 className='title'>Covid Tracker</h2>
        <div className='sidebar-flex'>
            <div>
                
            </div>

        <div className="legal">
            Legal @ 2022 
        </div>
        </div>
    </nav>
</>
  )
}
