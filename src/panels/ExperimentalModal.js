import React from 'react';
import PropTypes from 'prop-types';

import {Button, ModalCard, ModalRoot, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

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
		icon={<Icon56MoneyTransferOutline />}
		header="Отправляйте деньги друзьям, используя банковскую карту"
		subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
		actions={
			<Button
				size="l"
				mode="primary"
				stretched
				onClick={onButtonClicked}
				data-to='persik'
			>
				Попробовать
			</Button>
		}
	></ModalCard>
};

ExperimentalModal.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	changeActiveModal: PropTypes.func.isRequired,
};

export default ExperimentalModal;
