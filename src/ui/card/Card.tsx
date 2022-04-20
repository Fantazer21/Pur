import React from 'react';
import s from './styles.module.css'
import comment from './comment.svg'
import {CardType} from "../../bll/store";


const Card = (props: CardType) => {
    return (
        <div className={s.card} onClick={() => alert('dasdasdasd')}>
          <div className={s.comment}>{props.nameCard}</div>
            <div className={s.commentWrapper}>
                <img src={comment} width={15} alt='comment'/>
                <div>12</div>
            </div>
        </div>
    );
};

export default Card;