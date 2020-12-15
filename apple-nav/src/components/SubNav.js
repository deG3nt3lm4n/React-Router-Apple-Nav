import React from 'react'
import { useParams } from 'react-router-dom';


function SubNav({data}) {

  // debugger
  const { id } = useParams()

  console.log(id)


  return (
    <div>
      <ul>
        {
          data.filter(menu => menu.id === id).map(item => {
            item.subnav.map(nav => {
              return(
                <li>{nav}</li>
              )
            })
          })
        }
      </ul>
    </div>
  )
}

export default SubNav
