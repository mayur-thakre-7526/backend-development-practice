import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating post");
      });
  };

  return (
    <section className="create-post-container">
      <h1>Create Post Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <br />
        <br />
        <input type="text" name="caption" placeholder="Enter caption" />
        <br />
        <br />
        <button type="submit">Create Post</button>
        <br />
        <br />
      </form>
    </section>
  );
};

export default CreatePost;
