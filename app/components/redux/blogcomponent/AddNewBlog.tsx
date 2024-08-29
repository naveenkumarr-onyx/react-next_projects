import React from "react";
import FormComponent from "../../dynamicForm/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  handleInputChange,
  handleBlogSubmit,
  handleUpdateBlog,
  setCurrentEditedBlogId,
} from "../slices/blogSlice";

const AddNewBlog = () => {
  const { newblog } = useSelector((state: any) => state);
  const { blogFormData, currentEditedBlogId } = newblog;
  const dispatch = useDispatch();

  const onChangeInput = (event: any) => {
    const { name, value } = event.target;
    dispatch(
      handleInputChange({
        [name]: value,
      })
    );
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (currentEditedBlogId !== null) dispatch(handleUpdateBlog());
    else dispatch(handleBlogSubmit());

    if (currentEditedBlogId !== null) {
      dispatch(setCurrentEditedBlogId(null));
    }

    dispatch(
      handleInputChange({
        title: "",
        description: "",
      })
    );
  };

  return (
    <div>
      <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
        <FormComponent
          label="Title"
          name="title"
          type="text"
          id="title"
          placeholder="Enter the blog title"
          value={blogFormData.title}
          onChange={onChangeInput}
        />
        <FormComponent
          label="description"
          name="description"
          type="text"
          id="descrition"
          placeholder="Enter the blog descrition"
          value={blogFormData.description}
          onChange={onChangeInput}
        />
        <button
          type="submit"
          disabled={
            (blogFormData.title && blogFormData.description).length === 0
          }>
          {currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
