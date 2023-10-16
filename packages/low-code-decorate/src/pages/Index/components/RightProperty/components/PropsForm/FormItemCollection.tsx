import React from 'react';
import { Field } from '@formily/react';
import { FormArrInfo } from './type';
// eslint-disable-next-line
import { FormItem, FormGrid } from '@formily/antd';
import { formItemMap } from './formItemMap';

const { GridColumn } = FormGrid;

interface Props {
  data: FormArrInfo;
  requiredKeys: string[];
}

// formItem的props
const formItemPropsFn = (type: string, formItemProps: any) => {
  if (['upload', 'textarea', 'textPreview'].includes(type)) {
    return { labelWrap: true, colon: true, ...formItemProps };
  }
  return { labelCol: 8, labelWrap: true, wrapperCol: 16, colon: true, ...formItemProps };
};

// 表单渲染
export const FormItemCollection = (props: Props) => {
  const { data, requiredKeys } = props;

  return (
    <FormGrid maxColumns={4} strictAutoFit>
      {data.map((item: any) => {
        return (
          <GridColumn key={item.key} gridSpan={item.gridSpan || 1}>
            <Field
              name={item.key || ''}
              title={item.title}
              dataSource={item?.dataSource}
              validator={item.validator}
              required={requiredKeys.includes(item.key || '')}
              decorator={[FormItem, formItemPropsFn(item.type, item.formItemProps)]}
              component={[formItemMap[item.type], { ...item.property }]}
            />
          </GridColumn>
        );
      })}
    </FormGrid>
  );
};

export default FormItemCollection;
