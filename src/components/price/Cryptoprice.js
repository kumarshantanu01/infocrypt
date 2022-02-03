import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Coincard from "./Coincard";

// import axios from "axios";
function Cryptoprice() {
  const classes = useStyles();
  const [coins, setCoins] = useState();
  const [dataisloaded, setDataisloaded] = useState(false);
  
  async function fetch_coins() {
    const apikey = process.env.REACT_APP_API_KEY;
    await fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=12&offset=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": apikey,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setCoins(res.data.coins);
        setDataisloaded(true);
        console.log(res.data.coins);
      });
  }

  useEffect(() => {
    fetch_coins();
  }, []);

  return (
    <div>
      <h1 className={classes.heading}>Live price of top Cryptocurrencies</h1>
      <div>
        <Coincard coins={coins} dataisloaded={dataisloaded} />
      </div>
    </div>
  );
}

export default Cryptoprice;

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    color: "#444545",
    fontFamily: "",
    fontSize: "40px",
    fontWeight: 600,
    paddingTop: "2rem",
    textShadow: "0.6rem 0.6rem 0.5rem #DEDEDF, -0.6rem -0.4rem 0.5rem #f3f4f5",
    // textDecoration: "underline"
  },
});
