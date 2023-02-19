import React from 'react'
import "./sidemenu.css"
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import {Payment,Chat,Group,Person2,ContactSupport} from '@mui/icons-material'
export default function Sidemenu() {
  return (

    <div className="sidemenu">


          <div  className='menuwrapper'>
            <div className='menuicon'><LibraryBooks/></div>
            <span>Courses</span>
           </div>

          

           < div  className='menuwrapper'>
            <div className='menuicon'><Payment/></div>
            <span>Payment</span>
           </div>


           <div  className='menuwrapper'>
            <div className='menuicon'><Chat/></div>
            <span>Chat</span>
           </div>


           <div  className='menuwrapper'>
            <div className='menuicon'><Group/></div>
            <span>Group</span>
           </div>


           <div  className='menuwrapper'>
            <div className='menuicon'><Person2/></div>
            <span>Students</span>
           </div>

          <div  className='menuwrapper'>
          <div className='menuicon'><ContactSupport/></div>
          <span>Support</span>
          </div>




          
        </div>
   
  )
}
