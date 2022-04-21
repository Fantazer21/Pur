import React from 'react';
import s from "./styles.module.css";

const ModalCardEditor = () => {
    return (
        <div>
            <div className={s.ModalCardEditor}>
                <div className={s.modalContent}>
                    <h1>Insert name</h1>
                    <div>
                        {/*<input type='text'  className={s.input} onChange={(e) => setName(e.currentTarget.value)}/>*/}
                        {/*<button className={s.button} onClick={() => props.setUser(name)}>SAVE</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCardEditor;