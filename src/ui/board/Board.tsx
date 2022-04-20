import React from 'react';
import s from './styles.module.css'
import {BoardType} from "../../bll/store";
import Card from "../card/Card";



const Board = (props: BoardType) => {
    return (
        <div className={s.board}>
           <h3>{props.boardName}</h3>
                <div className={s.cardsList}>
                        <Card/>
                </div>
            <button className={s.button}>Add card</button>
        </div>
    );
};

export default Board;