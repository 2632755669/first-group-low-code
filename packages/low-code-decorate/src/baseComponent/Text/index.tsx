import './index.less';

interface IProps {
  id: string
}

export const Text = (props: IProps) => {
  const { id } = props
  return <div className='mapCons'>静态文本</div>
}
export default Text