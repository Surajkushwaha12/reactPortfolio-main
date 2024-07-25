import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, }  from "react-router-dom"
import Hero from './Components/Hero/Hero'
import ProjectsContainer from './Components/Projects/ProjectsContainer'
import App from './App'
import Contactme from './Components/Contactme/Contactme'
import Skills from './Components/Skills/Skills'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero />} /> 
      <Route path='contactme' element={<Contactme />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<ProjectsContainer />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>
);
