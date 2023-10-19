import { useEffect } from 'react';
import './App.css';
import { useAddAlbumMutation, useDeleteAlbumMutation, useGetAlbumsQuery, useUpdateAlbumMutation } from './features/apiSlice';
import AlbumCard from './components/AlbumCard';
import Header from './components/Header';
import AddAlbumCard from './components/AddAlbumCard';
function App() {
  const {data: albums, isError, isError1, error: error1, isLoading: loading1, isSuccess: success1} = useGetAlbumsQuery()
  const [addAlbum, {isError: isError2, error: error2, isLoading: loading2, isSuccess: success2}] = useAddAlbumMutation()
  const [updateAlbum] = useUpdateAlbumMutation()
  const [deleteAlbum] = useDeleteAlbumMutation()
  useEffect(()=>{
    if(albums){
      localStorage.setItem('albums', JSON.stringify(albums))
    }
  },[albums])
  const handleAddOrUpdateAlbum = async (album)=>{
    if(album.id){
      await updateAlbum(album)
    }else{
      await addAlbum(album)
    }
  }
  const handleDeleteAlbum = async(id)=>{
    await deleteAlbum(id)
  }
  if(loading1){
    return <h1>Loading...</h1>
  }
  return (
    <div className="container mx-auto">
      <Header/>
      <div className="grid grid-cols-3 gap-4 p-5">
        {albums.map((album, idx)=>(
         <AlbumCard key={album.id} title={`Album ${idx +1}`} album={album} handleAddOrUpdateAlbum={handleAddOrUpdateAlbum} handleDeleteAlbum={handleDeleteAlbum}/>
        ))}
      <AddAlbumCard handleAddOrUpdateAlbum={handleAddOrUpdateAlbum}/>
      </div>
    </div>
  );
}

export default App;
