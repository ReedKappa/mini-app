import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import TournamentTable from "../components/TournamentTable";
import GameWinnerChooser from "../components/GameWinnerChooser";
import GameInfoPanel from "../components/GameInfoPanel";

const Persik = props => {

	const tableData = [{id: 1, team: "navi", photo:persik}, {id: 2, team: "vp", photo:""}]
	const [data, updateData] = useState({
		eventDateTime: "Завтраа в 16:30",
		league: "league",
		stadium: "stadium",
		lawyer: "lawyer",
		leftTeam: {
			teamName: "Louiton",
			teamLogoUrl: persik,
		},
		rightTeam: {
			teamName: "Vuiton",
			teamLogoUrl: persik,
		},
		score: {
			leftTeamScore: 1,
			rightTeamScore: 2,
		}
	});

	return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>
				<GameInfoPanel gameInfo={data}/>
				<GameWinnerChooser gameInfo={data}/>
				<TournamentTable tableData={tableData}/>
	</Panel>
)};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
