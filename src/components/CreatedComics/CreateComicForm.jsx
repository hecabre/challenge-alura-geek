import React, { useState } from "react";
import Alert from "../Alert";
import {
  useCreateComicMutation,
  useEditComicMutation,
} from "../../redux/services/comicApi";
import { useNavigate } from "react-router-dom";

const ComicForm = ({ isEditing, comicData, closeFunction }) => {
  const initialFormData = {
    comicName: "",
    description: "",
    imageUrl: "",
    price: "",
  };

  const [formData, setFormData] = useState(
    isEditing ? comicData : initialFormData
  );
  const navigate = useNavigate();
  const [createComic] = useCreateComicMutation();
  const [showAlert, setShowAlert] = useState(false);
  const [editComic] = useEditComicMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      editComic(formData);
      navigate("/created-comics");
    } else {
      createComic(formData);
      setShowAlert(true);
      setFormData(initialFormData);
    }
  };

  return (
    <div
      className={`flex flex-col items-center ${
        isEditing ? "fixed inset-0 backdrop-blur z-20" : "relative top-24"
      }`}
    >
      {showAlert && (
        <Alert
          type={isEditing ? "warning" : "success"}
          closeFunction={() => setShowAlert(false)}
        >
          <h3>Comic created with success</h3>
        </Alert>
      )}
      {isEditing && (
        <form
          onSubmit={handleSubmit}
          className="max-w-sm border p-8 bg-white rounded relative top-20"
        >
          <div className="mb-4">
            <label
              htmlFor="comicName"
              className="block text-gray-600 font-medium mb-2"
            >
              Comic name
            </label>
            <input
              type="text"
              id="comicName"
              name="comicName"
              value={formData.comicName}
              className="form-input w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 border-gray-300 border focus:shadow-blue-500"
              placeholder="Comic name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-2"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              className="form-textarea w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 border-gray-300 border"
              placeholder="Ingrese la descripción del comic"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-600 font-medium mb-2"
            >
              URL Image
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              className="form-input w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 text-gray-500 border-gray-300 border"
              placeholder="URL Image"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-600 font-medium mb-2"
            >
              Comic Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="1"
              value={formData.price}
              className="form-input w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 border-gray-300 border focus:shadow-lg"
              placeholder="Comic Price"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-light py-3 px-6 rounded-lg focus:shadow-outline-blue"
            >
              Edit Comic
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-light py-3 px-6 rounded-lg focus:shadow-outline-blue"
              onClick={closeFunction}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      {!isEditing && (
        <form
          onSubmit={handleSubmit}
          className={`max-w-sm border p-8 bg-white rounded ${
            isEditing ? "hidden" : ""
          }`}
        >
          <div className="mb-4">
            <label
              htmlFor="comicName"
              className="block text-gray-600 font-medium mb-2"
            >
              Comic name
            </label>
            <input
              type="text"
              id="comicName"
              name="comicName"
              value={formData.comicName}
              className="form-input w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 border-gray-300 border focus:shadow-blue-500"
              placeholder="Comic name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-2"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              className="form-textarea w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 border-gray-300 border"
              placeholder="Ingrese la descripción del comic"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-600 font-medium mb-2"
            >
              URL Image
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              className="form-input w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 text-gray-500 border-gray-300 border"
              placeholder="URL Image"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-600 font-medium mb-2"
            >
              Comic Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="1"
              value={formData.price}
              className="form-input w-full px-4 py-3 rounded-lg focus:shadow-outline-blue focus:border-blue-500 border-gray-300 border focus:shadow-lg"
              placeholder="Comic Price"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-light py-3 px-6 rounded-lg focus:shadow-outline-blue"
            >
              Create Comic
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ComicForm;
