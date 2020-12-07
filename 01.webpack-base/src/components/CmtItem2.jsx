import React from 'react'


// import styles from '@/components/styles'


export default function CmtItem (props) {
  return <div>
    <h2>评论人：{props.user}</h2>
    <p>评论内容：{props.content}</p>
  </div>
}