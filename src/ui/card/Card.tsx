import React from 'react';
import s from './styles.module.css'
import comment from './comment.svg'
const Card = () => {
    return (
        <div className={s.card}>
          <div className={s.comment}>Card title</div>
            <div className={s.commentWrapper}>
                <img src={comment} width={15} alt={'comment'}/>
                <div>12</div>
            </div>
        </div>
    );
};

export default Card;