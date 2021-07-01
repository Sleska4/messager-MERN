import React, {useEffect, useState, useMemo} from 'react';

import './musicPlayer.css';

export default function MusicPlayer({musicList, musicActiveIndex, setMusicActiveIndex}) {

    const [playingNow, setPlayingNow] = useState({title: "", author: "", link: "#"});
    const [currentTime, setCurrentTime] = useState()
    const audio = useMemo(() => new Audio(), []);
    let musicIsPlay = false;
    const width = { width: `${currentTime/audio.duration * 100}%` }

    useEffect(() => {
        if(musicList[musicActiveIndex]){
            setPlayingNow(musicList[musicActiveIndex]);
            audio.pause();
            audio.src = (playingNow.link);
        };
        }, [musicActiveIndex, musicList, audio, playingNow.link, musicIsPlay]);


        const play = () => {
            if (!musicIsPlay) {
                audio.play();
            }
            else{
                audio.pause();
            }
            musicIsPlay = !musicIsPlay;
        } 

        audio.onplay = (() => {
            setInterval(() => {
                const time = Math.floor(audio.currentTime);
                setCurrentTime(time);
            });
        })
        
    const dataFormat = (seconds) => {
        if(!seconds){
            return false
        }
        seconds = Math.floor(seconds);
        let s = Math.floor(seconds % 60);
        s = s >= 0 && s < 10 ? `0${s}` : s;
        let m = Math.floor(seconds / 60 % 60);
        m = m >= 0 && m < 10 ? `0${m}` : m;
        return (`${m}:${s}`)
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
                    <div className="box-width-time"><span className="music-current-time">{dataFormat(audio.currentTime) || '00:00'} / {dataFormat(audio.duration) || '00:00'}</span></div>
                    <div className="audio-track">
                        <div className="audio-time" style={width} ></div>
                        <div className="music-controller"></div>
                    </div>
                </div>
                <div className="options">

                </div>
            </div>
        </div>
    )
}