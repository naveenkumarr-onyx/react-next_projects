"use client";
import React, { useState } from "react";

const TextEditor = () => {
  const [content, setContent]: any = useState("");

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    setContent(newContent);
    console.log(newContent);
  };

  return (
    <div
      contentEditable
      className="border-[2px] border-black w-[1000px] h-[500px]"
      onInput={handleInput}></div>
  );
};

export default TextEditor;
