import React, { ReactNode, useState } from 'react';
import classes from "../Styles/components/modal.module.scss"
import { TfiClose } from "react-icons/tfi";
import UIInput from "./UIInputs";
import UIButton from './UIButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Обратите внимание на это свойство
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [name, setName] = useState("")
    const [discription, setDiscription] = useState("")
    const [skills, setSkills] = useState("")
  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes["modal-overlay"]}>
      <div className={classes["modal"]}>
        <TfiClose className={classes["modal-close"]} onClick={onClose} />
        <div className={classes["modal-content"]}>
            <h2>Предложить проект</h2>
            <UIInput
            text={"Название"}
            value={name}
            setValue={(e) => setName(e.currentTarget.value)}
            type={"name"}/>
            <UIInput
            text={"Описание"}
            value={discription}
            setValue={(e) => setDiscription(e.currentTarget.value)}
            type={"discription"}/>
            <UIInput
            text={"Навыки"}
            value={skills}
            setValue={(e) => setSkills(e.currentTarget.value)}
            type={"skills"}/>
            <div className={classes["Card__button"]}>
            <UIButton type='number' children="Предложить"/>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Modal;