import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    size: [],
    gender: "",
    basePrice: "",
    stock: "",
    discount: "",
    discountType: "",
    category: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSizeChange = (size) => {
    setProduct((prev) => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size],
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setProduct((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }));
  };

  const handleSubmit = () => {
    console.log("Product Added:", product);
    // Add API integration here
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg border rounded-lg w-full max-w-4xl p-6">
        <div className="bg-indigo-500 text-white text-center py-2 rounded-t-lg">
          <h1 className="text-2xl font-bold">Add New Product</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* General Information */}
          <div>
            <label className="block mb-2 font-semibold">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Puffer Jacket With Pocket Detail"
            />
            <label className="block mt-4 mb-2 font-semibold">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Write product description..."
            />
            <div className="mt-4">
              <p className="font-semibold">Pick Available Size</p>
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`border px-3 py-1 rounded m-1 ${
                    product.size.includes(size) ? "bg-indigo-500 text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold">Gender</p>
              {["Men", "Woman", "Unisex"].map((gender) => (
                <label key={gender} className="mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={product.gender === gender}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <p className="font-semibold mb-2">Upload Images</p>
            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="block w-full"
            />
            <div className="flex mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="h-20 w-20 object-cover mr-2 rounded"
                />
              ))}
            </div>
          </div>

          {/* Pricing and Stock */}
          <div>
            <label className="block mb-2 font-semibold">Base Pricing</label>
            <input
              type="number"
              name="basePrice"
              value={product.basePrice}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="$47.55"
            />
            <label className="block mt-4 mb-2 font-semibold">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="77"
            />
            <label className="block mt-4 mb-2 font-semibold">Discount</label>
            <input
              type="text"
              name="discount"
              value={product.discount}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="10%"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Jacket"
            />
            <button
              onClick={handleSubmit}
              className="w-full mt-4 bg-green-500 text-white py-2 rounded"
            >
              Add Product
            </button>
          </div>
          
        </div>

        {/* See Product Details Button */}
        
        <div className="mt-6">
          {/* New "See Product Details" Button */}
          <button
            onClick={() => console.log(product)} // You can replace this with a redirect or any other action
            className="w-full mt-4 bg-indigo-500 text-white py-2 rounded"
          >
            See Product Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
