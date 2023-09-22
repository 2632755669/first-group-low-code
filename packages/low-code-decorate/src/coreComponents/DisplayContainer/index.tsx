import './index.less'

interface IProps {
  children: React.ReactNode
  style: React.CSSProperties
}

const defaultStyle: React.CSSProperties = {
  width: '300px',
  height: '100px',
  border: '1px solid red',
  padding: '10px'
}

export const DisplayContainer = (props: IProps) => {
  const { children, style = defaultStyle } = props

  return (
    <div className="display-container" style={style}>
      {children}
    </div>
  )
}
export default DisplayContainer