import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Panel} from '@vkontakte/vkui';

import Styles from './Body.module.css';
import persik from '../../img/persik.png';
import '../Persik.css';
import TournamentTable from "../../components/TournamentTable";
import GameWinnerChooser from "../../components/GameWinnerChooser";
import GameInfoPanel from "../../components/GameInfoPanel";

export default function Body(props) {
  //let classes = Styles.bodyWrapper;
	async function getTeam() {
		let day = props.currentDate.toString().length === 1 ? `0${props.currentDate}` : props.currentDate;
		return await fetch(`https://api.sportsdata.io/v3/csgo/scores/json/GamesByDate/2018-01-13?key=626a56acb8e74e75990bcf748827cf95`)
			.then((response) => response.json())
			.then((responseJson) => {
				setValue(responseJson)
				console.log(responseJson)
			})
			.catch((error) => {
				console.error(error);
			});
	}

	async function getCommand() {
		return await fetch(`https://api.sportsdata.io/v3/csgo/scores/json/Standings/100000143?key=626a56acb8e74e75990bcf748827cf95`)
			.then((response) => response.json())
			.then((responseJson) => {
				setCommands(responseJson)
			})
			.catch((error) => {
				console.error(error);
			});
	}

	const [commands, setCommands] = useState([]);

	useEffect(() => {
		getCommand()
	}, [])

	const [games, setValue] = useState([]);
	const [game, setGame] = useState({"GameId": null, "DateTime": "2020-00-11"});

	useEffect(() => {
		getTeam()
	}, [])

	if(game.GameId == null){
		games.forEach(elem => {
			elem.GameId == '100000096' ? setGame(elem) : null;
		});
	}

  return (
    // <div className={classes}>
    //     <Content go={props.go}></Content>
    //     <Side></Side>
    // </div>
  <Panel id={props.id} className={Styles.bodyWrapper}>
        <div className={Styles.bodyWrapper}>
          <div className={Styles.contentWrapper}>
            <GameInfoPanel gameInfo={game} go={props.go}/>
            <GameWinnerChooser gameInfo={game}/>
          </div>
          <div className={Styles.sideWrapper}>
            <TournamentTable tableData={commands.map(elem =>({score: elem.Group, Name: elem.Name, photo:persik}))}/>
          </div>
        </div>
	</Panel>
  );
}

Body.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
