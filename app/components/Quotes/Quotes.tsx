"use client";
import React, { useEffect, useRef, useState } from "react";
import QuotesItem from "./QuotesItem";

const Quotes = () => {
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState<{ [key: number]: string | null }>({});
  const quotesRef = useRef<HTMLDivElement>(null);

  const fetchApi = async () => {
    try {
      const api = await fetch("https://dummyjson.com/quotes");
      const response = await api.json();
      setData(response.quotes);
    } catch (error) {
      console.log(error);
    }
  };

  const gettingAuthor = async (id: any) => {
    if (id === null) {
      setAuthor({});
      return;
    }
    try {
      const api = await fetch(`https://dummyjson.com/quotes/${id}`);
      const response = await api.json();
      setAuthor((prevAuthors: any) => ({
        ...prevAuthors,
        [id]: response.author,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        quotesRef.current &&
        quotesRef.current.contains(event.target as Node)
      ) {
        setAuthor({});
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.addEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div ref={quotesRef} className="gap-4 grid grid-flow-row grid-cols-2">
      {data && data?.length > 0
        ? data.map((val: any, index: any) => {
            return (
              <div key={val.id} className="">
                <QuotesItem
                  quote={val}
                  author={author[val.id]}
                  gettingAuthor={gettingAuthor}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Quotes;
