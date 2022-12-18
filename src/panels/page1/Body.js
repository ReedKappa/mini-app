import React, {useEffect, useState} from 'react'
import Header from './Header'
import Dates from './Dates'
import Content from './Content'
import Styles from './Body.module.css'
import Discuss from './Discuss'

import PropTypes from 'prop-types';

import { Panel, Button } from '@vkontakte/vkui';

export default function Body(props) {
  let classes = Styles.bodyWrapper;


  return (
    <Panel id={props.id} className={classes} >
        <Header go={props.go}></Header>
        <Dates changeDate={props.changeDate}></Dates>
        <Button stretched size="l" mode="primary" >discuss</Button>
        <hr></hr> 
        <Content go={props.go} currentDate={props.currentDate} changeGameId={props.changeGameId}></Content>
    </Panel>
  )

  page1.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
  };
}
