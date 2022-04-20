import React from 'react';
import s from './styles.module.css'
import Board from "../board/Board";
import {initialState} from "../../bll/store";


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                {
                    initialState.map(b => {
                            return <Board boardId={b.boardId} boardName={b.boardName} cards={b.cards}/>
                        }
                    )
                }

            </div>
        </div>
    );
};

export default Main;