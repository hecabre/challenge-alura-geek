import { useState } from "react";

function Modal({ title, action, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    action();
    closeModal();
  };

  return (
    <div className="relative bg-red-500 text-white rounded">
      <button className="px-4 py-2 rounded" onClick={openModal}>
        {title}
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="backdrop-blur absolute inset-0 z-[-1]"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-lg font-bold mb-4 text-black">Confirm</h2>
            <p className="text-black">{description}</p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 py-1 px-3 rounded mr-4"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
