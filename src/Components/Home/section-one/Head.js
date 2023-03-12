import React from "react";
import "./styles.scss";
import img1 from "../../../img/new-gradient.png";
import img2 from "../../../img/bg.png";
import img3 from "../../../img/Scroll.png";
import img4 from "../../../img/coin-02.png";
import img5 from "../../../img/logo.png";
import img6 from "../../../img/e.png";
import icon1 from "../../../img/icon1.png";
import icon2 from "../../../img/icon2.png";
import icon3 from "../../../img/icon3.png";
import ProgressBar from "@ramonak/react-progress-bar";

const Head = () => {
  return (
    <div
      className="Head"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <navbar className="navbar">
        <div className="links">
          <img src={img5} />
          <a>About</a>
          <a>Eco-System</a>
          <a>Roadmap</a>
          <a>Whitepaper</a>
          <a>How To</a>
        </div>
        <div className="links-content">
          <button className="buy-deve">Buy Deve →</button>
          <button className="claim">Claim</button>
          <div className="lang">
            <img src={img6} />
            <p>English ↓</p>
          </div>
        </div>
      </navbar>
      <div className="icons-container">
        <div className="icon"><img src={icon1}/></div>
        <div className="icon"><img src={icon2}/></div>
        <div className="icon"><img src={icon3}/></div>
      </div>
      <div className="Head-content">
        <div className="content">
          <p className="title">
            Last Presale Phase!
            <br />
            10% Of Tokens Remaining!
          </p>
          <p className="desc">
            DeVelocity aspires to present its final project in five primary
            stages. Each stage is delivered separately and merged in the
            post-final stage to create a decentralised platform, which would be
            distinctively in terms of technology and development based on Web
            3.0.
          </p>
          <p className="usdt">USDT Raised: $17,896,858.60 / $19,000,000.00</p>
          
<ProgressBar
  completed={80}
  className="wrapper"
  barContainerClassName="container"
  completedClassName="barCompleted"
  labelClassName="label"
/>
          <button className="buy-now">BUY NOW →</button>
          <p className="usdt-raised">USDT Raised : $18,106,250.29</p>
          <div className="btn-content">
            <button>how to buy</button>
            <button>new yo crypto?</button>
          </div>
        </div>
        <div
          className="img-content"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <img src={img3} />
        </div>
      </div>
      <div className="cards-content">
        <div className="cards">
          <img src={img4} />
          <p>
            CEX Listings confirmed
            <br />
            after presale
          </p>
        </div>{" "}
        <div className="cards">
          <img src={img4} />
          <p>
            DEFI & Metaverse partnerships
            <br />
            to be announced
          </p>
        </div>{" "}
        <div className="cards">
          <img src={img4} />
          <p>
            Featured in the largest
            <br />
            global publications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
