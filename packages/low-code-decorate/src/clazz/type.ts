


// 枚举类型，表示 StyleItem 的 type 字段可能的取值
export enum StyleItemType {
  Number = 'number',
  Select = 'select',
  Color = 'color',
}
// Option 类型，表示 select 类型的 StyleItem 的选项
export interface Option {
  name: string;
  val: string | number;
}

// StyleItem 类型，表示一个样式项
export interface StyleItem {
  type: StyleItemType;
  name: string;
  style: string;
  readonly?: boolean;
  val: string | number;
  unit?: string;
  list?: Option[];
  sort?: number;
}

// Styles 类型，表示组件的样式
export interface Styles {
  position: StyleItem[];
  fontSet: StyleItem[];
}

// Attrs 类型，表示组件的属性
export interface Attrs {
  publicAttr: StyleItem[];
  basicAttr: StyleItem[];
}
// Datas 类型，表示组件的数据
export interface Datas {
  list: StyleItem[];
}
// ConfigStyle 类型，表示一个样式项的配置
export interface ConfigStyle {
  [key: string]: StyleItem;
}


// const o = {name:"sdf", age:"sdf"}
// type key = keyof typeof o
