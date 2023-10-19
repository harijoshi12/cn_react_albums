import React from 'react';

const AlbumCard = ({album, handleAddOrUpdateAlbum, handleDeleteAlbum, title}) => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 rounded-lg shadow-xl flex flex-col justify-between h-full">
      <div>
        <h2 className="text-white text-lg font-semibold mb-1">{title}</h2>
        <p className="text-white text-xl font-extrabold mb-2">{album?.title}</p>
      </div>
      <div className="flex justify-between mt-auto">
        <button
          onClick={() => handleAddOrUpdateAlbum(album)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDeleteAlbum(album.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
};

export default AlbumCard;
