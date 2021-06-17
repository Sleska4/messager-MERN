import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './ModalWindow.css'


export default function ModalWindow() {

    const dispatch = useDispatch();

    const window = useSelector(state => state.modalWindowOpen);

    const closeWindow = () => {
        dispatch({type: "MODAL_WINDOW_CHANGE"})  
    }  
    const [file, setFile] = useState({});
    const [title, setTitle] = useState('Проверка');
    const [author, setAuthor] = useState('');

    const hendleFile = (e) => {
        const formData = new FormData();
        formData.append("document", e.target.files[0])
        formData.append('test', JSON.stringify('sdsaddasa'))
        setFile(formData);
    }

    const onSubmitTest = async (e) => {
        e.preventDefault();
        try{
            console.log(file)
            await axios.post('/files/upload', file, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => console.log('Успех'))
        } catch(err) {
            console.log(err)
        }


    }

    if(window){
    return(
        <div 
            className="lol">
            <div 
                className="modal-window active" 
                data-modal="1">
                <div>
                <svg className="modal__cross"
                    onClick={() => closeWindow()}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                </div>
                <div>
                    <b className="modal__title">Выберите элемент</b>
                    <div class="content row">
                        <form className="form-content" id="test" onSubmit={() => onSubmitTest()}>
                            <input  type="file" name="upload-test" id='upload-test' onChange={(e) => hendleFile(e)} />
                            <div className="input-type-text">
                                <input 
                                    type="text"
                                    placeholder="Название композиции" 
                                    name="musicName" 
                                    id="musicName"/>
                                <input  
                                    onChange={(e) => setAuthor(e.target.value)}
                                    type="text" 
                                    placeholder="Автор" 
                                    name="musicAuthor" 
                                    id="musicAuthor"/>
                            </div>
                            <button onClick={(e) => onSubmitTest(e)}>OK</button>
                        </form>
                    </div>
                </div>
            </div>
            <div 
                onClick={() => closeWindow()} 
                className="overlay active" 
                id="overlay-modal"></div>
        </div>
    )}
    return(
        // Это не костыль. Данный компонент так был задуман!
        <></>
    )
}