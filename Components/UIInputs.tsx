import React, { useState, useEffect } from "react";
import classes from "./style.components/UIInput.module.scss"
interface IUIInput {
  text: string;
  type: "name" | "discription" | "skills" | "login" | "password";
  value: string;
  setValue: (e: React.FormEvent<HTMLInputElement>) => void;
}

const UIInput = ({ text, type, value, setValue }: IUIInput) => {
  const [error, setError] = useState<string>("");

  const validate = () => {
    if (type === "discription") {
      // 1. Не допустимые символы
      // 2. Пустое поле
      // 3. Ограничение длины
      if (value.length < 6) {
        setError(`Введите еще ${6 - value.length} символов`);
      } 
    } else if (type === "name") {
      if (value.length < 1) {
        setError(`Введите еще ${1 - value.length} символов`);
      } 
    }else if (type === "skills") {
        if (value.length < 1) {
          setError(`Введите еще ${1 - value.length} символов`);
        } 
      }else if (type === "login") {
        if (value.length < 5) {
          setError(`Введите еще ${1 - value.length} символов`);
        } 
      }else if (type === "password") {
        if (value.length < 8) {
          setError(`Введите еще ${1 - value.length} символов`);
        } 
      }
  };
  useEffect(() => {
    validate();
  }, [value]);
  return (
    <div className={classes["UIInput"]}>
      <input
        required
        className={
          error
            ? classes["UIInput__input"] + " " + classes["error"]
            : classes["UIInput__input"]
        }
        minLength={type === "name" ? 12 : type === "discription" ? 6 : 0}
        placeholder={text}
        value={value}
        onChange={setValue}
      />
      
    </div>
  );
};

export default UIInput;