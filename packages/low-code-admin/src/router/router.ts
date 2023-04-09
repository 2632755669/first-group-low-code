/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 申明式Router API
 * @author: chenjunlin05
 */
import type React from 'react';
export * from './routerClass';

export interface RouterItem {
  path: string
  name: string
  key?: string // 数据的唯一标识
  component?: any
  icon?: string | React.ReactNode // 配置展示ICON
  exact?: boolean
  strict?: boolean
  target?: '_blank' | '_self'
  redirect?: string // 需要跳转的地址
  children?: RouterItem[]
  // 是否展示在菜单栏目
  leftMenu?: boolean // 是否在左边菜单栏展示
  topMenu?: boolean // 是否在顶边菜单栏展示
}
