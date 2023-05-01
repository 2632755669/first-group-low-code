import { ConfigStyle, StyleItemType } from "./type";

export const configStyle = {
  'fontSize': {
    type: StyleItemType.Number,
    style: "fontSize",
    name: "字体大小",
    readonly: false,
    val: 14,
    unit: "px",
  },
  'fontWeight': {
    type: StyleItemType.Select,
    style: "fontWeight",
    name: "字体宽度",
    readonly: false,
    val: "normal",
    list: [
      { name: "normal", val: "normal" },
      { name: "500", val: 500 },
      { name: "bolder", val: "bolder" },
    ]
  },
  'color': {
    type: StyleItemType.Color,
    style: "color",
    name: "颜色",
    readonly: false,
    val: "#e43",
  },
  "marginLeft": {
    type: StyleItemType.Number,
    style: "marginLeft",
    name: "左边距",
    readonly: false,
    val: 10,
    unit: "px",
  },
  "marginRight": {
    type: StyleItemType.Number,
    style: "marginRight",
    name: "右边距",
    readonly: false,
    val: 10,
    unit: "px",
  },
  "marginTop": {
    type: StyleItemType.Number,
    style: "marginTop",
    name: "上边距",
    readonly: false,
    val: 10,
    unit: "px",
  },
  "left": {
    type: StyleItemType.Number,
    style: "left",
    name: "左边离",
    readonly: false,
    val: 0,
    unit: "px",
  },
  "top": {
    type: StyleItemType.Number,
    style: "top",
    name: "上边距",
    readonly: false,
    val: 0,
    unit: "px",
  },
  "width": {
    type: StyleItemType.Number,
    style: "width",
    name: "宽度",
    readonly: false,
    val: 300,
    unit: "px",
  },
  "height": {
    type:StyleItemType.Number,
    style: "height",
    name: "高度",
    readonly: false,
    val: 100,
    unit: "px",
  },

}

export const configAttr = {
  'input': {
    type: StyleItemType.Number,
    style: "input",
    name: "内容",
    readonly: false,
    val: "",
  },
}

export type ConfigAttrKey = keyof typeof configAttr

export type ConfigKey = keyof  typeof configStyle
