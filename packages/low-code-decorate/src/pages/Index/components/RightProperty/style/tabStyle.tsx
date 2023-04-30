
import { Form, Input, Select, Collapse } from "antd"
//@ts-ignore
import { SketchPicker } from 'react-color'
import "../index.less"
import { ComponentInfo, Style } from "@/clazz/style";
import { StyleItem, StyleItemType } from "@/clazz/type";
import { useContext, useEffect, useState } from "react";
import { curComponentConText } from "@/contexts/componentList";
const { Option } = Select;
const { Panel } = Collapse;
const compoent = new ComponentInfo()
const style = compoent.style
style.buildStyle(["width", "height"], ["fontSize", "fontWeight", "color"])
console.log(compoent)
console.log(style.allStyles)



const getinitaPosValues = (style: Style | null) => {
  const obj: any = {}
  if (style)
    style.pos.forEach(item => {
      obj[item.style] = item.val
    })
  return obj
}

const getinitaFontValues = (style: Style | null) => {
  const obj: any = {}
  if (style)
    style.fonts.forEach(item => {
      obj[item.style] = item.val
    })
  return obj
}


const GetFormItem = (item: StyleItem, fn?: Function, color?: string) => {
  switch (item.type) {
    case StyleItemType.Number:
      return <Form.Item
        key={item.style}
        label={item.name}
        name={item.style}
      >
        <Input addonAfter="px" />
      </Form.Item>
    case StyleItemType.Select:
      return <Form.Item
        key={item.style}
        label={item.name}
        name={item.style}
      >
        <Select
          placeholder="请选择字体"
          allowClear
        >
          {item.list?.map((_, i) => <Option value={_.val} key={i}>{_.name}</Option>)}
        </Select>
      </Form.Item>
    case StyleItemType.Color:
      return <Form.Item
        key={item.style}
        label={item.name}
        name={item.style}
      >
        <div className="color-bg" style={{ width: "100%", height: "20px" }}>
          <span style={{ background: color, display: "block", height: "90%", width: "100%" }}></span>
          <SketchPicker className="color-panel" color={color} onChange={fn} />

        </div>
      </Form.Item>
  }

}

const onChange = (key: string | string[]) => {
  // console.log(key);
};



const GetPos = () => {
  const [form] = Form.useForm();
  const { curComponent, dispatch } = useContext(curComponentConText)
  const onPosChange = (a: any) => {
    dispatch({ type: "changeCurComponentStyle", payload: { ...a, type: 'pos' } })
    // const key = Object.keys(a)[0]
    // style.setPos(a)
    // console.log(a)
  }
  useEffect(() => {
      if (curComponent && curComponent.instance?.style) {
        const o: any = {}
        curComponent.instance.style.pos.forEach(item => {
          o[item.style] = item.val
        })
        form.setFieldsValue(o)
      }
  }, [curComponent])
  return (<div>

    {curComponent ? <Form
      form={form}
      name="pos"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onValuesChange={onPosChange}
      initialValues={getinitaPosValues(curComponent?.instance?.style || null)}
      autoComplete="off"
    >
      {/* {curComponent.instance ? style.pos.map(item => GetFormItem(item))} */}
      {curComponent.instance?.style.pos.map(item => GetFormItem(item))}

    </Form> : null}
  </div>
  );
}
export const GetfontSet = () => {
  const { curComponent, dispatch } = useContext(curComponentConText)
  const [form] = Form.useForm();
  const obj = getinitaFontValues(curComponent?.instance?.style || null)

  const [color, setColor] = useState(obj.color || "#aaa")
  const onchange = (a: any) => {
    setColor(a.hex)
    dispatch({ type: "changeCurComponentStyle", payload: { type: 'font', color: a.hex } })
    console.log(a)
  }
  const onFontChange = (a: any) => {
    console.log(a)
    // const key = Object.keys(a)[0]
    if (a.color) {
      console.log(a.color.hex)
      dispatch({ type: "changeCurComponentStyle", payload: { type: 'font', color: a.color.hex } })
      // style.setFont({ color: a.color.hex })

    } else {
      dispatch({ type: "changeCurComponentStyle", payload: { ...a, type: 'font' } })
      // style.setFont(a)

    }
    // console.log(a)
  }
  useEffect(() => {
    if (curComponent && curComponent.instance?.style) {
      curComponent.instance.style.fonts.forEach(item => {
        form.setFieldsValue({ [item.style]: item.val })
      })
    }
    console.log(curComponent)
  }, [curComponent])
  return (
    <div>
      {curComponent ? <Form
        name="font"
        onValuesChange={onFontChange}
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 15 }}
        style={{ maxWidth: 600 }}
        initialValues={getinitaFontValues(curComponent?.instance?.style || null)}
        autoComplete="off"
      >
        {curComponent.instance?.style.fonts.map(item => GetFormItem(item, onchange, color))}

      </Form> : null}
    </div>
  );
}



export const getStyle = () => {
  // useState("")
  return <Collapse className="style-collapse" defaultActiveKey={['1', '2']} onChange={onChange}>

    <Panel header="位置" key="1">
      <GetPos></GetPos>

      {/* {GetPos()} */}
    </Panel>

    <Panel header="字体" key="2">
      <GetfontSet></GetfontSet>

      {/* {getfontSet()} */}
    </Panel>
  </Collapse>

}