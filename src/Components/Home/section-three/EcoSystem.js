import React from "react";
import "./styles.scss";
import img1 from "../../../img/Lines.png";
import img2 from "../../../img/coin-02.png";
const EcoSystem = () => {
  return (
    <div className="EcoSystem">
      <div className="EcoSystem-content">
        <p>EcoSystem</p>

        <div className="content">
          <p className="title">Trust, Security & Credibility</p>
          <p className="descrip">
            Develocity strives to create a safe and trustworthy crypto
            environment where investors and developers can interact securely,
            considering the transparent credibility and technical measures and
            standards. Develocity’s goal is to become a thought leadership
            organisation, enhancing the community’s awareness and knowledge of
            the cryptocurrency market by building a virtual academy.
          </p>
          <button className="btn">download whitepaper ↓</button>
        </div>
        <div
          className="img-content"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <div className="one">
            <img src={img2} />
            <p>Develocity Scanner</p>
          </div>
          <div className="two">
            <img src={img2} />
            <p>Swap-Tool</p>
          </div>
          <div className="three">
            <img src={img2} />
            <p>Academy</p>
          </div>  <div className="four">
            <img src={img2} />
            <p>Wallet</p>
          </div><div className="five">
            <img src={img2} />
            <p>Bridge</p>
          </div><div className="six">
            <img src={img2} />
            <p>Bridge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSystem;
