import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {Panel} from '@vkontakte/vkui';

import Styles from './Body.module.css';
import persik from '../../img/persik.png';
import '../Persik.css';
import TournamentTable from "../../components/TournamentTable";
import GameWinnerChooser from "../../components/GameWinnerChooser";
import GameInfoPanel from "../../components/GameInfoPanel";

export default function Body(props) {
  //let classes = Styles.bodyWrapper;
  const tableData = [{id: 1, team: "navi", photo:persik}, {id: 2, team: "vp", photo:""}]
	const [data, updateData] = useState({
		eventDateTime: "Завтраа в 16:30",
		league: "league",
		stadium: "stadium",
		lawyer: "lawyer",
		leftTeam: {
			teamName: "Louiton",
			teamLogoUrl: persik,
		},
		rightTeam: {
			teamName: "Vuiton",
			teamLogoUrl: persik,
		},
		score: {
			leftTeamScore: 1,
			rightTeamScore: 2,
		}
	});
  return (
    // <div className={classes}>
    //     <Content go={props.go}></Content>
    //     <Side></Side>
    // </div>
  <Panel id={props.id} className={Styles.bodyWrapper}>
        <div className={Styles.bodyWrapper}>
          <div className={Styles.contentWrapper}>
            <GameInfoPanel gameInfo={data} go={props.go}/>
            <GameWinnerChooser gameInfo={data}/>
          </div>
          <div className={Styles.sideWrapper}>
            <TournamentTable tableData={tableData}/>
          </div>
        </div>
	</Panel>
  );
}

Body.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
