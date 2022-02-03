import { makeStyles } from "@mui/styles";
import React from "react";

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
                    <h1 className={classes.cardheading}>{coin.name}</h1>
                    <h2 className={classes.cardsymbol}>({coin.symbol})</h2>
                    <p className={classes.cardprice}>Price : {coin.price}</p>
                    <p className={classes.cardmarketcap}>Market Cap : {coin.marketCap}</p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Coincard;

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
      cursor: "pointer",
      boxShadow: "0.6rem 0.6rem 0.5rem #e2e3e5, -0.6rem -0.4rem 0.5rem #f3f4f5",
      // margin: 'auto',
      '&:hover':{
        backgroundColor: "#F3F3F3",
        boxShadow: "0.6rem 0.6rem 0.5rem #FBD1E6, -0.6rem -0.4rem 0.5rem #f3f4f5",
      }
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
    },
    cardheading:{
      fontSize: "35px",
      fontFamily: "",
      fontWeight: "bold",
      textShadow: "0.6rem 0.6rem 0.5rem #DEDEDF, -0.6rem -0.4rem 0.5rem #f3f4f5",
    },
    cardsymbol:{
      fontSize: "23px",
      color: "#444545",
      textShadow: "0.6rem 0.6rem 0.5rem #E0E1E2, -0.6rem -0.4rem 0.5rem #f3f4f5",
    },
    cardprice:{
      fontSize: "20px",
      paddingTop:"1rem",
      textShadow: "0.6rem 0.6rem 0.5rem #e2e3e5, -0.6rem -0.4rem 0.5rem #f3f4f5",
    },
    cardmarketcap:{
      fontWeight: "100",
      fontSize: "20px",
      fontFamily: "",
      textShadow: "0.6rem 0.6rem 0.5rem #e2e3e5, -0.6rem -0.4rem 0.5rem #f3f4f5",
    }
  
});
