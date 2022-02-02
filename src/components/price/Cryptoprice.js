import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Coincard from './Coincard';

// import axios from "axios";
function Cryptoprice() {
  const classes = useStyles();
  const [coins, setCoins] = useState();
  const [dataisloaded, setDataisloaded] = useState(false);

  async function fetch_coins() {
    
    await fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=12&offset=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "ea7fce0598mshef181fd5a014e36p1bbc0djsn1a9bac13ef3f",
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
      <h1>live prices will be displayed here</h1>
      <div >
        <Coincard coins={coins} dataisloaded={dataisloaded} />
      </div>
    </div>
  );
}

export default Cryptoprice;


const useStyles = makeStyles({

})
