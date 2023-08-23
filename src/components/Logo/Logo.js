import React from 'react'
import { Link } from "gatsby"
// import logoImage from '../images/logo.png';

function logo() {
  return (
    <Link to="/" className="flex items-center"> 
        <img src={'https://prod-cdn.damacproperties.com/uploads/revamp/images/navigation/damac-logo.svg'} className="h-10 w-20" alt="Logo image" />
    </Link>
  )
}

export default logo