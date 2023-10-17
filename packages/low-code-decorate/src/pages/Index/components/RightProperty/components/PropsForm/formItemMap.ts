import React from 'react';
import { Select, Input, InputNumber } from 'antd';

/**
 * type类型对应表单组件
 */
interface FormItemMap {
  [key: string]: React.ReactNode | any;
}
interface FormItemNameMap {
  [key: string]: string;
}

enum FormItemEnum {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  INPUT_NUMBER = 'inputNumber'
}

export const formItemMap: FormItemMap = {
  [FormItemEnum.INPUT]: Input,
  [FormItemEnum.TEXTAREA]: Input.TextArea,
  [FormItemEnum.SELECT]: Select,
  [FormItemEnum.INPUT_NUMBER]: InputNumber,
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
