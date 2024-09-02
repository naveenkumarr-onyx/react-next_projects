import React, { useEffect, useState } from "react";

const BlogPractise = () => {
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
      var updatedListOfForm = [...listOfForm, blogForm];
      setListOfForm(updatedListOfForm);
      localStorage.setItem("form", JSON.stringify(updatedListOfForm));
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
    console.log(copyForm);
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
    console.log(storedForm);
    if (storedForm) {
      setListOfForm(JSON.parse(storedForm));
    }
  }, []);
  return (
    <div>
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
      {blogForm.email && blogForm.password && (
        <button onClick={handleSubmit}>
          {editingIndex ? "Edit Person" : "Add Person"}
        </button>
      )}

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
    </div>
  );
};

export default BlogPractise;
