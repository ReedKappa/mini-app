import React from 'react';
import PropTypes from 'prop-types';

import {Card, Title} from '@vkontakte/vkui';

import TournamentTableContents from "./requirements/TournamentTableContents";

const TournamentTable = props => (
		<Card mode="shadow" style={{ padding: 14}}>
			<Title level="3" style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
				<span>Турнирная таблица</span>
				<span>О</span>
			</Title>
			<TournamentTableContents arr = {props.tableData}/>
		</Card>
);

TournamentTable.propTypes = {
	tableData: PropTypes.array.isRequired,
};

export default TournamentTable;