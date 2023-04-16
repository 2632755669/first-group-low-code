import { BrowserRouter } from 'react-router-dom'
import './App.less'

import RoutesNode from './router/index'

function App() {
  return (
    <BrowserRouter>
      <RoutesNode />
    </BrowserRouter>
  )
}

export default App
