import React from 'react';

const AddUser = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;

        const user={name,email};
        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            alert('add user successfully');
            e.target.reset();
          })
    }
    return (
        <div>
            <h1>Add User</h1>
            <form  onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Name' required /> <br />
            <input type="email" name='email' placeholder='Email' required /> <br />
            <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;