import React, {useState} from 'react';
import axios from 'axios';

//import { useSelector } from 'react-redux';


import './mainPage.scss';


const MainPage = () => {
    const [info, setInfo] = useState([]);
    // const userData = JSON.parse(localStorage.getItem('userData'));

    // const {userId} = userData;


    //const state = useSelector(state => state.test)

    // const start = async (id) => {
    //     try{
    //         await axios.get(`/api/info/get-info/${id}`)
    //         .then(res => setInfo(res.data))
    //     } catch(err){
    //         console.log(err)
    //     }
    // }

    const test = async () => {
        try{
            await axios.post(`/api/static/addImg`)
            .then(res => setInfo(res.data))
        } catch(err){
            console.log(err)
        }
    }

    
    return (
        <div className="main">
            <div className="row">
                <h3>{info.name}</h3>
                    <input onChange={test} type="file" name="uploadFile"/>

            </div>
        </div>
    );
}

export default MainPage;
