import React from 'react';

import {Button, ButtonGroup, Card, Title} from '@vkontakte/vkui';

const GameWinnerChooser = props => (
		<Card mode="shadow" style={{ padding: 14}}>
			<Title level="3" style={{ marginBottom: 16 }}>
				Кто выиграет матч?
			</Title>
			<ButtonGroup mode="vertical" style={{display: "flex", justifyContent: "center", marginTop: 14}}>
					<Button size="l" mode="secondary" stretched>
						{props.gameInfo.TeamAName}
					</Button>
					<Button size="l" mode="secondary" stretched>
						{props.gameInfo.TeamBName}
					</Button>
					<Button size="l" mode="secondary" stretched>
						Будет ничья
					</Button>
				</ButtonGroup>
		</Card>
);

GameWinnerChooser.propTypes = {
};

export default GameWinnerChooser;