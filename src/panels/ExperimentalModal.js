import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Avatar, ModalCard} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import {localStorage} from "@vkontakte/vkjs";


const ExperimentalModal = props => {
	const [balance, setBalance] = useState(0)
	useEffect(()=>{
		let tmp = localStorage.getItem('score')
		if (tmp === 'null'){
			tmp = 0
		}
		localStorage.setItem("score", (Number(tmp) + 1).toString())
		setBalance(Number(localStorage.getItem("score")))
	},[])

	const onButtonClicked = () => {
		props.go('persik')
		props.changeActiveModal(null)
	}
	return <ModalCard
		id={props.id}
		onClose={() => props.changeActiveModal(null)}
		data-to="home"
		icon={<Avatar src={props.fetchedUser.photo_200}/>}
		header={`Ваш счет: ${balance}`}></ModalCard>

};

ExperimentalModal.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	changeActiveModal: PropTypes.func.isRequired,
	balance: PropTypes.number.isRequired
};

export default ExperimentalModal;
