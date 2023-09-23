import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Page } from '@/components'
import { routes as homeRoutes } from '@/features/home/routes'
import { routes as detailsRoutes } from '@/features/details/routes'

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
      ...detailsRoutes,
    ],
  },
])
