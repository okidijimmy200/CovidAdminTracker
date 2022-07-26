import React from 'react'
import {LiveReport} from '../grids/liveReport/liveReport'
import {LiveUpdate} from '../grids/liveUpdate/liveUpdate'
import {GraphCards} from '../grids/graphs/graphCards'
import { RecoveryOverview } from '../grids/recoveryOverview/recoveryOverview'
import { TotalCases } from '../grids/totalCases/totalCases'
import Navbar from '../grids/navbar/navbar'
import Sidebar from '../grids/sidebar/sidebar'
import './index.scss'

const Index: React.FC =() =>  {
  return (
    <>
    <div className='grid-container'>
        <div className='sidebar'><Sidebar /></div>
        <div className='navBar'><Navbar /></div>
        <div className='graphCards'><GraphCards/></div>
        <div className='liveReport'><LiveReport/></div>
        <div className='totalCases'><TotalCases /></div>
        <div className='recoveryOverview'><RecoveryOverview /></div>
        <div className='liveUpdate'><LiveUpdate /></div>
       
        
      
    </div>
      
    </>
  )
}

export default Index
