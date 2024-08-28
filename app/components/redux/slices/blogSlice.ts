import { createSlice, nanoid } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

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
      localStorage.setItem("bloglist", JSON.stringify(state.blogList));
      state.blogFormData = {
        title: "",
        description: "",
      };
    },
    setBlogListInLocalStorage: (state, action) => {
      state.blogList = action.payload.blogList;
    },
  },
});

export const {
  handleInputChange,
  handleBlogSubmit,
  setBlogListInLocalStorage,
} = blogSlice.actions;
export default blogSlice.reducer;
