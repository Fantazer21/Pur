import React, {useState} from 'react';
import s from "./styles.module.css";
import cross from './cross.svg'
import OutsideClickHandler from "react-outside-click-handler";



// Как пользователь, я должен иметь возможность добавить/изменить/удалить описание к карточке.
// Как пользователь, я должен иметь возможность добавить/изменить/удалить комментарий.
// Как пользователь, я должен видеть в попапе: название карточки, название колонки карточки, имя автора карточки, описание карточки, комментарии к карточке (имя и автора).

const ModalCardEditor = (props: any) => {
    const [editTitle, setEditTitle] = useState(false)
    const [newNameCard, setNewNameCard] = useState('')

    return (
        <div className={s.ModalCardEditor}>
            <div className={s.modalContent}>
                <div className={s.leftSection}>
                    <div>
                        <button className={s.button}
                                onClick={() => {
                                    props.removeCard(props.chooseCard.id, props.chooseCard.boardId)
                                    props.setOpenCLoseModalEditor(false)
                                }}>Delete Card
                        </button>
                    </div>
                    <div>
                        {!editTitle
                            ?
                            <h2 className={s.title}
                                onClick={() => setEditTitle(true)}> Title: {props.chooseCard.nameCard}</h2>
                            :
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    props.editTitle(props.chooseCard.id, props.chooseCard.boardId, newNameCard)
                                        setEditTitle(false)

                                } }>

                                <input onChange={(e) => setNewNameCard(e.currentTarget.value)}
                                       className={s.input}/>
                            </OutsideClickHandler>

                        }
                    </div>


                    <div>
                        {/*<input type='text'  className={s.input} onChange={(e) => setName(e.currentTarget.value)}/>*/}
                        {/*<button className={s.button} onClick={() => props.setUser(name)}>SAVE</button>*/}
                    </div>
                </div>
                <div className={s.rightSection}><img width={20} src={cross}
                                                     onClick={() => props.setOpenCLoseModalEditor(false)}/></div>
            </div>
        </div>
    );
};

export default React.memo(ModalCardEditor);