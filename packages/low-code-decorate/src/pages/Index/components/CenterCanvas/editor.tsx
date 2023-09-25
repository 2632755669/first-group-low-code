import { type FC, Suspense, useState, useRef, useMemo, } from "react"
import { ModuleContainer } from '@/coreComponents/ModuleContainer'
import { Button, Space } from 'antd';
import { useDrop } from 'ahooks';
import { useComponentContext } from '@/hooks/useComponentContext'
import type { IComponentComposeData } from '@/types';
import type { ComponentNameEnum } from '@/config/components'

import './style/editor.css'

interface IModuleComponent {
  data: IComponentComposeData;
  activeId: React.Key;
  onSelectChange(id: React.Key): void;
  parentIds: string[];
}

const ModuleComponent = (props: IModuleComponent) => {
  const { data, activeId, onSelectChange, parentIds } = props;

  const childParentIds = useMemo(() => [...parentIds, data.id], [parentIds, data])

  return (
    <ModuleContainer activeId={activeId} id={data.id} parentIds={childParentIds} onSelect={onSelectChange}>
      <data.component >
        {
          data.children?.map((item, index) => {
            return (
              <ModuleComponent
                key={item.id}
                data={item}
                activeId={activeId}
                parentIds={childParentIds}
                onSelectChange={onSelectChange}
              /> 
           )
          })
        }  
      </data.component>
  </ModuleContainer>
  )
}

interface IProps {
  name: string
}
const CenterCanvas: FC<IProps> = ({ name }) => {
  const [activeId, setActiveId] = useState<React.Key>('');
  const { components, setComponents } = useComponentContext();
  const editorRef = useRef(null);

  const handleDragOver = (e: React.DragEvent<Element> | undefined): void => {
    if (!e) return
    e.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (e: React.DragEvent<Element> | undefined): void => {
    if (!e) return
    e.stopPropagation()
    const componentName = e.dataTransfer.getData('componentid') as ComponentNameEnum
    if (!componentName)  return
    setComponents(componentName)
    const editorRect = document.getElementById('editor')!.getBoundingClientRect()
    const coordinate = {
      x: e.pageX - editorRect.left,
      y: e.pageY - editorRect.top
    }
  }

  const handleSelectChange = (id: React.Key) => {
    setActiveId(id)
  }

  useDrop(editorRef, {
    onDragOver: handleDragOver,
    onDrop: handleDrop
  })

  return (
    <section className="h-full">
      <div className="flex justify-center items-center h-[69px] centercanvas-toolbar">
        <Space>
          <Button>保存</Button>
          <Button>预览</Button>
        </Space>
      </div>
      <div id="editor" ref={editorRef} className="editor"
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        {/* 网格线 */}
        <div className="grid"></div>
        {/* 标尺 */}
        <div className="rules"></div>

        {/* 操作台组件列表 */}
        <div className="componentsList">
          {components.map((item, index) => {
            return (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <ModuleComponent
                  data={item}
                  parentIds={[]}
                  activeId={activeId}
                  onSelectChange={handleSelectChange}
                />
              </Suspense>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

export default CenterCanvas