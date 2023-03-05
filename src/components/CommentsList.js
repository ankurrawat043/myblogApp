import React from "react";

function CommentsList({ comments }) {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold mt-6 mb-4 text-grey-900">
        Comments:
      </h3>
      {comments.map((comment, index) => (
        <div className="mb-4" key={index}>
          <h4 className="text-grey-900 font-bold">{comment.username}</h4>
          <p className="text-grey-600">{comment.text}</p>
        </div>
      ))}
    </>
  );
}

export default CommentsList;
