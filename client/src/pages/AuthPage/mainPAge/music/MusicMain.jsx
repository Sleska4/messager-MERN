import React from 'react';
import axios from 'axios';
import {useDispatch } from 'react-redux';

import './music.css'



const MusicMain = () => {
    const dispatch = useDispatch()

    const openWindow = () => {
        dispatch({type: "MODAL_WINDOW_CHANGE"})  
    }  

    const hendleFile = async (e) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0])
        console.log(e.target.files);

        try{
            await axios.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => {
                FormData.delete("image")
            });
        } catch(err) {
            console.log(err)
        }
    }

    
    return (
            <div className="main">
                <div className="music-player">

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

                </div>
                <hr />
                <form type="file" id="file">
                    <input  type="file" name="upload-test" id='upload-test' onChange={(e) => hendleFile(e)} />
                    <button>OK</button>
                </form>
            </div>
    );
}

export default MusicMain;
