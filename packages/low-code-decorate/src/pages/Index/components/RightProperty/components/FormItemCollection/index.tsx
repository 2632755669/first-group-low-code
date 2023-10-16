import { Field } from '@formily/react';
import { FormArrInfo } from '../PropsForm/type';
import { FormItem, FormGrid } from '@formily/antd';
import { formItemMap } from '../PropsForm/formItemMap';

const { GridColumn } = FormGrid;

interface Props {
  data: FormArrInfo;
}

const formItemPropsFn = (type: string, formItemProps: any) => {
  if (['upload', 'textarea', 'textPreview'].includes(type)) {
    return { labelWrap: true, colon: true, ...formItemProps };
  }
  return { labelCol: 8, labelWrap: true, wrapperCol: 16, colon: true, ...formItemProps };
};

// 表单渲染
const FormItemCollection = (props: Props) => {
  const { data } = props;

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
