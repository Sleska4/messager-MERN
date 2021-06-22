import React from 'react';
import ReactAudioPlayer from 'react-audio-player';



const MusicList = ({list}) => {

    const items = list.map((el) =>
        <li key={el._id}>
             <ReactAudioPlayer
            src={el.link}
            controls
        />
        </li>
  );

    return (
        <div>
            {items}
        </div>
    );
}

export default MusicList;