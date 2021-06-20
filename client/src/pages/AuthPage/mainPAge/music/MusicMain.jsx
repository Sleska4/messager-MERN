import React, {useEffect, useState} from 'react';
import {useDispatch } from 'react-redux';
import axios from 'axios';

import './music.css'
import MusicPlayer from '../../../../componens/musicPlayer/MusicPlayer';
import MusicList from './../../../../componens/musicList/MusicList';



const MusicMain = () => {
    const dispatch = useDispatch()

    const openWindow = () => {
        dispatch({type: "MODAL_WINDOW_CHANGE"})  
    }  

    const [music, setMusic] = useState([]);

    const getMusic = async () => {
        try {
            await axios.get('/files/music', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then ((response) => setMusic(response.data))

        } catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        getMusic();
    }, [])

    return (
            <div className="main">
                <div className="music-player">
                    <div className="music-player-container">
                        <MusicPlayer/>
                    </div>
                </div>
                <div className="music-nav-block">
                    <div className="music-navbar">
                        <ul className="music-navbar-elems">
                            <li>Моя музыка</li>
                            <li>Плейлисты</li>
                            <li onClick={() => openWindow()}>Добавить</li>
                            <li className="music-not-available">Рекомендации</li>
                        </ul>
                    </div>
                    <div className="div-search">
                        <form className="form-search">
                            <div className="input-field">
                                <input 
                                    type="text" 
                                    name="search-value" 
                                    id="musick-search"
                                    className="validate"
                                    />
                                <label htmlFor="musick-search">Введите автора или название песни</label>
                                <button>OK</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="music-list">
                    <MusicList list={music}/>
                </div>
                <hr />
            </div>
    );
}

export default MusicMain;
