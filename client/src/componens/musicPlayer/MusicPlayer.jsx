import React from 'react';

import './musicPlayer.css';

export default function MusicPlayer() {
    return(
        <div className="player-content">
            <div className="flex">
                <div className="btn-controler">
                    <div id="backgroundplaceholder">
                        <button id="playPauseButton"></button>
                    </div>
                </div>                             
                <div className="img"></div>
                <div className="info">
                    <b>Название</b>
                    <p>Автор</p>
                </div>
                <div className="box-width">
                    <div className="audio-track"><div className="time"></div></div>
                </div>
                <div className="options">

                </div>
            </div>
        </div>
    )
}