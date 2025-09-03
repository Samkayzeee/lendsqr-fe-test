import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';

import Login from './pages/login/Login.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
// import Users from './pages/users/Users.tsx';
import UserDetails from './pages/userdetails/UserDetails.tsx';



const routers = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/users", element: <Dashboard/> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/:id", element: <UserDetails /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
