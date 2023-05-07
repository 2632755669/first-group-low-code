import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/index.css';
// import 'antd/dist/antd.dark.less';
import { ConfigProvider, theme } from 'antd';
import './index.css'
import './styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)
root.render(
  <ConfigProvider theme={{
    algorithm: theme.darkAlgorithm,
  }}>
    {/* // <React.StrictMode> */}
    <App />
    {/* // </React.StrictMode> */}
  </ConfigProvider>
)

reportWebVitals()
