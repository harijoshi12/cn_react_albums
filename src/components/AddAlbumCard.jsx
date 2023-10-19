import React from 'react'

const AddAlbumCard = ({handleAddOrUpdateAlbum}) => {
  return (
    <div className="bg-gray-300 p-4 rounded flex items-center justify-center">
      <button
        onClick={() => handleAddOrUpdateAlbum()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Album
      </button>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-blue-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-blue-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAlbumCard