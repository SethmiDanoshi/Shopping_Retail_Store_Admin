import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "User name",
    email: "mi@xpaytech.co",
    phone: "+20-01274318900",
    address: "285 N Broad St, Elizabeth, NJ 07208, USA",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved Data:", formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-black text-white pl-10 py-4 w-full ">
        <h1 className="text-lg font-bold">Profile</h1>
      </div>

      {/* Profile Section */}
      <div className="p-6 bg-indigo-50 rounded-lg shadow-md max-w-lg w-full mt-4">
        <h2 className="text-xl font-semibold mb-6">
          {isEditing ? "Edit Profile" : "Profile"}
        </h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Display Profile Picture or Placeholder */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 font-bold text-2xl">+</span>
            )}

            {/* Upload Icon (Editable Only) */}
            {isEditing && (
              <>
                <label
                  htmlFor="profileImageUpload"
                  className="absolute bottom-0 right-0 bg-gray-300 rounded-full p-2 cursor-pointer"
                >
                  <img
                    src="camera-icon.svg"
                    alt="Upload"
                    className="w-4 h-4"
                  />
                </label>
                <input
                  id="profileImageUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </>
            )}
          </div>
          {profileImage && isEditing && (
            <button
              onClick={() => setProfileImage(null)}
              className="text-sm text-red-500 mt-2 underline"
            >
              Remove Profile Picture
            </button>
          )}
        </div>

        <div className="space-y-4">
          {["name", "email", "phone", "address"].map((field) => (
            <div key={field}>
              <p className="font-medium capitalize">{field}:</p>
              {isEditing ? (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg p-2 mt-1"
                />
              ) : (
                <p className="text-gray-600">{formData[field]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg w-full hover:bg-indigo-600"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg w-full hover:bg-gray-300"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg w-full hover:bg-indigo-600"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
