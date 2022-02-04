import axios from "axios";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
// import Coincard from "../price/Coincard";
import Newscard from "./Newscard";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    color: "#444545",
    fontFamily: "",
    fontSize: "40px",
    fontWeight: 600,
    paddingBottom: "2rem",
    textShadow: "0.6rem 0.6rem 0.5rem #DEDEDF, -0.6rem -0.4rem 0.5rem #f3f4f5",
    // textDecoration: "underline"
  },
});

function NewsApi() {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      const newsapikey = process.env.REACT_APP_NEWS_API_KEY;
      const { data } = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_"+newsapikey+"&qInTitle=crypto&language=en"
      );

      console.log(data.results);
      setNews(data.results);
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className=" text-center">
          <h3 className={classes.heading}>News articles related to crypto </h3>
        </div>
        <Newscard news={news}/>
      </div>
    </>
  );
}

export default NewsApi;

