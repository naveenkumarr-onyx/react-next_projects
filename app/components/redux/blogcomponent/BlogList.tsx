import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlogListInLocalStorage,
  handleDeleteSingleBlog,
  setCurrentEditedBlogId,
  handleInputChange,
} from "../slices/blogSlice";

const BlogList = () => {
  const blog = useSelector((state: any) => state.newblog);
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

  const handleDelete = (singleBlogId: any) => {
    window.confirm("are u sure to delete?")
      ? dispatch(handleDeleteSingleBlog(singleBlogId))
      : null;
  };

  const handleEdit = (singleBlogId: any) => {
    dispatch(setCurrentEditedBlogId(singleBlogId.id));
    dispatch(
      handleInputChange({
        title: singleBlogId.title,
        description: singleBlogId.description,
      })
    );
  };

  return (
    <div>
      {blog.blogList.length > 0 ? (
        <>
          {blog.blogList.map((blog: any, index: any) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-5 bg-red-300 shadow-md p-3 mb-4">
                <ul>
                  <li>Blog {index + 1}</li>
                  <li>Title: {blog.title}</li>
                  <li>Description: {blog.description}</li>
                  <div className="">
                    <div className=" flex gap-3">
                      <button
                        className=" text-white bg-blue-600 rounded-md px-3 py-1"
                        onClick={() => handleEdit(blog)}>
                        Edit
                      </button>
                      <button
                        className=" text-white bg-red-950 rounded-md px-3 py-1"
                        onClick={() => handleDelete(blog.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
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
