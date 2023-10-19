import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const albumApi = createApi({
  reducerPath: 'albumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder)=>({
    getAlbums: builder.query({
      query: ()=>'albums'
    }),
    addAlbum: builder.mutation({
      query: (newAlbum)=>({
        url: 'albums',
        method: 'POST',
        body: newAlbum
      })
    }),
    updateAlbum: builder.mutation({
      query:(updatedAlbum)=>({
        url: `albums/${updatedAlbum.id}`,
        method: 'PUT',
        body: updatedAlbum
      })
    }),
    deleteAlbum: builder.mutation({
      query: (albumId)=>({
        url: `albums/${albumId}`,
        method: 'DELETE'
      })
    })
  })
})

export const {useGetAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation, useUpdateAlbumMutation } = albumApi