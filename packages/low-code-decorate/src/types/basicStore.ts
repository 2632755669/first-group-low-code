import { ComponentInfo } from "@/clazz/style"
import { Dispatch } from "react"

export type BasicStore = ComponentObj[]

export interface ComponentObj {
  componentName: string,
  component: any
  config: any
  instance: ComponentInfo | null
}

export interface Action{
  type: string, 
  payload: any
}

export type DispatchF = Dispatch<{type: string, payload: any}>