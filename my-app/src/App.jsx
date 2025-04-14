import React from 'react';
import {  createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Alumini from './Pages/Alumini';
import NotFound from './Pages/NotFound';
import Blogs from './Pages/Blogs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Events" element={<Events />} />
      <Route path="Team" element={<Team />} />
      <Route path="Blogs" element={<Blogs />} />
      <Route path="Alumini" element={<Alumini />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  
  return <RouterProvider router={router} />;
};

export default App;
