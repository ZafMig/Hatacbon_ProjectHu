import React, { ReactNode, useEffect, useState } from 'react';
import classes from "../Styles/components/redact.module.scss"
import { TfiClose } from "react-icons/tfi";
import UIInput from "./UIInputs";
import UIButton from "./UIButton";
import axios from 'axios';
import { error } from 'console';
import { useRouter } from 'next/router';

interface RedactProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: {
    name: string;
    description: string;
    skills: string;
  };
  children?: ReactNode;
}

const Redact: React.FC<RedactProps> = ({ isOpen, onClose, initialValues, children }) => {
  const [name, setName] = useState(initialValues?.name || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [error, setError] = useState<string | null>(null);
  const [skills, setSkills] = useState(initialValues?.skills || "");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    // Обновите значения при изменении initialValues
    setName(initialValues?.name || "");
    setDescription(initialValues?.description || "");
    setSkills(initialValues?.skills || "");
  }, [initialValues]);
  if (!isOpen) {
    return null;
  }
  const router = useRouter();
    const { id } = router.query;

  const RedactProject = () => {
    setLoading(true);
    setError(null);
    
    const projectData = {
      p_name: name,
      description: description,
      skills: skills
    }

    axios
    .put(`http://localhost:3000/projects/${id}`, projectData)
    .then((response) => {
      setSuccessMessage('Проект успешно изменен!');
      setName("");
      setDescription("");
      setSkills("");
    })
    .catch((error) => {
      console.error('Ошибка при обновлении проекта', error);
      setError('Ошибка при обновлении проекта. Пожалуйста, попробуйте еще раз.');
    })
    .finally(() => {
      setLoading(false);
    });
};

  return (
    <div className={classes["modal-overlay"]}>
      <div className={classes["modal"]}>
        <TfiClose className={classes["modal-close"]} onClick={() => {onClose(); setSuccessMessage(null);}} />
        {successMessage ? (
          <div className={classes["modal-contentmess"]}>
            <div className={classes["success-message"]}>{successMessage}</div>
            </div>
          ) : (
            <>
            <div className={classes["modal-content"]}>
              <h2>Изменить проект</h2>
              <UIInput
            text={"Название"}
            value={name}
            setValue={(e) => setName(e.currentTarget.value)}
            type={"name"}/>
            <UIInput
            text={"Описание"}
            value={description}
            setValue={(e) => setDescription(e.currentTarget.value)}
            type={"discription"}/>
            <UIInput
            text={"Навыки"}
            value={skills}
            setValue={(e) => setSkills(e.currentTarget.value)}
            type={"skills"}/>
            <div className={classes["Card__button"]}>
            <UIButton onClick={() => RedactProject()} type='number' children="Изменить"/>
            </div>
            </div>
            </>
          )}
            </div>
      </div>
  );
};

export default Redact;
