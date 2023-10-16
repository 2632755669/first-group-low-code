// import { createForm } from '@formily/core'
// import { FormProvider, FormConsumer, Field } from '@formily/react'
// import FormItemCollection from '../FormItemCollection';
import React from 'react';
import { Form } from 'antd';
// import type { FormInstance } from 'antd/es/form';
import { FormItemInfo } from './type';
import { formItemMap } from './formItemMap'
import { useComponentContext } from '@/hooks'


import './index.less';
import { useEffect, useState } from 'react';

// const formRef = createForm()

// export const PropsForm = () => {

//   return (
//     <FormProvider form={formRef}>
//       <FormItemCollection data={fieldData} />
//     </FormProvider>
//   )
// }

export const PropsForm = () => {
  const [fields, setFields] = useState<FormItemInfo[]>([]);
  const { componentFormSchema } = useComponentContext();

  useEffect(() => {
    setFields(componentFormSchema || [])
  }, [componentFormSchema])

  return (
    <React.Fragment>
      {
        fields.map(item => {
          const FieldItem = formItemMap[item.type]
          return (
            <Form.Item label={item.title} name={item.key}>
              <FieldItem { ...item.property } />
            </Form.Item>
          )
        })
        }
    </React.Fragment>
  )
}