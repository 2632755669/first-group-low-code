import { type FC, Suspense, useContext, useReducer, useState, useRef, } from "react"
import { components, IComponentData, defaultComponents } from '@/componentConfig'
import { ComponentNameEnum } from '@/componentConfig/enum'
import './style/editor.css'
import Shape from './shape/shape'
import { curComponentConText } from "@/contexts/componentList"
import { ModuleContainer } from '@/coreComponents/ModuleContainer'
import { Button, Space } from 'antd';
import { useDrop } from 'ahooks';
import React from "react"

interface IModuleComponent {
  data: IComponentData;
  activeId: React.Key;
  onSelectChange(id: React.Key): void;
}

const ModuleComponent = (props: IModuleComponent) => {
  const { data, activeId, onSelectChange } = props;

  return (
    <ModuleContainer activeId={activeId} onSelect={onSelectChange}>
      <data.component >
        {
          data.children?.map((item, index) => {
            return (
              <ModuleComponent
                key={index}
                data={item}
                activeId={activeId}
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
  const { curComponent, dispatch: curDispath } = useContext(curComponentConText)
  const [shuldRemove, setShuldRemove] = useState(false)
  const [currentComponents, setCurrentComponent] = useState<IComponentData[]>(defaultComponents)
  const [activeId, setActiveId] = useState<React.Key>('');
  const editorRef = useRef(null);

  const removeCurComponent = (e: React.MouseEvent) => {
    if (!shuldRemove) return
    curDispath({ type: 'remove', payload: null })
    setShuldRemove(false)
  }

  const handleDragOver = (e: React.DragEvent<Element> | undefined): void => {
    if (!e) return
    e.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (e: React.DragEvent<Element> | undefined): void => {
    if (!e) return
    e.stopPropagation()
    const componentName = e.dataTransfer.getData('componentid') as ComponentNameEnum
    if (!componentName)  return
    const componentData = components[componentName]
    const editorRect = document.getElementById('editor')!.getBoundingClientRect()
    const coordinate = {
      x: e.pageX - editorRect.left,
      y: e.pageY - editorRect.top
    }
    setCurrentComponent((v) => {
      console.log([...v, componentData])
      return [...v, componentData]
    })
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
        onMouseDown={() => { setShuldRemove(true) }}
        onMouseUp={removeCurComponent}
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        {/* 网格线 */}
        <div className="grid"></div>
        {/* 标尺 */}
        <div className="rules"></div>

        {/* 操作台组件列表 */}
        <div className="componentsList">
          {currentComponents.map((item, index) => {
            return (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <ModuleComponent
                  data={item}
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