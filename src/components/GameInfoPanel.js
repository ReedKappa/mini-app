import React from 'react';

import {Avatar, ButtonGroup, Card, Div, RichCell, Separator, Title} from '@vkontakte/vkui';
import {Icon28ChevronBack} from "@vkontakte/icons";

const GameInfoPanel = props => (
		<Card mode="shadow" style={{padding: 14}}>
			<Div>
				<Div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, padding: 0}}>
					<div><Icon28ChevronBack onClick={props.go} data-to="home" style={{cursor: "pointer"}}/></div>
					<div>
						<Title level="2">
							{props.gameInfo.eventDateTime}
						</Title>
					</div>
					<div/>
				</Div>

				<Separator/>

				<Div style={{display: "flex", justifyContent: "center"}}>
					<ButtonGroup style={{display: "inline-flex", alignItems: "center"}}>
						<PlayerSide reverse={false} player={props.gameInfo.leftTeam}/>
						<GameCounter score={props.gameInfo.score}/>
						<PlayerSide reverse={true} player={props.gameInfo.rightTeam}/>
					</ButtonGroup>
				</Div>

				<Separator/>

				<Div style={{display: "flex", justifyContent: "space-between"}}>
					<RichCell caption="Лига">
						{props.gameInfo.league}
					</RichCell>
					<RichCell caption="Стадион">
						{props.gameInfo.stadium}
					</RichCell>
					<RichCell caption="Судья">
						{props.gameInfo.lawyer}
					</RichCell>
				</Div>
			</Div>
		</Card>
);

export default GameInfoPanel;

const GameCounter = ({score}) => {
	return (
		<ButtonGroup style={{display: "inline-flex"}}>
			<Div>
				<Title level="1">
					{score.leftTeamScore ? score.leftTeamScore : "-"}
				</Title>
			</Div>
			<Div>
				<Title level="1">
					:
				</Title>
			</Div>
			<Div>
				<Title level="1">
					{score.rightTeamScore ? score.rightTeamScore : "-"}
				</Title>
			</Div>
		</ButtonGroup>
	);
};

const PlayerSide = ({reverse, player}) => {
	return (
		<ButtonGroup style={{display: "inline-flex", alignItems: "center", flexDirection: reverse ? "row-reverse" : "row"}}>
			<Div>
				<Avatar size={48} src={player.teamLogoUrl}/>
			</Div>
			<Div>
				<Title level="1">
					{player.teamName}
				</Title>
			</Div>
		</ButtonGroup>
	);
};