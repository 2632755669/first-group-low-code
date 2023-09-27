import type { ComponentNameEnum } from '@/enums'

export interface IComponent {
  componentName: ComponentNameEnum;
  title: string;
  icon?: string;
  group?: string;
  properties?: Array<{
    name: string;
    propType: string;
    description: string;
    defaultValue: any;
  }>
  [key: string]: any;
}

export type IComponentMap = Record<ComponentNameEnum, IComponent>;

export type IComponentInstanceMap = Record<ComponentNameEnum, React.FC<any>>;

export interface IComponentTree {
  componentName: ComponentNameEnum;
  props?: Record<string, any>;
  id: string;
  parentIds: string[] | null;
  children: IComponentTree[]
}

