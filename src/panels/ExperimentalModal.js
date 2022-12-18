import React from 'react';
import PropTypes from 'prop-types';

import {Avatar, Button, ModalCard, ModalRoot, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import {Icon56MoneyTransferOutline} from "@vkontakte/icons";



const ExperimentalModal = props => {

	const onButtonClicked = () => {
		props.go('persik')
		props.changeActiveModal(null)
	}

	return <ModalCard
		id={props.id}
		onClose={() => props.changeActiveModal(null)}
		data-to="home"
		icon={<Avatar src={props.fetchedUser.photo_200}/>}
		header={`Ваш счет: ${props.balance}`}
	></ModalCard>
};

ExperimentalModal.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	changeActiveModal: PropTypes.func.isRequired,
	balance: PropTypes.number.isRequired
};

export default ExperimentalModal;
