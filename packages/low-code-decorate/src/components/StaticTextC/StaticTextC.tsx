import { FC } from 'react';
import './index.less';

// interface Props {
//   id: string
// }

const Map:FC<{id: string}> = (props) => {
  const { id } = props
  return <div className='mapCons'>静态文本</div>
}
export default Map