import * as React from "react"
import Logo from './Logo/Logo';

const Header = ({ siteTitle }) => (
  <header>
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo/>
      </div>
    </nav>
  </header>
)

export default Header
