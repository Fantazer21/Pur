import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import Board from "../board/Board";
import {BoardType} from "../../bll/store";


export let initialStateBoards: BoardType[] = [
    {
        boardId: 1,
        boardName: "TO DO",
        cards: []
    },
    {
        boardId: 2,
        boardName: "In Progress",
        cards: []
    },
    {
        boardId: 3,
        boardName: "Testing",
        cards: []
    },
    {
        boardId: 4,
        boardName: "Done",
        cards: []
    },
]

const Main = () => {

    const [inState, setInState] = useState([])


    // const setNewStateBoards = (boardId: number, newName: string ) => {
    //
    //     const copy = initialStateBoards
    //
    //     const newArr = copy.map( el=> {
    //         if(el.boardId === boardId) {
    //             return {...el, boardName: newName}
    //         }
    //         return el
    //     })
    //     initialStateBoards = newArr
    // }



    useEffect(() => {

    }, [])
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                {
                    initialStateBoards.map(b => {
                            return <Board boardId={b.boardId}
                                          boardName={b.boardName}
                                          cards={b.cards}
                                          setNewStateBoards={setNewStateBoards}
                            />
                        }
                    )
                }

            </div>
        </div>
    );
};

export default Main;