import React from 'react';
import PropTypes from 'prop-types';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';
import './Persik.css';

const Experement = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>
		<Div>
			<Button
				align={"center"}
				href={""}
				before={false}
				after={false}
				appearance={"accent"}
				stretched={false}
				mode={"secondary"}
				disabled={false}
				size={"s"}
				loading={false}
			>
				{"Manchester"}
			</Button>
		</Div>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
