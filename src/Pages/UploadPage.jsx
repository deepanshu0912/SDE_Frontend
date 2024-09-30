import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './UploadPage.css';

const UploadPage = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('None'); // Initialize category
    const [price, setPrice] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // New phone number state
    const [image, setImage] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare FormData to send data to the backend
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('phone_number', phoneNumber);
        formData.append('image', image);

        try {
            // Make API call to upload the product
            const response = await fetch('http://localhost:8000/api/products/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Uncomment if you need to pass the JWT token
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Product uploaded successfully');
                // Redirect to the home page after successful upload
                navigate('/'); 
            } else {
                const errorData = await response.json();
                console.error('Upload error:', errorData);
                alert('Upload failed: ' + errorData.detail);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
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
                <select
                    className="input-field"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} // Handle category change
                    required
                >
                    <option value="None">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Books">Books</option>
                    <option value="None">None</option> {/* Option to select none */}
                </select>
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="input-field"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} // Handle phone number change
                    required
                />
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
