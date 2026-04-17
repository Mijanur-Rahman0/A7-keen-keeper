import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './layout/RootLayout.jsx';
import Timeline from './pages/timeline/Timeline.jsx';
import Stats from './pages/stats/Stats.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {index: true, Component: Homepage},
      {path: 'timeline', Component: Timeline},
      {path: 'stats', Component: Stats},
      
    ],
    errorElement: <NotFoundPage/>,

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
