
import { useCallback, useEffect, useRef } from 'react';
import { Tabs, Form } from 'antd';
import type { TabsProps } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { getStyle } from './style/tabStyle';
import { getAttr } from './style/attr';
import { useComponentContext } from '@/hooks'
import { PropsForm } from './components/PropsForm'

import "./index.less"



const items: TabsProps['items'] = [
  {
    key: '1',
    label: `样式`,

    children: <PropsForm />,
  },
  {
    key: '2',
    label: `属性`,
    children: getAttr(),
  },
];

const onChange = (key: string) => {
  console.log(key);
};



export const RightProperty = () => {
  const { selectedIds, componentProps, editComponentProps } = useComponentContext();
  const formRef = useRef<FormInstance>(null);

  const handleValuesChange = (values: object) => {
    editComponentProps(values, selectedIds);
  }

  const initFormValues = useCallback(() => {
    formRef.current?.setFieldsValue({ ...componentProps });
  }, [componentProps])

  useEffect(() => {
    initFormValues();
  }, [initFormValues])

  return <div>
    <div className='pl-2 py-6'>属性设置</div>
    <Form ref={formRef} onValuesChange={handleValuesChange}>
    {
      selectedIds.length ?
        <Tabs
          className='custom-tab pl-2'
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
        :
        null
    }
    </Form>
  </div>
}