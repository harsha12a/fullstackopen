import React from 'react'

function Filter({filter, filters}) {
  return (
    <div>
        filter shown with <input value={filter} onChange={filters}/>
    </div>
  )
}

export default Filter