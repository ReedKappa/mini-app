import React from 'react'
import Styles from './Content.module.css'
import Match from './Match'

import { Card, Separator } from "@vkontakte/vkui"

export default function Content(props) {
  return (
    <Card mode="shadow" style={{padding: 14}} className={Styles.mainWrapper}>
      <Match go={props.go}></Match>
      <Separator></Separator>
      <Match go={props.go}></Match>
      <Separator></Separator>
      <Match go={props.go}></Match>
      <Separator></Separator>
      <Match go={props.go}></Match>
      <Separator></Separator>
      <Match go={props.go}></Match>
      <Separator></Separator>
      <Match go={props.go}></Match>

    </Card>
  )
}
