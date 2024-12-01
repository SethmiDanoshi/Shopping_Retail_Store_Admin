import React, { useState } from "react";
import AddProduct from "./AddProduct"; // Ensure correct path

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      name: "Puffer Jacket",
      category: "Jacket",
      description: "Warm and comfortable winter jacket.",
      price: "$47.55",
      sizes: "S, M, L",
      gender: "Unisex",
      discount: "10%",
      stock: "77",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedProduct({ ...products[index] });
  };

  const handleSave = () => {
    const updatedProducts = [...products];
    updatedProducts[editingIndex] = editedProduct;
    setProducts(updatedProducts);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-black text-white pl-10 py-4">
  <h1 className="text-lg font-bold">Product List</h1>
</div>
      {/* <h1 className="text-2xl font-bold mb-4">Product List</h1> */}

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Sizes</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Discount</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              {editingIndex === index ? (
                <>
                  {Object.keys(editedProduct).map((field) => (
                    <td key={field} className="border px-4 py-2">
                      <input
                        type="text"
                        name={field}
                        value={editedProduct[field]}
                        onChange={handleChange}
                        className="border rounded px-2 py-1"
                      />
                    </td>
                  ))}
                  <td className="border px-4 py-2">
                    <button
                      onClick={handleSave}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  {Object.values(product).map((value, fieldIndex) => (
                    <td key={fieldIndex} className="border px-4 py-2">
                      {value}
                    </td>
                  ))}
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Product Section */}
      <div className="mt-6">
        <button
          onClick={() => setShowAddProduct(!showAddProduct)}
          className="bg-indigo-500 text-white px-4 py-2 rounded"
        >
          {showAddProduct ? "Back to product Data" : "Add New Product"}
        </button>

        {showAddProduct && <AddProduct />}
      </div>
    </div>
  );
};

export default ProductList;




