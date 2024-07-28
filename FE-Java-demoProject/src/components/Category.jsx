import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    description: ''
  });

  const [newCategory, setNewCategory] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get('http://localhost:8080/categories/');
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/categories/${id}`);
      setCategories(categories.filter(category => category.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (category) => {
    setToggleEdit(true);
    setFormValues(category);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleNewCategoryChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/categories/${formValues.id}`, formValues);
      setCategories(categories.map(category => (category.id === formValues.id ? formValues : category)));
      setToggleEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/categories/', newCategory);
      setCategories([...categories, res.data]);
      setNewCategory({
        name: '',
        description: ''
      });
      setToggleAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Categories</h1>
        <table className="category-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <button onClick={() => handleEditClick(category)}>Edit</button>
                  <button onClick={() => deleteCategory(category.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setToggleAdd(!toggleAdd)}>Add New Category</button>
      </div>
      {toggleAdd && (
        <div className="add-category">
          <h2>Add New Category</h2>
          <form onSubmit={handleAddCategory}>
            <input
              type="text"
              name="name"
              value={newCategory.name}
              onChange={handleNewCategoryChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="description"
              value={newCategory.description}
              onChange={handleNewCategoryChange}
              placeholder="Description"
              required
            />
            <button type="submit">Add</button>
          </form>
          <button onClick={() => setToggleAdd(false)}>Cancel</button>
        </div>
      )}
      {toggleEdit && (
        <div className="edit-category">
          <h2>Edit Category</h2>
          <form onSubmit={handleEditCategory}>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Update</button>
          </form>
          <button onClick={() => setToggleEdit(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}
