import { type FC, Suspense, useContext, useReducer, useState, useRef } from "react"
import { components, IComponentData } from '@/componentConfig'
import { ComponentNameEnum } from '@/componentConfig/enum'
import './style/editor.css'
import Shape from './shape/shape'
import { curComponentConText } from "@/contexts/componentList"
import { Button, Space } from 'antd';
import { useDrop } from 'ahooks';
import React from "react"
interface Props {
  name: string
}
const CenterCanvas: FC<Props> = ({ name }) => {
  const { curComponent, dispatch: curDispath } = useContext(curComponentConText)
  const [shuldRemove, setShuldRemove] = useState(false)
  const [currentComponents, setCurrentComponent] = useState<IComponentData[]>([])
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
              <Suspense key={item.title} fallback={<div>Loading...</div>}>
                <item.component ></item.component>
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