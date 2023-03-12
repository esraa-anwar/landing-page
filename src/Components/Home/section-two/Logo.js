import React from 'react'
import "./styles.scss"
import logo1 from "../../../img/img1.png"
import logo2 from "../../../img/img2.png"
import logo3 from "../../../img/img3.png"
import logo4 from "../../../img/img4.png"
import logo5 from "../../../img/img5.png"
const Logo = () => {
  return (
    <div className='logo-container'>
    <div className='logo-content'>
<p>Featured In</p>
<img src={logo1}/>
<img src={logo2}/>
<img src={logo3}/>
<img src={logo4}/>
<img src={logo5}/>
    </div>
    </div>
  )
}

export default Logo