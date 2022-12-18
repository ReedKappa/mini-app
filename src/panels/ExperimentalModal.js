import React from 'react';
import PropTypes from 'prop-types';

import {Avatar, ModalCard} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';


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
