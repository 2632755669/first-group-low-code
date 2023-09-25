import { useMemo, useCallback, useRef, MouseEventHandler } from 'react'
import classnames from 'classnames'
import { useDrop } from 'ahooks'
import { useComponentContext } from '@/hooks'
import { ComponentNameEnum } from '@/config'

import './index.less'

interface IProps {
  children: React.ReactNode;
  activeId: React.Key;
  parentIds: string[];
  id: string;
  onSelect(id: React.Key): void;
}

export const ModuleContainer = (props: IProps) => {
  const { children, activeId, onSelect, parentIds, id } = props;
  const { setComponents } = useComponentContext();

  const isActive = useMemo(() => activeId === id, [activeId, id])

  const moduleRef = useRef(null);

  const className = classnames({
    'module-border': true,
    'module-active': isActive,
  })

  const handleDragEnter = useCallback((e: React.DragEvent | undefined) => {
    if (!e) return;
    e.stopPropagation();
  }, [])

  const handleDrop = useCallback((e: React.DragEvent | undefined) => {
    if (!e) return
    e.stopPropagation()
    const componentName = e.dataTransfer.getData('componentid') as ComponentNameEnum
    if (!componentName) return
    setComponents(componentName, parentIds);
  }, [setComponents, parentIds])

  const handleSelect: MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
    onSelect(id)
  }, [onSelect, id])

  const handleRemoveSelect: MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
    onSelect('')
  }, [onSelect])

  useDrop(moduleRef, {
    onDragEnter: handleDragEnter,
    onDrop: handleDrop
  })



  return (
    <div
      className="module-container"
      ref={moduleRef}
      onMouseEnter={handleSelect}
      onMouseLeave={handleRemoveSelect}
    >
      <div className={className} />
      {children}
    </div>
  )
}

export default ModuleContainer