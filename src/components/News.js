import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import defaultNewsImg from "./defaultNewsImg.jpg";

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const updateNews = async () => {
    try {
      props.setProgress(10);
      setLoading(true);
      setErr(null);

      const apiKey = "2410557e-b3b9-4422-9b77-934715ba600b";

      const queryParam = props.query
        ? `&q=${encodeURIComponent(props.query)}`
        : "";

      const sectionParam =
        props.category && props.category !== "breaking-news"
          ? `&section=${encodeURIComponent(props.category)}`
          : "";

      const url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail,trailText&page-size=12&order-by=newest${queryParam}${sectionParam}`;

      const data = await fetch(url);

      if (!data.ok) {
        throw new Error(data.statusText);
      }

      props.setProgress(40);

      const parsedData = await data.json();

      props.setProgress(80);

      setArticles(parsedData.response?.results || []);
      setLoading(false);
      props.setProgress(100);
    } catch (err) {
      console.error(err);
      props.setProgress(100);
      setLoading(false);
      setErr("No data found");
    }
  };

  useEffect(() => {
    updateNews();
  }, [props.category, props.query]);

  return (
    <>
      {err ? (
        <div className="container d-flex justify-content-evenly my-3">
          {err}
        </div>
      ) : (
        <div className="container my-3">
          {articles.length !== 0 || loading ? (
            <h1>
              NewsDaily-Top{" "}
              {capitalizeFirst(props.category) !== "Breaking-news"
                ? capitalizeFirst(props.category)
                : ""}{" "}
              Headlines
            </h1>
          ) : (
            <h1>No News Found for that keyword</h1>
          )}

          {loading ? <Spinner /> : null}

          <div className="row">
            {articles.map((element) => {
              const description = element.fields?.trailText || "";

              return (
                <div className="col-md-4" key={element.id}>
                  <NewsItem
                    source="The Guardian"
                    title={element.webTitle || ""}
                    ImgUrl={element.fields?.thumbnail || defaultNewsImg}
                    description={description.slice(0, 100)}
                    descriptionBlur={description.slice(100, 200)}
                    NewsUrl={element.webUrl}
                    time={element.webPublicationDate}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

News.defaultProps = {
  country: "in",
  category: "breaking-news",
  query: "",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  query: PropTypes.string,
  setProgress: PropTypes.func,
};
