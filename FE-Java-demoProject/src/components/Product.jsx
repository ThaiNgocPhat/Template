import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    categoryId: ''
  });

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    categoryId: ''
  });

  const fetchApiCategory = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/categories/`);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApiProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/products/`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiCategory();
    fetchApiProduct();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (product) => {
    setToggleEdit(true);
    setFormValues(product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/products/${formValues.id}`, formValues);
      setProducts(products.map(product => (product.id === formValues.id ? formValues : product)));
      setToggleEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/products/`, newProduct);
      setProducts([...products, res.data]);
      setNewProduct({
        name: '',
        price: '',
        description: '',
        categoryId: ''
      });
      setToggleAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Product List</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.categoryId}</td>
                <td>
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                  <button onClick={() => handleEditClick(product)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setToggleAdd(!toggleAdd)}>Add New Product</button>
      </div>
      {toggleAdd && (
        <div className='add-product'>
          <h2>Add New Product</h2>
          <form onSubmit={handleAddProduct}>
            <input type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} placeholder="Name" required />
            <input type="number" name="price" value={newProduct.price} onChange={handleNewProductChange} placeholder="Price" required />
            <input type="text" name="description" value={newProduct.description} onChange={handleNewProductChange} placeholder="Description" required />
            <select name="categoryId" value={newProduct.categoryId} onChange={handleNewProductChange} required>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
          <button onClick={() => setToggleAdd(false)}>Cancel</button>
        </div>
      )}
      {toggleEdit && (
        <div className='edit-product'>
          <h2>Edit Product</h2>
          <form onSubmit={handleEditProduct}>
            <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
            <input type="number" name="price" value={formValues.price} onChange={handleChange} required />
            <input type="text" name="description" value={formValues.description} onChange={handleChange} required />
            <select name="categoryId" value={formValues.categoryId} onChange={handleChange} required>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            <button type="submit">Update</button>
          </form>
          <button onClick={() => setToggleEdit(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}
