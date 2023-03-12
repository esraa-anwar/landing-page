import React from 'react'
import "./styles.scss"
import img1 from "../../../../img/icons/img1.png"
import img2 from "../../../../img/icons/img2.png"
import img5 from "../../../../img/icons/img3.png"
import img6 from "../../../../img/icons/img4.png"
import img3 from "../../../../img/icons/Path1.png"
import img7 from "../../../../img/icons/Path2.png"
import img8 from "../../../../img/icons/Path3.png"
import img4 from "../../../../img/icons/dot.png"
import img9 from "../../../../img/icons/rec.png"
import rec from "../../../../img/icons/rec2.png"
const Card = () => {
  return (
    <div className='Cards'>
    <div className='Cards-content'>
    <img src={img9} className="rec-one"/>
<img src={img1} className="card-one"/>
<img src={img2} className="card-two"/>
<img src={img3} className="line-one"/>
<img src={img4} className="dot"/>

    </div>   
    <img src={img8} className="line"/>
     <div className='Cards-content'>

<img src={img5} className="card-one"/>
<img src={img6} className="card-two"/>
<img src={rec} className="rec-two"/>
<img src={img7} className="line-two"/>
{/* <img src={img4} className="dot"/> */}

    </div>
    </div>
  )
}

export default Card