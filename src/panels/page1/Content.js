import React, {useEffect, useState} from 'react'
import Styles from './Content.module.css'
import Match from './Match'

import { Card, Separator } from "@vkontakte/vkui"

export default function Content(props) {

    async function getTeam() {
        let day = props.currentDate.toString().length === 1 ? `0${props.currentDate}` : props.currentDate;
        return await fetch(`https://api.sportsdata.io/v3/csgo/scores/json/GamesByDate/2018-01-${day}?key=626a56acb8e74e75990bcf748827cf95`)
            .then((response) => response.json())
            .then((responseJson) => {
                setValue(responseJson)
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const [games, setValue] = useState([]);


    useEffect(() => {
        getTeam()
    }, [])


  return (
    <Card mode="shadow" style={{padding: 14}} className={Styles.mainWrapper}>
        {games.map(e =>
             <div>
                <Match go={props.go} info={e} changeGameId={props.changeGameId}/>
                    <Separator/>
                </div>
            )}
      {/*<Match go={props.go}></Match>*/}
      {/*<Separator></Separator>*/}
      {/*<Match go={props.go}></Match>*/}
      {/*<Separator></Separator>*/}
      {/*<Match go={props.go}></Match>*/}
      {/*<Separator></Separator>*/}
      {/*<Match go={props.go}></Match>*/}
      {/*<Separator></Separator>*/}
      {/*<Match go={props.go}></Match>*/}
      {/*<Separator></Separator>*/}
      {/*<Match go={props.go}></Match>*/}

    </Card>
  )
}
