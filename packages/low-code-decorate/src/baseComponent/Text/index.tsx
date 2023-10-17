import './index.less';

interface IProps {
  text: string;
}

const DEFAULT_TEXT = '文本';

export const Text = (props: IProps) => {
  const { text = DEFAULT_TEXT } = props
  return <div className='mapCons'>{ text }</div>
}
export default Text