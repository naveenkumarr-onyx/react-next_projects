import React from "react";
import { useSelector } from "react-redux";

const BlogList = () => {
  const { newblog } = useSelector((state: any) => state);
  const { blogList } = newblog;
  console.log(blogList);
  return (
    <div>
      {blogList.length > 0 ? (
        <>
          {blogList.map((blog: any, index: any) => {
            return (
              <div
                key={index}
                className=" flex flex-row gap-5  bg-red-300 shadow-md p-3 mb-4 ">
                <ul>
                  <li>Blog {index + 1}</li>
                  <li>Title:{blog.title}</li>
                  <li>Description: {blog.description}</li>
                </ul>
              </div>
            );
          })}
        </>
      ) : (
        <p className=" text-red-900">No Blogs here!!create a new one</p>
      )}
    </div>
  );
};

export default BlogList;
