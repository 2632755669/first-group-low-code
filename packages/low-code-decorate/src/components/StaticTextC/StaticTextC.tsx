import { FC } from 'react';
import './index.less';

interface IProps {
  id: string
}

const Map:FC<IProps> = (props) => {
  const { id } = props
  return <div className='mapCons'>静态文本</div>
}
export default Map