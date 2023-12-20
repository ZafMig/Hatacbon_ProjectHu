import router from 'next/router';
import clasess from '../Styles/components/card.module.scss';
import UIButton from './UIButton';
import { useNavigate } from 'react-router-dom';

interface ICard {
    name: string;
    discription: string;
    skills: string;
    skills1: string;
    skills2: string;
}

const Card = ({name, discription, skills,skills1,skills2}: ICard) => {


    return(
        <div className={clasess['Card']}>
            <h1>{name}</h1>
            <p className={clasess['Card__description']}>{discription}</p>
            <div className={clasess['Card__Skills']}>
            <h2>Навыки</h2>
            <ul className={clasess['Card__Skills-list']}>
                <li>{skills}</li>
                <li>{skills1}</li>
                <li>{skills2}</li>
            </ul>
            </div>
            <div className={clasess['Card__button']}>
                <UIButton onClick={() => router.push("/project")} type='number' children='Подробнее'/>
                </div>
        </div>
    )
}
export default Card;