import React, {useEffect, useState} from 'react';
import s from "./styles.module.css";
import cross from './cross.svg'
import OutsideClickHandler from "react-outside-click-handler";
import {userLocStor} from "../../../dal/userLocStor";


// Как пользователь, я должен иметь возможность добавить/изменить/удалить комментарий.


const ModalCardEditor = (props: any) => {
    const [registrationName, setRegistrationName] = useState('')
    const [editTitle, setEditTitle] = useState(false)
    const [editDescription, setEditDescription] = useState(false)
    const [newDescription, setNewDescription] = useState('')

    const [editComment, setEditComment] = useState(321321)
    const [newComment, setNewComment] = useState('')

    const [newNameCard, setNewNameCard] = useState('')


    const getUserName = () => {
        const name = userLocStor.getUser()
        if (name) {
            setRegistrationName(name)
        }
    }
    useEffect(() => {
        getUserName()
    }, [])
    console.log(props.cardsStore.find((c: any) => c.boardId === props.boardId).commentCard)

    return (
        <div className={s.modalCardEditor}>
            <div className={s.modalContent}>
                <div className={s.leftSection}>
                    <div><h2>Board name: {props.boardName}</h2></div>
                    <div className={s.creator}>Creator: {registrationName}</div>
                    <div className={s.titleSection}>
                        {!editTitle
                            ?
                            <div className={s.title}
                                 onClick={() => setEditTitle(true)}> Card name: {props.chooseCard.nameCard}</div>
                            :
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    props.editTitle(props.chooseCard.id, props.chooseCard.boardId, newNameCard)
                                    setEditTitle(false)
                                }}>

                                <input onChange={(e) => setNewNameCard(e.currentTarget.value)}
                                       className={s.inputTitle}/>
                            </OutsideClickHandler>
                        }
                    </div>
                    <div className={s.descriptionSection}>
                        <div className={s.descriptionContent}>
                            {
                                !editDescription
                                    ?
                                    <div className={s.description}
                                         onClick={() => setEditDescription(true)}>
                                        Description card: {props.chooseCard.descriptionCard}
                                    </div>
                                    :
                                    <OutsideClickHandler
                                        onOutsideClick={() => {
                                            props.editDescription(props.chooseCard.id, props.chooseCard.boardId, newDescription)
                                            setEditDescription(false)
                                        }}>
                                        <input onChange={(e) => setNewDescription(e.currentTarget.value)}
                                               className={s.inputTitle}/>
                                    </OutsideClickHandler>
                            }
                        </div>
                        <div>
                            <button className={s.button}
                                    onClick={() => props.editDescription(props.chooseCard.id, props.chooseCard.boardId, "Insert new description")}>Remove
                                description
                            </button>
                        </div>
                    </div>
                    <div className={s.commentsSection}>
                        <div className={s.commentTitle}>Comments :</div>
                        <div className={s.arrComments}>

                            {
                                props.cardsStore.find((c: any) => c.boardId === props.boardId).commentCard.map((comment: string, ind: number) => {
                                    return editComment === ind ?
                                        <OutsideClickHandler
                                            onOutsideClick={() => {
                                                if (newComment === '') {
                                                    setNewComment(comment)
                                                    props.editComment(props.chooseCard.id, props.chooseCard.boardId, comment, ind)
                                                    setEditComment(4324234324)
                                                } else {
                                                    props.editComment(props.chooseCard.id, props.chooseCard.boardId, newComment, ind)
                                                    setEditComment(4324234324)
                                                    setNewComment('')
                                                }
                                                setNewComment('')
                                            }}>
                                            <input onChange={(e) => {
                                                setNewComment(e.currentTarget.value)
                                            }
                                            }
                                                   className={s.inputTitle}/>
                                        </OutsideClickHandler> :
                                        <div key={ind} className={s.comment} onClick={() => setEditComment(ind)}>
                                            {ind + 1}) {comment}
                                            <button
                                                onClick={() => props.removeComment(props.chooseCard.id, props.chooseCard.boardId, ind)}>remove
                                            </button>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        {/*<input type='text'  className={s.input} onChange={(e) => setName(e.currentTarget.value)}/>*/}
                        {/*<button className={s.button} onClick={() => props.setUser(name)}>SAVE</button>*/}
                    </div>
                    <div className={s.deleteSection}>
                        <div>
                            <button className={s.button}
                                    onClick={() => {
                                        props.removeCard(props.chooseCard.id, props.chooseCard.boardId)
                                        props.setOpenCLoseModalEditor(false)
                                    }}>Delete Card
                            </button>
                        </div>
                    </div>
                </div>
                <div className={s.rightSection}>
                    <img alt={'cross'} width={20} src={cross}
                         onClick={() => props.setOpenCLoseModalEditor(false)}/>
                </div>
            </div>
        </div>
    );
};
//onClick={() => props.editComment(props.chooseCard.id, props.chooseCard.boardId,'hahaha', ind)}

export default React.memo(ModalCardEditor);