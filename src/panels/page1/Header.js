import React from 'react'

import {Div, Title} from '@vkontakte/vkui';
import {Icon28ChevronBack} from "@vkontakte/icons";

export default function Header(props) {
  return (
    <Div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, padding: 0}}>
      <div><Icon28ChevronBack onClick={props.go} data-to="home" style={{cursor: "pointer", width: "20px", padding: "10px"}}/></div>
      <div>
        <Title level="2">
          Центр матчей
        </Title>
      </div>
      <div style={{width: "30px"}}/>
    </Div>
  )
}
