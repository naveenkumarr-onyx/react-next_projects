import React from "react";
import FormComponent from "../../dynamicForm/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import { handleInputChange, handleBlogSubmit } from "../slices/blogSlice";

const AddNewBlog = () => {
  const { newblog } = useSelector((state: any) => state);
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
    dispatch(handleBlogSubmit());
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
          value={newblog.blogFormData.title}
          onChange={onChangeInput}
        />
        <FormComponent
          label="description"
          name="description"
          type="text"
          id="descrition"
          placeholder="Enter the blog descrition"
          value={newblog.blogFormData.description}
          onChange={onChangeInput}
        />
        <button
          type="submit"
          disabled={
            (newblog.blogFormData.title && newblog.blogFormData.description)
              .length === 0
          }>
          Add new Blog
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
