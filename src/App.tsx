import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataProvider } from './DataContext/DataContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './layouts/Routes';

function App() {


  return (
    <DataProvider>
      <RouterProvider router={router}/>
    </DataProvider>
  );
}

export default App;
