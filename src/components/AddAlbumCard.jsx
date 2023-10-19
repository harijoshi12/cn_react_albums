import React from 'react'

const AddAlbumCard = ({handleAddOrUpdateAlbum}) => {
  return (
    <div
    onClick={() => handleAddOrUpdateAlbum()}
    className="cursor-pointer bg-gray-300 p-4 rounded shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out flex flex-col justify-between h-full relative"
  >
     <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-700 opacity-50 text-center z-10">
          Add New Album
        </span>
      </div>
    <div>
      <h2 className="animate-pulse bg-gray-400 h-6 mb-2 w-1/4"></h2>
      <p className="animate-pulse bg-gray-400 h-4 mb-2 w-3/4"></p>
      <p className="animate-pulse bg-gray-400 h-4 mb-2 w-3/4"></p>
    </div>
    <div className="flex justify-between">
      <button className="animate-pulse bg-gray-400 h-6 w-16"></button>
      <button className="animate-pulse bg-gray-400 h-6 w-16"></button>
    </div>
  </div>
  )
}

export default AddAlbumCard