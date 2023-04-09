/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, type ComponentType, Suspense } from 'react';

interface IProps {
  importComponent: () => Promise<{ default: ComponentType<any> }>
}

export const LazyElement = (props: IProps) => {
  const { importComponent } = props;
  const LazyComponent = lazy(importComponent);
  return (
    <Suspense fallback={<div>路由懒加载...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
