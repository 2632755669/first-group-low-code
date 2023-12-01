import { useMemo } from 'react';
import './index.less'

interface IProps {
  children: React.ReactNode;
  style: React.CSSProperties;
  width?: number;
  height?: number;
}

const defaultStyle: React.CSSProperties = {
  width: '300px',
  height: '100px',
  border: '1px solid red',
  padding: '10px'
}

export const DisplayContainer = (props: IProps) => {
  const { children, style = defaultStyle, width = 300, height = 200 } = props;

  const newStyle = useMemo(() => {
    return {
      ...style,
      width: Number(width),
      height: Number(height)
    }
  }, [width, height, style]);
  
  return (
    <div className="display-container" style={newStyle} >
      {children}
    </div>
  )
}
export default DisplayContainer