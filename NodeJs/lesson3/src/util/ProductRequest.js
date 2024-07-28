import axios from 'axios';

export const getCategories = async () => {  
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
    }

export const getAllProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
    }
export const getOneProduct = async (id) => { 
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
    }
       