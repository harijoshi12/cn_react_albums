import { useEffect, useState } from 'react';
import './App.css';
import { useAddAlbumMutation, useDeleteAlbumMutation, useGetAlbumsQuery, useUpdateAlbumMutation } from './features/apiSlice';
import AlbumCard from './components/AlbumCard';
import Header from './components/Header';
import AddAlbumCard from './components/AddAlbumCard';
import AlbumModal from './components/AlbumModal';
import { Spinner } from './components/Spinner';
function App() {
  const [albums, setAlbums] = useState(() => {
    // Try to get albums from local storage on initial render
    const localData = localStorage.getItem('albums');
    return localData ? JSON.parse(localData) : [];
  });

  const {
    data: fetchedAlbums,
    isError,
    error,
    isLoading,
  } = useGetAlbumsQuery(undefined, {
    skip: albums.length > 0, // Skip fetching if we already have albums
  });
  const [addAlbum, { isError: isAddError, error: addError, isLoading: isAdding, isSuccess: isAddSuccess }] = useAddAlbumMutation();
  const [updateAlbum, { isError: isUpdateError, error: updateError, isLoading: isUpdating }] = useUpdateAlbumMutation();
  const [deleteAlbum, { isError: isDeleteError, error: deleteError, isLoading: isDeleting }] = useDeleteAlbumMutation();

  const [showModal, setShowModal] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  // Fetch data only once and store it in local storage
  useEffect(() => {
    if (!isLoading && fetchedAlbums) {
      localStorage.setItem('albums', JSON.stringify(fetchedAlbums.slice(0, 5)));
      setAlbums(fetchedAlbums.slice(0, 5)); // Initially set only first 5 albums
    }
  }, [fetchedAlbums, isLoading]);

  const handleOpenModal = (album = null) => {
    setCurrentAlbum(album);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddOrUpdateAlbum = async (album) => {
    if (album.id) {
      // Update album
      const updatedAlbum = await updateAlbum(album).unwrap();
      const updatedAlbums = albums.map(a => a.id === updatedAlbum.id ? updatedAlbum : a);
      setAlbums(updatedAlbums);
      localStorage.setItem('albums', JSON.stringify(updatedAlbums)); // Update local storage
    } else {
      // Add new album
      const newAlbum = await addAlbum(album).unwrap();
      const newAlbumsList = [...albums, newAlbum];
      setAlbums(newAlbumsList); // Add the new album to the local state
      localStorage.setItem('albums', JSON.stringify(newAlbumsList)); // Update local storage
    }
    handleCloseModal();
  };

  const handleDeleteAlbum = async (id) => {
    await deleteAlbum(id).unwrap();
    // Update local storage by removing the deleted album
    const updatedAlbums = albums.filter(album => album.id !== id);
    setAlbums(updatedAlbums);
    localStorage.setItem('albums', JSON.stringify(updatedAlbums));
  };

  // Display loading or error messages
  let content
  if (isLoading || isAdding || isUpdating || isDeleting) {
    content = <Spinner />;
  } else if (isError || isAddError || isUpdateError || isDeleteError) {
    const errorMessage = error || addError || updateError || deleteError;
    content = <h1>Error: {errorMessage?.data?.message || 'An error occurred'}</h1>;
  } else {
    content =(
      <>
        <AddAlbumCard handleOpenModal={handleOpenModal} />
        {albums.map((album, idx) => (
          <AlbumCard key={album.id} title={`Album ${idx + 1}`} album={album} handleOpenModal={handleOpenModal} handleDeleteAlbum={handleDeleteAlbum} />
        ))}
      </>
      )
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="grid grid-cols-3 gap-4 p-5">
        {content}
      </div>
      {showModal && (
        <AlbumModal
          existingAlbum={currentAlbum}
          onSave={handleAddOrUpdateAlbum}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
