import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogListInLocalStorage } from "../slices/blogSlice";

const BlogList = () => {
  const { newblog }: any = useSelector((state: any) => state);
  const { blogList }: any = newblog;
  const dispatch = useDispatch();

  useEffect(() => {
    const storedBlogList = localStorage.getItem("bloglist");
    const parsedBlogList = storedBlogList ? JSON.parse(storedBlogList) : [];
    dispatch(
      setBlogListInLocalStorage({
        blogList: parsedBlogList,
      })
    );
  }, [dispatch]);

  return (
    <div>
      {blogList.length > 0 ? (
        <>
          {blogList.map((blog: any, index: any) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-5 bg-red-300 shadow-md p-3 mb-4">
                <ul>
                  <li>Blog {index + 1}</li>
                  <li>Title: {blog.title}</li>
                  <li>Description: {blog.description}</li>
                </ul>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-red-900">No Blogs here!! Create a new one.</p>
      )}
    </div>
  );
};

export default BlogList;
