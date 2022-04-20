import React from 'react';
import s from './styles.module.css'
import {BoardType, cardsStore, CardType} from "../../bll/store";
import Card from "../card/Card";


const Board = (props: BoardType) => {
    return (
        <div className={s.board}>
            <h3>{props.boardName}</h3>
            <div className={s.cardsList}>
                {
                    cardsStore.map((card: CardType) =>  {
                        if (card.boardId === props.boardId)
                        return <Card id={card.id}
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

export default Board;