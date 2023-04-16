/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Space, Button } from 'antd';

interface Option {
  name: string
  handle?: (row: any) => void
  disabled?: boolean
  type?: 'link' | 'text' | 'ghost' | 'primary' | 'default' | 'dashed'
}

interface Props {
  options: Option[]
  children?: React.ReactDOM
}

export const ActionButton = (props: Props) => {
  const { options, children } = props;

  return (
    <Space size={0} align="center">
      <>
        {options.map((item, index) => {
          return (
            <Button type={item.type ?? 'link'} onClick={item.handle} disabled={item.disabled ?? false} key={index}>
              {item.name}
            </Button>
          );
        })}
        {children}
      </>
    </Space>
  );
};
