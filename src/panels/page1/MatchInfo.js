import React from 'react'
import Styles from './MatchInfo.module.css'

export default function (props) {
  return (
    <div className={props.isHidden ? Styles.hidden : Styles.notHidden}>
      <span>{props.info.TeamAName} </span>
      vs.
      <span> {props.info.TeamBName}</span>
      <p>{props.info.DateTime.toString().split("T")[1]}</p>
    </div>
  )
}
