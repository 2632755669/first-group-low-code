import  './index.less'

interface IProps {
  children: React.ReactNode;
}

export const RootContainer = (props: IProps) => {
  const { children } = props;
  return (
    <main className="root-container">
      {children}
    </main>
  )
}

export default RootContainer;