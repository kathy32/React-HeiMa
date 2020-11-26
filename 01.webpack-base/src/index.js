// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

import CmtList from '@/components/CmtList'


// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  <h1>这是评论列表组件</h1>
  <CmtList></CmtList>
</div>, document.getElementById('app'))