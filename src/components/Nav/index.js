import React from 'react'
import Navbar from './Navbar'

const Nav = props => {
  const {
    isMobileNavFolded,
    onMobileNavToggle,
  } = props

  return (
    <div>
      <Navbar
        isMobileNavFolded={isMobileNavFolded}
        onMobileNavToggle={onMobileNavToggle}
      />
    </div>
  )
}

export default Nav
