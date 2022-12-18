import React, {useEffect ,useState} from 'react';
import PropTypes from 'prop-types';

import {Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import TournamentTable from "../components/TournamentTable";
import GameWinnerChooser from "../components/GameWinnerChooser";
import GameInfoPanel from "../components/GameInfoPanel";

const Persik = props => {
	async function getTeam(props) {
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
	  
	// let tableData = 
	// 	commands.forEach(elem =>(
	// 		{score: 1, team: "navi", photo:persik}
	// 	))
	// console.log(tableData)

	return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>

				<GameInfoPanel gameInfo={game}/>

				<GameWinnerChooser gameInfo={game}/>
				<TournamentTable tableData={commands.map(elem =>({score: elem.Group, Name: elem.Name, photo:persik}))}/>

	</Panel>
)};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
