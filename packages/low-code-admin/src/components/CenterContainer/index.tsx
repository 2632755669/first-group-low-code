import React from 'react';
import './index.less';

const prefixCls = 'center-container';

interface CenterContainerProps {
  component: JSX.Element
}

const CenterContainer = (props: CenterContainerProps) => {
  const { component } = props;

  return <div className={`${prefixCls}-box`}>{component}</div>;
};

export default CenterContainer;
