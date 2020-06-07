import React from 'react'
import "./style.css"

function Thead() {
    return (
        <div className='tHead'>
          <tr>
            <th className='member'>Member</th>
            <th className='contact'>Contact</th>
            <th className='session'>Session</th>
            <th className='time'>Time</th>
            <th className='sc'>Session Code</th>
            <th className='adults'>Adults</th>
            <th className='children'>Children</th>
          </tr>
        </div>
    )
}

export default Thead
