import React, { useState } from "react";
import classes from "./style.pages/studentProjects.module.scss";
import Header from "../Components/Header";

const Projects = () => {
  const [invitedPeople, setInvitedPeople] = useState([]);

  const handleInvite = (name) => {
    setInvitedPeople([...invitedPeople, name]);
  };

  return (
    <>
      <Header />

      <div className={classes["Main"]}>
        <div className={classes["Main__Block"]}>
          <div className={classes["Main__Block-text"]}>
            <h1>Действующие проекты</h1>
            <div className={classes["Main__Block-works"]}>
              <div className={classes["MainBlock-workswork"]}>
                <p>Имя проекта</p>
                <p>Описание проекта</p>
                <div className={classes["MainBlock-workswork-button"]}>
                  <p>Подробнее</p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes["MainBlocksucces"]}>
            <h1 className={classes["MainBlocksucces-text"]}>
              Выполненные работы
            </h1>

            <div className={classes["MainBlocksucces-works"]}>
              <div className={classes["MainBlocksucces-works-complete"]}>
                <p className={classes["MainBlocksucces-works-complete-text"]}>
                  Имя проекта
                </p>
                <p className={classes["MainBlocksucces-works-complete-textt"]}>
                  Подробнее
                </p>
              </div>
            </div>
            <div className={classes["MainBlocksucces-works"]}>
              <div className={classes["MainBlocksucces-works-complete"]}>
                <p className={classes["MainBlocksucces-works-complete-text"]}>
                  Имя проекта
                </p>
                <p className={classes["MainBlocksucces-works-complete-textt"]}>
                  Подробнее
                </p>
              </div>
            </div>
            <div className={classes["MainBlocksucces-works"]}>
              <div className={classes["MainBlocksucces-works-complete"]}>
                <p className={classes["MainBlocksucces-works-complete-text"]}>
                  Имя проекта
                </p>
                <p className={classes["MainBlocksucces-works-complete-textt"]}>
                  Подробнее
                </p>
              </div>
            </div>
          </div>

          <div className={classes["MainBlockinvite-section"]}>
            <h1 className={classes["MainBlockinvite-section-text"]}>
              Пригласить другого человека в проект
            </h1>
            <input type="text" placeholder="Имя пользователя" />
            <button onClick={() => handleInvite("Имя пользователя")}>
              Пригласить
            </button>
            <div className={classes["MainBlockinvited-people"]}>
              {invitedPeople.map((person, index) => (
                <p key={index}>{person}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;