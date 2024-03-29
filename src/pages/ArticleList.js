import React from "react";
import Articles from "../components/Articles";
import articles from "./article-content";

function ArticleList() {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-grey-900">
        ArticleList
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articles}/>
        </div>
      </div>
    </>
  );
}

export default ArticleList;
