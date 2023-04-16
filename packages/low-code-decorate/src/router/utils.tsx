import { LazyElement } from './LazyElement'
import type { IRoute } from './types'

export const dealRoutes = (routes: IRoute[]) => {
  if (routes?.length) {
    routes.forEach((route) => {
      if (typeof route.element === 'function') {
        route.element = <LazyElement importComponent={route.element} />
      }
      if (route.children) {
        dealRoutes(route.children)
      }
    })
  }
}
