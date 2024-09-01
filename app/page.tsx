"use client";
import Link from "next/link";
import AddNewBlog from "./components/redux/blogcomponent/AddNewBlog";
import BlogList from "./components/redux/blogcomponent/BlogList";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import QuillEditor from "./components/quilljs/QuillEditor";

export default function Home() {
  const [blogForm, setBlogForm]: any = useState({
    email: "",
    password: "",
  });
  const [listOfForm, setListOfForm]: any = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setBlogForm({
      ...blogForm,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (editingIndex !== null) {
      var copyForm = [...listOfForm];
      copyForm[editingIndex] = blogForm;
      setListOfForm(copyForm);
      localStorage.setItem("form", JSON.stringify(copyForm));
    } else {
      setListOfForm([...listOfForm, blogForm]);
      localStorage.setItem("form", JSON.stringify(listOfForm || []));
    }

    setBlogForm({
      email: "",
      password: "",
    });
  };

  const handleDelete = (id: any) => {
    let copyForm = [...listOfForm];
    copyForm = copyForm.filter((_: any, index: any) => {
      return index !== id;
    });
    setListOfForm(copyForm);
    localStorage.setItem("form", JSON.stringify(copyForm));
  };

  const handleEdit = (id: any) => {
    let selectedForm = listOfForm[id];
    console.log(selectedForm);
    setBlogForm({
      email: selectedForm.email,
      password: selectedForm.password,
    });
    setEditingIndex(id);
  };

  useEffect(() => {
    const storedForm = localStorage.getItem("form");
    if (storedForm) {
      setListOfForm(JSON.parse(storedForm));
    }
  }, []);

  return (
    <main className=" flex flex-col gap-3 justify-center items-center h-[100vh]">
      <Link
        href={"/login"}
        className="flex px-4 py-2 bg-gradient-to-r from-[#425cd9] via-[#2843ce] to-[#0827bf] text-white rounded-sm hover:bg-gradient-to-r hover:from-[#425bd9e1] hover:via-[#2844cee4] hover:to-[#0827bfe8]">
        Login
      </Link>
      <Link
        href={"/register"}
        className="flex px-4 py-2 bg-gradient-to-r from-[#425cd9] via-[#2843ce] to-[#0827bf] text-white rounded-sm hover:bg-gradient-to-r hover:from-[#425bd9e1] hover:via-[#2844cee4] hover:to-[#0827bfe8]">
        Register
      </Link>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          placeholder="enter email"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="text"
          id="password"
          name="password"
          placeholder="enter password"
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleSubmit}>
        {editingIndex ? "Edit Person" : "Add Person"}
      </button>
      {listOfForm.length > 0 ? (
        <>
          {listOfForm.map((blogForm: any, index: any) => {
            return (
              <div key={index}>
                <p>Person : {index + 1}</p>
                <p>Email: {blogForm.email}</p>
                <p>Password: {blogForm.password}</p>
                <div className=" flex gap-3">
                  <button
                    className="bg-red-600 p-1 rounded-lg"
                    onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                  <button
                    className=" bg-blue-500 p-1 rounded-lg"
                    onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p>No Data Available!</p>
      )}

      <QuillEditor />
    </main>
  );
}
