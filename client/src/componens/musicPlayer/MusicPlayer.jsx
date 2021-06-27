import React, {useEffect, useState, useMemo} from 'react';

import './musicPlayer.css';

export default function MusicPlayer({musicList, musicActiveIndex, setMusicActiveIndex}) {

    const [playingNow, setPlayingNow] = useState({title: "", author: "", link: "#"});
    const [currentTime, setCurrentTime] = useState()
    const audio = useMemo(() => new Audio(), []);
    let musicIsPlay = false; 

    useEffect(() => {
        if(musicList[musicActiveIndex]){
            setPlayingNow(musicList[musicActiveIndex]);
            audio.pause();
            audio.src = (playingNow.link);
        }
        }, [musicActiveIndex, musicList, audio, playingNow.link]);

    const play = () => {
        if (!musicIsPlay) {
            audio.play();
            setInterval(() => {
                const time = Math.floor(audio.currentTime);
                setCurrentTime(time);
            }, 1000);
        }
        else{
            audio.pause();
        }
        musicIsPlay = !musicIsPlay;
    } 
    
    return(
        <div className="player-content">
            <div className="flex">
                <div className="btn-controler">
                    <div id="backgroundplaceholder">
                        <button id="playPauseButton" onClick={() => play()}></button>
                    </div>
                </div>                             
                <div className="img"></div>
                <div className="info">
                    <b>{playingNow.title}</b>
                    <p>{playingNow.author}</p>
                </div>
                <div className="box-width">
                    <div className="box-width-time"><span className="music-current-time">{currentTime || '00:00'} / {'00:00'}</span></div>
                    <div className="audio-track">
                    </div>
                </div>
                <div className="options">

                </div>
            </div>
        </div>
    )
}