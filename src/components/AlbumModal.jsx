import React, { useState } from 'react';

const AlbumModal = ({ existingAlbum, onSave, onClose }) => {
  const [title, setTitle] = useState(existingAlbum?.title || '');

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2>Enter Your Album Title</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={() => {
              onSave({ ...existingAlbum, title });
              onClose();
            }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumModal;
