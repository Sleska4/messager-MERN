import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import './ModalWindow.css'


export default function ModalWindow() {

    const dispatch = useDispatch();

    const window = useSelector(state => state.modalWindowOpen);

    const closeWindow = () => {
        dispatch({type: "MODAL_WINDOW_CHANGE"})  
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