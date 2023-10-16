import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import 'antd/dist/antd.dark.less';
import { ConfigProvider, theme } from 'antd';
import './index.css'
import './styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)


const Root = () => {
  return (
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
      <App />
    </ConfigProvider>
  )
}

root.render(
    <Root /> as any
)

reportWebVitals()
