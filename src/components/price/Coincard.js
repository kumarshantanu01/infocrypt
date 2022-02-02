import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    cardssection:{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    coincard: {
        width: '320px',
        height: "320px",
        color: '#000',
        backgroundColor: "#fff",
        margin: "3rem",
        borderRadius: "20px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0.6rem 0.6rem 0.5rem #e2e3e5, -0.6rem -0.4rem 0.5rem #f3f4f5"
        // margin: 'auto',
    },
    topcard:{

    },
    coinimage:{
        width: 85, 
        height: 85,
        margin: "0.4rem",
    },
    bottomcard:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
    
});

function Coincard(props) {
 const classes = useStyles();
  return (
    <div className={classes.cardssection}>
      {props.dataisloaded
        ? props.coins.map((coin) => {
            return (
              <div className={classes.coincard}>
                <div className={classes.topcard}>
                    <img className={classes.coinimage} src={coin.iconUrl} alt="errorloadingimage"></img>
                </div>
                <div className={classes.bottomcard}>
                    <h1>{coin.name}</h1>
                    <h2>{coin.symbol}</h2>
                    <p>Price : {coin.price}</p>
                    <p>Market Cap : {coin.marketCap}</p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Coincard;
