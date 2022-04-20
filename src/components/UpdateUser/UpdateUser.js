import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const updateUser = { name, email };
    // send data to the server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("add user successfully");
        e.target.reset();
      });
  };
  return (
    <div>
      <h1>Update User:{users.name}</h1>
      <form onSubmit={handleUpdateSubmit}>
        <input type="text" name="name" placeholder="Name" required /> <br />
        <input type="email" name="email" placeholder="Email" required /> <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
