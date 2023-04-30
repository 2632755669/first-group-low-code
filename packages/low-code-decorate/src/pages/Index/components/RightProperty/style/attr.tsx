import { ComponentInfo } from "@/clazz/style";
import { StyleItem, StyleItemType } from "@/clazz/type";
import { Collapse, Form, Input, Select } from "antd";
const compoent = new ComponentInfo()
const attr = compoent.attr
const { Option } = Select;
const { Panel } = Collapse;
attr.buildAttr(["input",])
console.log(compoent)
const onChangeBasic = () => {

}

const getFormItem = (item: StyleItem, fn?: Function, color?: string) => {
  switch (item.type) {
    case StyleItemType.Number:
      return <Form.Item
        key={item.style}
        label={item.name}
        name={item.style}
      >
        <Input />
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

  }

}

const getinitaBasicValues = () => {
  const obj: any = {}
  attr.attrs.basicAttr.forEach(item => {
    obj[item.style] = item.val
  })
  return obj
}


const getBasicAttr = () => {
  return (
    <Form
      name="basicAttr"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onValuesChange={onChangeBasic}
      initialValues={getinitaBasicValues()}
      autoComplete="off"
    >
      {attr.attrs.basicAttr.map(item => getFormItem(item))}

    </Form>);
}
const onChange = (key: string | string[]) => {
  // console.log(key);
};
export const getAttr = () => {
  return <Collapse className="style-collapse" defaultActiveKey={['1', '2']} onChange={onChange}>
    <Panel header="基础属性" key="1">
      {/* {getBasicAttr()} */}
    </Panel>
  </Collapse>
}