 import { FormItemInfo } from '@/types';

export const fieldData: FormItemInfo[] = [
  {
    title: '案号',
    key: 'lawCaseNum',
    defaultValue: '文本',
    type: 'input',
    property: {
      placeholder: '请输入案号',
      maxLength: 200,
    },
  },
];