import React from 'react';

import './musicList.css'


const MusicList = ({list, setMusicActiveIndex}) => {

    const items = list.map((el, index) =>
        <li key={el._id}>
            <div className="music-list-elem" onClick={() => setMusicActiveIndex(index)}>
                    <div className="music-list-img">
                </div>
                <div className="music-list-info">
                    <b className="title">{el.title}</b>
                    <p className="author">{el.author}</p>
                </div>
            </div>
        </li>
  );

    return (
        <div>
            {items}
        </div>
    );
}

export default MusicList;