
export interface IRoute {
  path: string
  element: React.ReactNode | (() => Promise<{ default: React.ComponentType<any> }>)
  children?: IRoute[]
}
