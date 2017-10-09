// @flow

import React from "react";
import Header from "./Header";

const Details = (props: { show: Show }) => {
  // es6 destructuring below:
  // equivalent to const title = props.show.title; etc.
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`/public/img/posters/${poster}`} alt={`${title}`} />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          src={`https://wwww.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer for ${title}`}
        />
      </div>
      {/* <pre><code>{JSON.stringify(props, null, 4)}</code></pre> */}
    </div>
  );
};

export default Details;
