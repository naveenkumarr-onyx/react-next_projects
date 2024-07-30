import React from "react";

const QuotesItem = ({ quote, gettingAuthor, author }: any) => {
  return (
    <div className=" bg-white p-[20px] rounded-md shadow-md flex flex-col">
      <h1>{quote.quote}</h1>
      <button
        onMouseEnter={() => gettingAuthor(quote.id)}
        className=" bg-green-700 p-1 text-white max-w-[150px]">
        show Author
      </button>
      {author && <p>{author}</p>}
    </div>
  );
};

export default QuotesItem;
