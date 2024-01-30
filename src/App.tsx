import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Success } from './pages/Success'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/success',
    element: <Success />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
