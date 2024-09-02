import React from 'react';
import {NavLink} from 'react-router-dom'

function Navigate(){
    const navLinkStyle=({isActive})=>{
         return({
              textDecoration: isActive ? 'none' : 'underline',
              fontWeight: isActive ? 'bold' : 'none'
     } )
}
    return(
        <>
          <div> <NavLink to='/' style={navLinkStyle}>Home</NavLink></div>

          <NavLink to='about' style={navLinkStyle}>About</NavLink>
          <div>
          <NavLink to='/products' style={navLinkStyle}>product</NavLink>
          </div>
          <div>
          <NavLink to='/Users' style={navLinkStyle}>Users</NavLink>
          </div>
          <div>
          <NavLink to='/profile' style={navLinkStyle}>Profile</NavLink>
          </div>
        </>
    )
}

export default Navigate;