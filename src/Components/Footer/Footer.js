import React from 'react'
import "./styles.scss"
import img1 from "../../img/ex/footer.png"
const Footer = () => {
  return (
    <footer
    className='footer'
     style={{
            backgroundImage: `url(${img1})`,
          }}
    >
    <div className='footer-content'>
<p>Copyright © Develocity  2022 | <span>Contact</span> | <span>Whitepaper</span> </p>
<p className='footer-text'>
Cryptocurrency May Be Unregulated In Your Jurisdiction. The Value Of Cryptocurrencies May Go Down As Well As Up.<br/>
Profits May Be Subject To Capital Gains Or Other Taxes Applicable In Your Jurisdiction.
</p>
    </div>
    </footer>
  )
}
export default Footer