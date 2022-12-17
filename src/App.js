import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	ScreenSpinner,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	ModalRoot
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import ExperimentalModal from "./panels/ExperimentalModal";

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [activeModal, setActiveModal] = React.useState(null);
	const [modalHistory, setModalHistory] = useState([]);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
		// setPopout(null);
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const goByName = e => {
		setActivePanel(e);
	};

	const changeActiveModal = (activeModal) => {
		activeModal = activeModal || null;
		let localModalHistory = modalHistory ? [...modalHistory] : [];

		if (activeModal === null) {
			localModalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
			localModalHistory = localModalHistory.splice(
				0,
				localModalHistory.indexOf(activeModal) + 1
			);
		} else {
			localModalHistory.push(activeModal);
		}

		setActiveModal(activeModal);
		setModalHistory(localModalHistory);
	};

	const modalBack = () => {
		changeActiveModal(modalHistory[modalHistory.length - 2]);
	};

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} changeActiveModal={changeActiveModal}/>
								<Persik id='persik' fetchedUser={fetchedUser} go={go} />
							</View>
							<ModalRoot activeModal={activeModal} onClose={modalBack}>
								<ExperimentalModal id='modal' go={goByName} changeActiveModal={changeActiveModal}/>
							</ModalRoot>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
