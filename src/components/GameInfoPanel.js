import React from 'react';

import persik from "../img/persik.png";

import {Avatar, ButtonGroup, Card, Div, RichCell, Separator, Title} from '@vkontakte/vkui';
import {Icon28ChevronBack} from "@vkontakte/icons";

const GameInfoPanel = props => (
		<Card mode="shadow" style={{padding: 14}}>

			<Div>

				<Div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, padding: 0}}>

					<div><Icon28ChevronBack onClick={() => {}}/></div>
					<div>
							<Title level="2">
								Завтра в 16:30
							</Title>
					</div>
					<div/>

				</Div>

				<Separator/>

				<Div style={{display: "flex", justifyContent: "center"}}>
					<ButtonGroup style={{display: "inline-flex", alignItems: "center"}}>
						<PlayerSide reverse={false}/>
						<GameCounter/>
						<PlayerSide reverse={true}/>
					</ButtonGroup>
				</Div>

				<Separator/>

				<Div style={{display: "flex", justifyContent: "space-between"}}>
					<RichCell caption="Лига">
						Чемпионшип Англии
					</RichCell>
					<RichCell caption="Стадион">
						Стадион Кенилворт-Роуд
					</RichCell>
					<RichCell caption="Судья">
						Даррен Бонд
					</RichCell>
				</Div>

			</Div>


		</Card>
);

GameInfoPanel.propTypes = {
};

export default GameInfoPanel;

const GameCounter = () => {
	return (
		<ButtonGroup style={{display: "inline-flex"}}>
			<Div>
				<Title level="1">
					-
				</Title>
			</Div>
			<Div>
				<Title level="1">
					:
				</Title>
			</Div>
			<Div>
				<Title level="1">
					-
				</Title>
			</Div>
		</ButtonGroup>
	);
};

const PlayerSide = ({reverse}) => {
	return (
		<ButtonGroup style={{display: "inline-flex", alignItems: "center", flexDirection: reverse ? "row-reverse" : "row"}}>
			<Div>
				<Avatar size={48} src={persik}/>
			</Div>
			<Div>
				<Title level="1">
					Лутон
				</Title>
			</Div>
		</ButtonGroup>
	);
};