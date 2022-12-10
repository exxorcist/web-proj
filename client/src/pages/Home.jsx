import React from 'react'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import "../PageStyles/Home.css"

export default function Home() {
 
    return(
        <>
         <Topbar/>
         <div className="homeContainer">

  
         
         <Sidebar/>
         <Feed/>
         <Rightbar/>
         </div>
         </>
    )
}
