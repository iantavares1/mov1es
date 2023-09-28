import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Page } from '@/components'
import { routes as homeRoutes } from '@/features/home/routes'
import { routes as searchRoutes } from '@/features/search/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <div>ops</div>,
    id: 'root',
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      ...homeRoutes,
      ...searchRoutes,
    ],
  },
])
