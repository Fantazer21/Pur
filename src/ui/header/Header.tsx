import React from 'react';
import s from './styles.module.css'

type HeaderPropsType = {
    name: string
}

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>
            <div>Trello</div>
            <div>Hello, {props.name}</div>
        </div>
    );
}

export default Header;