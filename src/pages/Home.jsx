import React from "react";
import Logo from "../assets/code-sync.png";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src={Logo} alt="code-sync-logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USER NAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create{" "}
            <a href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 by{" "}
          <a
            href="https://github.com/chaygosavi"
            target="_blank"
            rel="noreferrer"
          >
            Chay
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
