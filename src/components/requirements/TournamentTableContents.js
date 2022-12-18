import React from 'react';


import './TournamentTableContents.css';
import {Avatar, SimpleCell} from "@vkontakte/vkui";

export default function TournamentTableContents({arr}) {

    return (
        <div style={{position: "relative"}}>
            <table style={{width: "100%"}}>
                <tbody>
                {(
                    arr.map((x =>
                            <tr key={x.team}>

                                <td>
                                    <SimpleCell style={{padding:0}} before={<Avatar size={34} src={x.photo}/>}>
                                        {x.team}
                                    </SimpleCell>
                                </td>
                                <td></td>
                                <td className={"score"}>
                                    {x.id}
                                </td>
                            </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}