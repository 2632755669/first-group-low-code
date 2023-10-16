import React from 'react';
import { Select, Input,  } from 'antd';

/**
 * type类型对应表单组件
 */
interface FormItemMap {
  [key: string]: React.ReactNode | any;
}
interface FormItemNameMap {
  [key: string]: string;
}

export const formItemMap: FormItemMap = {
  input: Input,
  textarea: Input.TextArea,
  select: Select,
};
export const formItemNameMap: FormItemNameMap = {
  input: 'Input',
  inputNumber: 'NumberPicker',
  textarea: 'Input.TextArea',
  select: 'Select',
  selectSearch: 'CsSearchSelect',
  datePicker: 'DatePicker',
  rangePicker: 'RangePicker',
  cascader: 'CsCascader',
  textPreview: 'CsTextPreview',
  numberPreview: 'CsNumberPreview',
  upload: 'Upload',
};
