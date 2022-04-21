import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import Board from "../board/Board";
import {BoardType} from "../../bll/store";
import {BoardLocStor} from "../../dal/boardLocStor";


export const Context = React.createContext({})

const Main = () => {

    const [inState, setInState] = useState<BoardType[]>([
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
    ])

    const setNewStateBoards = (boardId: number, newName: string) => {
        const newArr = inState.map(el => {
            if (el.boardId === boardId) {
                return {...el, boardName: newName}
            }
            return el
        })
        setInState(newArr)
        BoardLocStor.setBoards('boards', newArr)
    }

    const getBoards = () => {
        const board = BoardLocStor.getBoards()
        if (board) {
            setInState(board)
        }
    }
    useEffect(() => {
        getBoards()
    }, [])


    return (
        <Context.Provider value={{
            setNewStateBoards
        }}>
            <div className={s.main}>
                <div className={s.mainContainer}>
                    {
                        inState.map((b, i) => {
                                return <Board key={i}
                                              boardId={b.boardId}
                                              boardName={b.boardName}
                                              cards={b.cards}
                                />
                            }
                        )
                    }
                </div>
            </div>
        </Context.Provider>
    );
};

export default Main;