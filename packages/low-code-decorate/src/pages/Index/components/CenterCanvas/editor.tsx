import { type FC, Suspense, useContext, useReducer, useState } from "react"
import { componentList } from "@/pages/Index/load"
import './style/editor.css'
import { ComponentInfo } from "@/clazz/style"
import Shape from './shape/shape'
import basicStoreReducer, { initialBasicStore } from "@/reducers/basicStoreReducer"
import { curComponentConText } from "@/contexts/componentList"
import { Button, Space } from 'antd';
import React from "react"
interface Props {
  name: string
}
const CenterCanvas: FC<Props> = ({ name }) => {
  const { curComponent, dispatch: curDispath } = useContext(curComponentConText)
  const [basicStore, dispatch] = useReducer(basicStoreReducer, initialBasicStore)
  const [shuldRemove, setShuldRemove] = useState(false)

  const removeCurComponent = (e: React.MouseEvent) => {
    if (!shuldRemove) return
    curDispath({ type: 'remove', payload: null })
    setShuldRemove(false)
  }
  /**
   * desc 从左侧组件列表拖拽至编辑器区域的事件
  */
  const handleDragOver = (e: any) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }
  /**
   * desc 从左侧组件列表拖拽至编辑器区域动作完成
  */
  const handleDrop = async (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    const componentName = e.dataTransfer.getData('componentName')
    // return 
    if (componentName) {
      const listItem = componentList[componentName]
      const instance: ComponentInfo = new listItem.config()
      const EditorRectInfo = document.getElementById('editor')!.getBoundingClientRect()
      const x = e.pageX - EditorRectInfo.left
      const y = e.pageY - EditorRectInfo.top
      instance.style.setPos({ left: x, top: y })
      const component = { ...listItem, instance }
      dispatch({ type: 'appendComponent', payload: component })
    }
  }
  return (
    <section className="h-full">
      <div className="flex justify-center items-center h-[69px] centercanvas-toolbar">
        <Space>
          <Button>保存</Button>
          <Button>预览</Button>
        </Space>
      </div>
      <div id="editor" className="editor"
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
          {basicStore.map((item, index) => <Suspense key={item.instance!.id} fallback={<div>Loading...</div>}>
            <Shape
              id={item.instance!.id}
              component={item}
              styles={item.instance!.style.allStyles}>
              <item.component ></item.component>
            </Shape>
          </Suspense>)}
        </div>
      </div>
    </section>
  )
}

export default CenterCanvas