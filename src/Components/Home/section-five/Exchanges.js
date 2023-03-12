import React from 'react'
import "./styles.scss"
import img1 from "../../../img/ex/Bitmart.png"
import img2 from "../../../img/ex/p.png"
import img3 from "../../../img/ex/x.png"
const Exchanges = () => {
  return (
    <div className='Exchanges'>
    <div className='Exchanges-content'>
<p>Exchanges</p>
<div className='logo'>
<img src={img1}/>
</div><div className='logo'>
<img src={img2}/>
</div><div className='logo'>
<img src={img3}/>
</div>
    </div>
    </div>
  )
}

export default Exchanges