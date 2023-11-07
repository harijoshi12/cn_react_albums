# Albums Collection App

## Table of Contents

- [Albums Collection App](#Albums Collection App)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [Demo](#demo)
  - [Author](#author)

## Introduction

This is a simple dummy App built with React(Vite) and Redux-toolkit(RTK Query). It allows users to add, update, and delete albums, with changes persisting in local storage.

## Features

- Add new albums to the collection 
- Edit details of existing albums   
- Delete albums from the collection 
- View a list of all albums         
- Data persistence with Local Storage         

## Technologies

- React
- Redux Toolit
- RTK Query
- JSONPlacehoder for backend
- Local Storage

## Installation

To run this project, you'll need to have Node.js and npm installed. Follow these steps:

```bash
# Clone the repository
git clone https://github.com/harijoshi12/cn_react_albums.git

# Navigate to the project folder
cd cn_react_albums

# Install dependencies
npm install

# Start the development server
npm run dev
```
## Folder Structure
```plaintext
|-- public
|   |-- vite.svg
|-- src
|   |-- app
|   |   |-- store.js
|   |-- components
|   |   |-- AddAlbumCard.js
|   |   |-- AlbumCare.js
|   |   |-- AlbumModal.js
|   |   |-- Header.js
|   |   |-- Spinner.js
|   |-- features
|   |   |-- apiSlice.js
|   |-- App.css
|   |-- App.js
|   |-- index.css
|   |-- main.js
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
|-- vite.config.js
```

## Demo
https://cn-album-collection.netlify.app/

## Author
[Hari Joshi](https://github.com/harijoshi12)

---