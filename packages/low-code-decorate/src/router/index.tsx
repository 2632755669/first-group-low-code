
import { useRoutes, type RouteObject, Navigate } from 'react-router-dom'
import { dealRoutes } from './utils'
import type { IRoute } from './types'
import { Index } from '../pages/Index'
import NotFound from '../pages/NotFound'

const routes: IRoute[] = [
  {
    path: '',
    element: <Navigate to="/index" replace />
  },
  {
    path: '/index',
    element: <Index />
  },
  {
    path: '/not-found',
    element: <NotFound />
  }
]

dealRoutes(routes)

export const RoutesNode = () => {
  const element = useRoutes(routes as RouteObject[])
  return element
}

export default RoutesNode
