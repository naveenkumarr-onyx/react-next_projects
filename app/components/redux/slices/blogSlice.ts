import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: any = {
  blogFormData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
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
    },

    handleBlogSubmit: (state) => {
      state.blogList.push({
        id: nanoid(2),
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

    handleDeleteSingleBlog: (state, action) => {
      var copyBlogList = [...state.blogList];
      copyBlogList = copyBlogList.filter(
        (singleBlogId: any) => singleBlogId.id !== action.payload
      );
      state.blogList = copyBlogList;
      localStorage.setItem("bloglist", JSON.stringify(copyBlogList));
    },

    setCurrentEditedBlogId: (state, action) => {
      state.currentEditedBlogId = action.payload;
    },

    handleUpdateBlog: (state) => {
      let copyBlogList = [...state.blogList];
      const findIndexOfCurrentBlogItem = copyBlogList.findIndex(
        (singleBlogItem: any) => singleBlogItem.id === state.currentEditedBlogId
      );
      copyBlogList[findIndexOfCurrentBlogItem] = {
        ...copyBlogList[findIndexOfCurrentBlogItem],
        ...state.blogFormData,
      };
      state.blogList = copyBlogList;
      localStorage.setItem("bloglist", JSON.stringify(copyBlogList));
    },
  },
});

export const {
  handleInputChange,
  handleBlogSubmit,
  setBlogListInLocalStorage,
  handleDeleteSingleBlog,
  setCurrentEditedBlogId,
  handleUpdateBlog,
} = blogSlice.actions;
export default blogSlice.reducer;
