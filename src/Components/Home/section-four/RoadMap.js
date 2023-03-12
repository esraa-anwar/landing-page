import React from 'react'
import  img1 from '../../../img/grid-clean.png'
import Card from './cards/Card'
import "./styles.scss"
const RoadMap = () => {
  return (
    <div className='RoadMap'
    
    style={{
            backgroundImage: `url(${img1})`,
          }}
    >
    <div className='RoadMap-content'>
<p>RoadMap</p>
<Card/>
    </div>
    </div>
  )
}

export default RoadMap