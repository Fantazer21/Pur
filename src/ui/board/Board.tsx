import React, {useState, useContext, useEffect} from 'react';
import s from './styles.module.css'
import Card from "../card/Card";
import OutsideClickHandler from 'react-outside-click-handler'
import {Context} from "../main/Main";
import {CardsLocStor} from "../../dal/cardsLocStor";
import ModalCardEditor from "../modals/modalCardEditor/ModalCardEditor";

type BoardPropsType = {
    boardId: 1 | 2 | 3 | 4
    boardName: string
    cards: Array<CardType> | null
}
export type CardType = {
    id: number,
    boardId: 1 | 2 | 3 | 4,
    nameCard: string,
    descriptionCard: string,
    commentCard: Array<string>,
}


const Board = (props: BoardPropsType) => {
    const [cardsStore, setCardsStore] = useState<CardType[]>([
        {
            id: 1,
            boardId: 2,
            nameCard: "Name Card",
            descriptionCard: "descriptionCard",
            commentCard: ['Comment card', 'New comment2', 'New comment3']
        },
        {
            id: 2,
            boardId: 1,
            nameCard: "Name Card",
            descriptionCard: "descriptionCard",
            commentCard: ['Comment card', 'New comment2', 'New comment3', 'New comment4']
        },
        {
            id: 3,
            boardId: 3,
            nameCard: "Name Card",
            descriptionCard: "descriptionCard",
            commentCard: ['Comment card']
        },
    ])
    const [nameBoard, setNameBoard] = useState('')
    const [nameCard, setNameCard] = useState('')
    const [toggle, setToggle] = useState(false)
    const [createCardStatus, setCreateCardStatus] = useState(false)
    const [openCLoseModalEditor, setOpenCLoseModalEditor] = useState(false)
    const [currentCard, setCurrentCard] = useState<CardType | null>(null)

    const {setNewStateBoards}: any = useContext(Context)

    const setNmBoard = (val: string, boardName: string) => {
        setNameBoard(boardName)
        setNameBoard(val)
    }

    const outSideClick = (boardId: number, brName: string) => {
        if (nameBoard == '') {
            setNewStateBoards(boardId, brName)
        } else setNewStateBoards(props.boardId, nameBoard)
        setToggle(false)
    };

    const createNewCard = (boardId: 1 | 2 | 3 | 4) => {

        const newCard = {
            id: +cardsStore.length + 1,
            boardId: boardId,
            nameCard: nameCard,
            descriptionCard: 'New descriptionCard',
            commentCard: ['New comment1']
        }

        if (nameCard == '') {
            setCardsStore(cardsStore)
        } else {
            const newArr: any = [...cardsStore, newCard]
            setCardsStore(newArr)
            setNameCard('')
            CardsLocStor.setCards('cards', newArr)
        }
        setCreateCardStatus(false)
    }

    const getCards = () => {
        const cards = CardsLocStor.getCards()
        if (cards) {
            setCardsStore(cards)
        }
    }

    const setChooseCard = (store: CardType[], id: number, boardId: number) => {
        const findResult = store.find(c => c.id === +id && +boardId === c.boardId)
        if (findResult) {
            setCurrentCard(findResult)
        }
    }

    const removeCard = (id: number, boardId: number) => {
        const findResult = cardsStore.filter(c => c.id !== +id && +boardId === c.boardId)
        if (findResult) {
            setCardsStore(findResult)
        }
        CardsLocStor.setCards('cards', findResult)
    }

    const editTitle = (id: number, boardId: number, newNameCard: string) => {
        const newSt = cardsStore.map(c => {
            if (c.id === +id && +boardId === c.boardId) {
                return {...c, nameCard: newNameCard}
            }
            return c
        })
        setCardsStore(newSt)
        setChooseCard(newSt, id, boardId)
        CardsLocStor.setCards('cards', newSt)
    }

    const editDescription = (id: number, boardId: number, newDescription: string) => {
        const newSt = cardsStore.map(c => {
            if (c.id === +id && +boardId === c.boardId) {
                return {...c, descriptionCard: newDescription}
            }
            return c
        })
        setCardsStore(newSt)
        setChooseCard(newSt, id, boardId)
        CardsLocStor.setCards('cards', newSt)
    }

    const editComment = (id: number, boardId: number, newComment: string, commentNumber: number) => {
        const newSt = cardsStore.map(c => {
            if (c.id === +id && +boardId === c.boardId) {
                return {
                    ...c,
                    commentCard: c.commentCard.map((el, ind) => {
                        if (ind === commentNumber) {
                            return newComment
                        }
                        return el
                    })
                }
            }
            return c
        })
        setCardsStore(newSt)
        setChooseCard(newSt, id, boardId)
        CardsLocStor.setCards('cards', newSt)
    }

    const removeComment = (id: number, boardId: number, commentNumber: number) => {
        const newSt = cardsStore.map(c => {
            if (c.id === +id && +boardId === c.boardId) {
                return {
                    ...c,
                    commentCard: c.commentCard.filter((el, ind) => ind !== commentNumber)
                }
            }
            return c
        })
        setCardsStore(newSt)
        setChooseCard(newSt, id, boardId)
        CardsLocStor.setCards('cards', newSt)
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className={s.board}>
            {!toggle
                ?
                <h3 onClick={() => setToggle(true)}>{props.boardName}</h3>
                :
                <OutsideClickHandler
                    onOutsideClick={() => outSideClick(props.boardId, props.boardName,)}
                >
                    <input onChange={(e) =>
                        setNmBoard(e.currentTarget.value, props.boardName)
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
                                             setOpenCLoseModalEditor={setOpenCLoseModalEditor}
                                             setChooseCard={() => setChooseCard(cardsStore, card.id, props.boardId)}
                                />
                        }
                    )
                }
            </div>
            {!createCardStatus
                ? <button onClick={() => setCreateCardStatus(true)} className={s.button}>Add card</button>
                : <OutsideClickHandler onOutsideClick={() => createNewCard(props.boardId)}>
                    <input onChange={(e) =>
                        setNameCard(e.currentTarget.value)
                    }
                           className={s.input}/>
                </OutsideClickHandler>
            }
            {openCLoseModalEditor && <ModalCardEditor
                editDescription={editDescription}
                removeComment={removeComment}
                cardsStore={cardsStore}
                boardId={props.boardId}
                boardName={props.boardName}
                openCLoseModalEditor={openCLoseModalEditor}
                editTitle={editTitle}
                removeCard={removeCard}
                chooseCard={currentCard}
                editComment={editComment}
                setOpenCLoseModalEditor={setOpenCLoseModalEditor}/>
            }
        </div>
    );
};

export default Board