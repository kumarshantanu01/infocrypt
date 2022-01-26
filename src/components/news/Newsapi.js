import axios from "axios";
import React, { useState, useEffect } from "react";

function NewsApi() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        "https://newsapi.org/v2/everything?qInTitle=crypto&sortBy=popularity&apiKey=ed82c3c548024e7bb58f1a4e07ac26b1"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      })
      .catch(Error);
  }, []);

  console.log(news);

  return (
    <>
      <div className="container">
        {news.map((value) => {
          return (
            <div className="card mb-3" style={{ width: "840px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={value.urlToImage}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewsApi;
