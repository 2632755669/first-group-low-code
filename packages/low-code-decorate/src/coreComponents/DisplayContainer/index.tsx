import './index.less'

interface IProps {
  children: React.ReactNode
}

export const DisplayContainer = (props: IProps) => {
  const { children } = props

  return (
    <div className="display-container">
      flex布局组件
      {children}
    </div>
  )
}
export default DisplayContainer