import React from "react";
import { Link } from "react-router-dom";
import articles from "./article-content";

function ArticleList() {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-grey-900">
        ArticleList
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((article, index) => (
            <div className="p-4 md:w-1/2" key={index}>
              <div>
                <Link to={`/article/${article.name}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                </Link>
                <div className="p-6">
                  <Link key={index} to={`/article/${article.name}`}>
                    <h3 className="title-font text-lg font-medium text-grey-900 mb-3">
                      {article.title}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArticleList;
