import axios from "axios";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
// import Coincard from "../price/Coincard";
import Newscard from "./Newscard";

function NewsApi() {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect( () => {
     axios
      .get(
        "https://newsapi.org/v2/everything?qInTitle=crypto&sortBy=publishedAt&apiKey=ed82c3c548024e7bb58f1a4e07ac26b1"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response.data);
      })
      .catch(Error);
  }, []);

  console.log(news);

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
