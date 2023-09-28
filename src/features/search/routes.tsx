import { Search } from './Search'

export const routes = [
  {
    path: '/search/:query',
    element: <Search />,
    handle: {
      title: 'Search',
    },
  },
]
