import React from 'react'
import {Link} from 'react-router-dom'

function NavWrapper({data}) {

  return (
    <nav className="MainNav">
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/">Apple</Link>
          </li>
          {
            data.map(navItem => {
              return(
                <li key={navItem.id}>
                  <Link to={`/sub/${navItem.id}`}>
                    {navItem.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavWrapper
