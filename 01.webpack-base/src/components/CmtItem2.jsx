import React from 'react'


// import styles from '@/components/styles'

import cmtItemCss from '@/css/cmtItem.scss'


export default function CmtItem (props) {
  return <div className={cmtItemCss.cmtBox}>
    <h2 className={cmtItemCss.user}>评论人：{props.user}</h2>
    <p className={cmtItemCss.content}>评论内容：{props.content}</p>
  </div>
}