import React from 'react';
import s from './styles.module.css'
import comment from './comment.svg'



const Card = (props: any) => {

    return (
        <div className={s.card} onClick={() => {
            props.setChooseCard()
            props.setOpenCLoseModalEditor(true)
        }}>
          <div className={s.comment}>{props.nameCard}</div>
            <div className={s.commentWrapper}>
                <img src={comment} width={15} alt='comment'/>
                <div>{props.commentCard.length}</div>
            </div>
        </div>
    );
};

export default Card;