import React from 'react'


// 样式封装方式一：将样式对象和 UI 结构分离
const itemStyle = {
  border: '1px dashed #ccc',
  margin: '10px',
  padding: '10px',
  boxShadow: '0 0 10px #ccc'
}

const userStyle = {
  fontSize: '14px'
}

const contentStyle = {
  fontSize: '12px'
}


// 样式封装方式二：合并成一个大的样式对象
const Styles = {
  itemStyle: {
     border: '1px dashed #ccc',
     margin: '10px',
     padding: '10px',
     boxShadow: '0 0 10px #ccc'
   },
  userStyle: {
     fontSize: '14px'
   },
  contentStyle: {
     fontSize: '12px'
   }
   
 }

 
// 样式封装方式三：抽离为单独的样式表模块
import styles from '@/components/styles'


// 使用 function 构造函数，定义普通的无状态组件
// 注意：组件名必须为首字母大写！因为小写会被解析为 html 自带标签，从而报错
// 全选 props 快捷键: command + d
export default function CmtItem (props) {
  return <div style={styles.itemStyle}>
    <h2 style={styles.userStyle}>评论人：{props.user}</h2>
    <p style={styles.contentStyle}>评论内容：{props.content}</p>
  </div>
}