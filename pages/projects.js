
import React, { useState, useEffect } from "react";
import classes from "./style.pages/studentProjects.module.scss";
import Header from "../Components/Header";
import { joinProject, leaveProject } from "../services/projectService";

const Projects = () => {
  const [isInProject, setIsInProject] = useState(false);
  const [invitedPeople, setInvitedPeople] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  useEffect(() => {
    // Логика для проверки, находится ли пользователь в проекте
    // Устанавливаем значение в зависимости от результата
    // Например, setIsInProject(true) если пользователь находится в проекте
  }, []); // Зависимость может быть изменена в зависимости от вашей логики

  const handleJoinProject = async () => {
    try {
      const result = await joinProject(); // Вызов функции для присоединения к проекту
      console.log('Успешно присоединились к проекту:', result);
      // Обработка результата, например, обновление состояния или переход на другую страницу
      setIsInProject(true);
    } catch (error) {
      console.error('Ошибка при присоединении к проекту:', error);
      // Обработка ошибки, например, вывод сообщения пользователю
    }
  };

  const handleLeaveProject = async () => {
    try {
      const result = await leaveProject(); // Вызов функции для покидания проекта
      console.log('Успешно покинули проект:', result);
      // Обработка результата, например, обновление состояния или переход на другую страницу
      setIsInProject(false);
    } catch (error) {
      console.error('Ошибка при покидании проекта:', error);
      // Обработка ошибки, например, вывод сообщения пользователю
    }
  };

  const handleInvite = (name) => {
    setInvitedPeople([...invitedPeople, name]);
  };

  const handleAddProject = () => {
    const newProject = {
      name: newProjectName,
      description: newProjectDescription,
    };
    setProjects([...projects, newProject]);
    setNewProjectName("");
    setNewProjectDescription("");
  };

  const handleEditProject = (index, newName, newDescription) => {
    const editedProject = {
      name: newName,
      description: newDescription,
    };
    const updatedProjects = [...projects];
    updatedProjects[index] = editedProject;
    setProjects(updatedProjects);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <>
      <Header />

      <div className={classes["Main"]}>
        <div className={classes["Main__Projects"]}>
          <h1 className={classes["Main__Projects-text"]}>Доступные проекты</h1>

          <div className={classes["Main__Projects-blocks"]}>
            <p>имя проекта</p>
            <p>описание проекта</p>
            {isInProject ? (
              <button onClick={handleLeaveProject}>Покинуть проект</button>
            ) : (
              <button onClick={handleJoinProject}>Присоединиться к проекту</button>
            )}
          </div>

<div className={classes["Main__Block-text"]}>
            <h1>Действующие проекты</h1>
            <div className={classes["Main__Block-works"]}>
              {projects.map((project, index) => (
                <div className={classes["MainBlock-workswork"]} key={index}>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <div className={classes["MainBlock-workswork-button"]}>
                    <button onClick={() => setActiveProject(project)}>Подробнее</button>
                    <button onClick={() => handleEditProject(index, "Новое имя", "Новое описание")}>
                      Редактировать
                    </button>
                    <button onClick={() => handleDeleteProject(index)}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={classes["MainBlockinvite-section"]}>
            <h1 className={classes["MainBlockinvite-section-text"]}>
              Пригласить другого человека в проект
            </h1>
            <input type="text" placeholder="Имя пользователя" />
            <button onClick={() => handleInvite("Имя пользователя")}>Пригласить</button>
            <div className={classes["MainBlockinvited-people"]}>
              {invitedPeople.map((person, index) => (
                <p key={index}>{person}</p>
              ))}
            </div>
          </div>

          <div className={classes["MainBlockadd-project"]}>
            <h1 className={classes["MainBlockadd-project-text"]}>Добавить проект</h1>
            <input
              type="text"
              placeholder="Название проекта"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <textarea
              placeholder="Описание проекта"
              value={newProjectDescription}
              onChange={(e) => setNewProjectDescription(e.target.value)}
            ></textarea>
            <button onClick={handleAddProject}>Добавить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;