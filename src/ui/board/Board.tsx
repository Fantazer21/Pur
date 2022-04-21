import React, {useState, useContext} from 'react';
import s from './styles.module.css'
import {cardsStore, CardType} from "../../bll/store";
import Card from "../card/Card";
import OutsideClickHandler from 'react-outside-click-handler'
import {Context} from "../main/Main";

type BoardPropsType = {
    boardId: 1 | 2 | 3 | 4
    boardName: string
    cards: Array<CardType> | null
}

const Board = (props: BoardPropsType) => {
    const [nameBoard, setNameBoard] = useState('')
    const [toggle, setToggle] = useState(false)
    const {setNewStateBoards}: any = useContext(Context)

    const setName = (val: string, boardName: string) => {
        setNameBoard(boardName)
        setNameBoard(val)
    }

    const outSideClick = (boardId: number, brName: string) => {
        if (nameBoard == '') {
            setNewStateBoards(boardId, brName)
        } else  setNewStateBoards(props.boardId, nameBoard)
        setToggle(false)
    };
    return (
        <div className={s.board}>
            {!toggle ?

                <h3 onClick={() => setToggle(true)}>{props.boardName}</h3>
                :
                <OutsideClickHandler
                    onOutsideClick={() => outSideClick(props.boardId, props.boardName, ) }
                >
                    <input  onChange={(e) =>
                          setName(e.currentTarget.value, props.boardName)
                    }
                           className={s.input}
                           placeholder={props.boardName}/>
                </OutsideClickHandler>

            }

            <div className={s.cardsList}>
                {
                    cardsStore.map((card: CardType, i) => {
                            if (card.boardId === props.boardId)
                                return <Card key={i}
                                             id={card.id}
                                             boardId={props.boardId}
                                             nameCard={card.nameCard}
                                             commentCard={card.commentCard}
                                             descriptionCard={card.descriptionCard}
                                />
                        }
                    )
                }
            </div>
            <button className={s.button}>Add card</button>
        </div>
    );
};

export default Board