import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import style from "components/InputDialog.module.css";
import { TextField, Button } from '@mui/material';

const InputDialog : React.FC<{isOpen: boolean, onClose:()=>void, onRegister:(msg:string)=>void}> = ({isOpen, onClose, onRegister}) => {

    const onClickRegister = () => {
        const elem:HTMLTextAreaElement = document.getElementById("card") as HTMLTextAreaElement;
        //console.log(elem?.value);
        onRegister(elem.value);
    }

    return(
        <ReactModal isOpen={isOpen} className={style.Modal} overlayClassName={style.Overlay}>
            <div className={style.contents}> 
            <TextField
                id="card" 
                className={style.inputArea}
                label="Multiline"
                multiline
                rows={4}
                defaultValue=""/>
            </div>
            <div className={style.bottonArea}>
                <Button variant='contained' onClick={onClickRegister}>Register</Button>
                <Button variant='outlined'  onClick={onClose}>Close</Button>
            </div>
        </ReactModal>
    );
} 

export default InputDialog;