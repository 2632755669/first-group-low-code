
import { nanoid } from 'nanoid'
import { Attrs, StyleItem, Styles } from './type'
import { configAttr, ConfigAttrKey, ConfigKey, configStyle } from './config'

type StyleObj = {
  [key in ConfigKey]?: StyleItem
}

export class Style {
  private styles!: Styles
  private _top = 0
  private _left = 0

  private _posObj: StyleObj = {

  }
  private _fontObj: StyleObj = {

  }
  constructor() {
    // this.styles = { position: [], fontSet: [] }
  }
  /**
   */
  get left() {
    return this._posObj.left?.val || 0
  }

    /**
   * 
   */
  get top() {
    return this._posObj.top?.val || 0
  }
  /**
   * 所有的样式
   * Object的key小驼峰命名
   * return Object
   */
  get allStyles() {
    const o: any = {}
    Object.values(this._fontObj).forEach(item => {
      o[item.style] = item.val + "" + (item.unit || "")
    })
    Object.values(this._posObj).forEach(item => {
      o[item.style] = item.val + "" + (item.unit || "")
    })
    // // o.left = this._left + 'px'
    // o.top = this._top + 'px'
    return o;


  }

  /**
   * 所有和位置相关的信息
   * return StyleItem[]
   */
  get pos() {
    return Object.values(this._posObj)
  }
  /**
 * 所有和字体相关的信息
 * return StyleItem[]
 */
  get fonts() {
    return Object.values(this._fontObj)
  }

  /**
   * @deprecated
   * 查找需要更新的样式
   * @param key 
   * @param styleList 
   * @returns 
   */
  private getStyleItemByKey(key: string, styleList: StyleItem[]): StyleItem | undefined {
    return styleList.find(item => item.style === key)
  }

  /**
   * 设置样式信息
   * @param position string[] 
   * @param fonts string[]
   * @returns Style
   */
  buildStyle(position: ConfigKey[] = ["width", "height"], fonts: ConfigKey[] = ["fontSize"]) {
    position.forEach(key => {
      const obj = configStyle[key]
      if (obj)
        this._posObj[key] = { ...obj }
    })
    fonts.forEach(key => {
      const obj = configStyle[key]
      if (obj)
        this._fontObj[key] = { ...obj }
      // this.styles.fontSet.push({ ...configStyle[key] })
    })
    return this;
  }
  /**
   * @deprecated
   * 设置位置的left和top信息绝对或相对定位
   * @param left 
   * @param top 
   * @returns Style
   */
  setLeftAndTop(left: number, top?: number) {
    this._left = left;
    if (top) {
      this._top = top
    }
    return this
  }

  /**
   * 设置位置信息
   * @param key 样式的名字
   * @param val 设置的值
   * @returns  Style
   */
  setPos(obj: any,) {
    Object.keys(obj).forEach((_key) => {
      const key = _key as unknown as ConfigKey
      const tmp = this._posObj[key]
      if (tmp) {
        tmp.val = obj[_key] || ""
      }
    })

    // Object.keys()

    // const tmp = this.getStyleItemByKey(key, this.styles.position)
    // if (tmp) {
    //   tmp.val = val
    // }
    return this
  }
  /**
   * 设置字体相关的样式
   * @param key 字体的名字 
   * @param val 设置的值
   * @returns Style
   */
  setFont(obj:any) {
    Object.keys(obj).forEach((_key) => {
      const key = _key as unknown as ConfigKey
      const tmp = this._fontObj[key]
      if (tmp) {
        tmp.val = obj[_key] || ""
      }
    })
    return this;
  }

}
/**
 * 组件的基础属性
 */
class Attr {
  private _attrs!: Attrs
  constructor() {
    this._attrs = {
      publicAttr: [],
      basicAttr: []
    }
  }
  get attrs() {
    return this._attrs
  }

  get val() {
    return (this.attrs.basicAttr.find(item => item.style == "input")?.val || "") as string
  }
  set val(val: string | number) {
    const item = this.attrs.basicAttr.find(item => item.style == "input")
    if (item)
      item.val = val;
  }
  /**
   * 设置属性
   * @param basicAttr 基础属性
   * @param publicAttr 
   * @returns 
   */
  buildAttr(basicAttr: ConfigAttrKey[] = ["input"], publicAttr: ConfigAttrKey[] = []) {
    basicAttr.forEach(key => {
      this.attrs.basicAttr.push({ ...configAttr[key] })
    })
    publicAttr.forEach(key => {
      this.attrs.publicAttr.push({ ...configAttr[key] })
    })
    return this;
  }



}





export class ComponentInfo {
  id = nanoid()
  name = ""
  private _style: Style
  private _attr!: Attr

  constructor(name?: string) {
    if (name)
      this.name = name
    this._style = new Style()
    this._attr = new Attr()
  }
  get attr() {
    return this._attr
  }

  get style() {
    return this._style
  }


}
