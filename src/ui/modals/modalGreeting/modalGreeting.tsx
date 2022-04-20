import React, {useState} from 'react';
import s from './styles.module.css'

type ModalPropsType = {
    setUser: (name: string) => void
}

const ModalGreeting = (props: ModalPropsType) => {
    const [name, setName] = useState('')
    return (
        <div className={s.modalGreeting}>
            <div className={s.modalContent}>
                <h1>Insert name</h1>
                <div>
                    <input type='text'  className={s.input} onChange={(e) => setName(e.currentTarget.value)}/>
                    <button className={s.button} onClick={() => props.setUser(name)}>SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default ModalGreeting;