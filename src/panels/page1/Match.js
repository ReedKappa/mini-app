import React from 'react'
import Styles from './Match.module.css'
import MatchInfo from './MatchInfo'
import { useState } from 'react'

import {Div, Button} from '@vkontakte/vkui'
import { Icon16Dropdown, Icon16DropdownFlipped} from '@vkontakte/icons';

export default function Match(props) {
    const [isInfoHidden, setHidden] = useState(false);
    const handleHidden = () => {
        setHidden(prev => !prev);
    }
  return (
    <Div>
        <div className={Styles.btnWrapper}>
            <h3><Div onClick={props.go} data-to='page2'>Header</Div></h3>
            <Div onClick={handleHidden} style={{cursor: "pointer"}}>
              {Styles.isInfoHidden ? <Icon16Dropdown></Icon16Dropdown> : <Icon16DropdownFlipped></Icon16DropdownFlipped>}
            </Div>
        </div>
        <MatchInfo className={Styles.notHidden} isHidden={isInfoHidden}></MatchInfo>
    </Div>
  )
}
