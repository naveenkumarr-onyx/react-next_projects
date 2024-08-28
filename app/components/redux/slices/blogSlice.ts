import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: any = {
  blogFormData: {
    title: "",
    description: "",
  },
  blogList: [],
};

export const blogSlice = createSlice({
  name: "new blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      var copyBlogFormData = { ...state.blogFormData };
      copyBlogFormData = {
        ...copyBlogFormData,
        ...action.payload,
      };
      state.blogFormData = copyBlogFormData;
      console.log(state);
    },
    handleBlogSubmit: (state) => {
      state.blogList.push({
        id: nanoid(),
        ...state.blogFormData,
      });
    },
  },
});

export const { handleInputChange, handleBlogSubmit } = blogSlice.actions;
export default blogSlice.reducer;
