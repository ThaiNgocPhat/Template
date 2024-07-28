import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    userName: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  });

  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/users/');
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (user) => {
    setToggleEdit(true);
    setFormValues(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/users/${formValues.id}`, formValues);
      setUsers(users.map(user => (user.id === formValues.id ? formValues : user)));
      setToggleEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/users/', newUser);
      setUsers([...users, res.data]);
      setNewUser({
        userName: '',
        email: '',
        password: '',
        address: '',
        phone: ''
      });
      setToggleAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>User List</h1>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
                  <button className="update" onClick={() => handleEditClick(user)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add" onClick={() => setToggleAdd(!toggleAdd)}>Add New User</button>
      </div>
      {toggleAdd && (
        <div className='add-user'>
          <h2>Add New User</h2>
          <form onSubmit={handleAddUser}>
            <input type="text" name="userName" value={newUser.userName} onChange={handleNewUserChange} placeholder="Name" />
            <input type="email" name="email" value={newUser.email} onChange={handleNewUserChange} placeholder="Email" />
            <input type="password" name="password" value={newUser.password} onChange={handleNewUserChange} placeholder="Password" />
            <input type="text" name="address" value={newUser.address} onChange={handleNewUserChange} placeholder="Address" />
            <input type="text" name="phone" value={newUser.phone} onChange={handleNewUserChange} placeholder="Phone" />
            <button type="submit">Add</button>
          </form>
          <button className="cancel" onClick={() => setToggleAdd(false)}>Cancel</button>
        </div>
      )}
      {toggleEdit && (
        <div className='edit-user'>
          <h2>Edit User</h2>
          <form onSubmit={handleEditUser}>
            <input type="text" name="userName" value={formValues.userName} onChange={handleChange} />
            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
            <input type="password" name="password" value={formValues.password} onChange={handleChange} />
            <input type="text" name="address" value={formValues.address} onChange={handleChange} />
            <input type="text" name="phone" value={formValues.phone} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
          <button className="cancel" onClick={() => setToggleEdit(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
