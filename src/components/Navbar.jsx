import React from 'react'

import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div class="nav">
          <div class="nleft">logo</div>
          <div class="nright">
            <Link to="/" className='link' >Home</Link>
            <Link to="/events" className='link'>Events</Link>
            <Link to="/team" className='link'>Team Hierarchy</Link>
          </div>
     </div>
  )
}
