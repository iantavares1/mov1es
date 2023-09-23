import { Details } from './Details'

export const routes = [
  {
    path: '/details/:movieId',
    element: <Details />,
    handle: {
      title: 'Details',
    },
  },
]
