import React, { useState } from 'react';

import {Avatar, ButtonGroup, Card, Div, RichCell, Separator, Title} from '@vkontakte/vkui';
import {Icon28ChevronBack} from "@vkontakte/icons";

const GameInfoPanel = props => {
	const [score, setScore] = useState({score: {leftTeamScore: props.TeamAScore, rightTeamScore: props.TeamBScore}})
	return (
		<Card mode="shadow" style={{padding: 14}}>
			<Div>
				<Div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, padding: 0}}>
					<div><Icon28ChevronBack onClick={props.go} data-to="page1" style={{cursor: "pointer"}}/></div>
					<div>
							<Title level="2">
								{props.gameInfo.DateTime.toString().split('T')[0]} {props.gameInfo.DateTime.toString().split('T')[1]}
							</Title>
					</div>
					<div/>
				</Div>

				<Separator/>

				<Div style={{display: "flex", justifyContent: "center"}}>
					<ButtonGroup style={{display: "inline-flex", alignItems: "center"}}>
						<PlayerSide reverse={false} player={props.gameInfo.TeamAKey}/>
						<GameCounter score={{
							TeamAScore: props.gameInfo.TeamAScore,
							TeamBScore: props.gameInfo.TeamBScore,
						}}/>
						<PlayerSide reverse={true} player={props.gameInfo.TeamBKey}/>
					</ButtonGroup>
				</Div>

				<Separator/>

				<Div style={{display: "flex", justifyContent: "space-between"}}>
					<RichCell caption="Группа">
						{props.gameInfo.Group ? props.gameInfo.Group : 'Неизвестна'}
					</RichCell>
					<RichCell caption="Стадия">
						{props.gameInfo.Status ? props.gameInfo.Status : 'Неизвестна'}
					</RichCell>
					<RichCell caption="Тип игры">
						{`Best of ${props.gameInfo.BestOf ? props.gameInfo.BestOf : 'Неизвестен'}`}
					</RichCell>
				</Div>
			</Div>
		</Card>
	)
};

export default GameInfoPanel;

const GameCounter = ({score}) => {
	return (
		<ButtonGroup style={{display: "inline-flex"}}>
			<Div>
				<Title level="1">
					{score.TeamAScore != null ? score.TeamAScore : "-"}
				</Title>
			</Div>
			<Div>
				<Title level="1">
					:
				</Title>
			</Div>
			<Div>
				<Title level="1">
					{score.TeamBScore != null ? score.TeamBScore : "-"}
				</Title>
			</Div>
		</ButtonGroup>
	);
};

const PlayerSide = ({reverse, player}) => {
	return (
		<ButtonGroup style={{display: "inline-flex", alignItems: "center", flexDirection: reverse ? "row-reverse" : "row"}}>
			<Div>
				<Avatar size={48} src={"https://lookw.ru/8/828/1476173404-1.jpg"}/>
			</Div>
			<Div>
				<Title level="1">
					{player}
				</Title>
			</Div>
		</ButtonGroup>
	);
};