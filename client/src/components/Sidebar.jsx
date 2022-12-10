import { Chat, Group, RssFeed } from '@material-ui/icons'
import React from 'react'
import "../ComponentStyles/Sidebar.css"
import {Users} from "../dummyData"
import CloseFriend from './CloseFriend'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>

            <li className="sidebarListItem">

                <RssFeed className="sidebarIcon"/>
                <span className='sidebarListItemText'>Feed</span>

            </li>
            <li className="sidebarListItem">

<Chat className="sidebarIcon"/>
<span className='sidebarListItemText'>Chat</span>

</li>
<li className="sidebarListItem">

<Group className="sidebarIcon"/>
<span className='sidebarListItemText'>Groups</span>

</li>
        </ul>
     
     <hr className='sidebarHr'/>


            <ul className='sidebarFriendList'>
                {Users.map((u)=>(
                    <CloseFriend key={u.id} user={u}/>
                ))}
            </ul>
      </div>
    </div>
  );
}
