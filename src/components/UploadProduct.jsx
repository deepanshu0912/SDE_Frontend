// UploadPage.jsx
import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Name:", productName);
        console.log("Description:", description);
        console.log("Price:", price);
        console.log("Image:", image);
    };

    return (
        <div className="upload-page">
            <h1 className="headline">Upload Your Reused Product</h1>
            <form className="upload-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    className="input-field"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    className="input-field description-field"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <input
                    type="number"
                    placeholder="Price"
                    className="input-field"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="file"
                    className="input-field"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                />
                <button type="submit" className="upload-button">Upload Product</button>
            </form>
        </div>
    );
};

export default UploadPage;
