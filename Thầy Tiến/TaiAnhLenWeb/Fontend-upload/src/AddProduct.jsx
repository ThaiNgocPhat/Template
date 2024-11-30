
import React, { useState } from 'react';
import axios from 'axios';
import { uploadImage } from './utils/firebaseUtils';

const addProduct = (product) => {
    return axios.post('http://localhost:7700/add-product', product);
};

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!image) {
            alert('Please select an image first!');
            return;
        }

        uploadImage(
            image,
            (progress) => setProgress(progress),
            (url) => {
                setUrl(url);
                handleAddProduct(url);
            },
            (error) => console.error('Error uploading image:', error)
        );
    };

    const handleAddProduct = (imageUrl) => {
        const product = {
            name: "Tên sản phẩm",
            description: "Mô tả sản phẩm",
            imgUrl: imageUrl,
        };

        addProduct(product)
            .then(response => {
                console.log(response.data);
                alert('Upload successful!');
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <div>
            <progress value={progress} max="100" />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            {url && <img src={url} alt="Uploaded" />}
        </div>
    );
};

export default AddProduct;

