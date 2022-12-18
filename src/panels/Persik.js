import React from 'react';
import PropTypes from 'prop-types';

import {CardGrid, Panel, PanelHeader, PanelHeaderBack, SplitCol, SplitLayout} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import TournamentTable from "../components/TournamentTable";
import GameWinnerChooser from "../components/GameWinnerChooser";
import GameInfoPanel from "../components/GameInfoPanel";

const Persik = props => {

	const tableData = [{id: 1, team: "navi", photo:persik}, {id: 2, team: "vp", photo:""}]

	return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>

				<GameInfoPanel/>

				<GameWinnerChooser/>
				<TournamentTable tableData={tableData}/>

	</Panel>
)};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
