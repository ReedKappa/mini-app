import React from 'react'
import Styles from './MatchInfo.module.css'

export default function (props) {
  return (
    <div className={props.isHidden ? Styles.hidden : Styles.notHidden}><p>match info</p></div>
  )
}
