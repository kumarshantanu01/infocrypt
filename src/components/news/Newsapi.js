import axios from "axios";
import React, { useState, useEffect } from "react";

function NewsApi() {
  const [news, setNews] = useState([]);

  useEffect( () => {
     axios
      .get(
        "https://newsapi.org/v2/everything?qInTitle=crypto&sortBy=popularity&apiKey=ed82c3c548024e7bb58f1a4e07ac26b1"
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
          <h3>News articles related to crypto </h3>
        </div>
        <div className="container mt-4">
          {news.map((value) => {
            return (
              <div className="card mb-3" style={{ width: "auto" }}>
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
                        <small className="text-muted">
                          {value.description}
                        </small>
                      </p>
                      <p className="card-text">{value.content}</p>
                      <button className="btn btn-info">
                        <a href={value.url} target="blank">
                          Read More
                        </a>
                      </button>
                      <p className="card-text">
                        <small className="text-muted ">
                          {value.author}
                          <p>Published on :{value.publishedAt}</p>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewsApi;
