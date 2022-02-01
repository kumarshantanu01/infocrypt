import React from "react";

function Coincard(props) {
  return (
    <div>
      {props.dataisloaded
        ? props.coins.map((coin) => {
            return (
              <div className="coin">
                <h1>{coin.name}</h1>
                <img style={{width: 50, height: 50}} src={coin.iconUrl} alt="errorloadingimage"></img>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Coincard;
