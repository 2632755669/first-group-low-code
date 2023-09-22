import { useMemo, useId, useCallback, useRef, MouseEventHandler } from 'react'
import { useDrop } from 'ahooks'
import classnames from 'classnames'

import './index.less'

interface IProps {
  children: React.ReactNode;
  activeId: React.Key;
  onSelect(id: React.Key): void;
}

export const ModuleContainer = (props: IProps) => {
  const { children, activeId, onSelect } = props;

  const id = useId();

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

  const handleSelect: MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
    onSelect(id)
  }, [onSelect, id])

  const handleRemoveSelect: MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
    onSelect('')
  }, [onSelect])

  useDrop(moduleRef, {
    onDragEnter: handleDragEnter
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