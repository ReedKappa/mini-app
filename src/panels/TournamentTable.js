import React from 'react';
import PropTypes from 'prop-types';
import Table from '../dto/Table';

import {Card, CardGrid, ContentCard, Panel, PanelHeader, PanelHeaderBack, Title} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const TournamentTable = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>
		<CardGrid size="l">
			<Card mode="shadow" style={{width: 200, padding: 14}}>
				<Title level="3" style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
					<span>Турнирная таблица</span>
					<span>О</span>
				</Title>
				<Table arr = {props.tableData}/>
			</Card>
		</CardGrid>
	</Panel>
);

TournamentTable.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default TournamentTable;
