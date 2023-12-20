// Код для создания страницы CreateProjectPage

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateProjectPage = () => {
  const [projectData, setProjectData] = useState({
    projectName: '',
    projectDescription: '',
    toolsUsed: '',
  });

  const router = useRouter();

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Выполните запрос на сервер для создания проекта, используя projectData

    // После успешного создания проекта, перенаправьте пользователя на страницу StudentProject
    router.push('/studentProjects');
  };

  return (
    <div>
      <h1>Создать новый проект</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя проекта:
          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Описание проекта:
          <textarea
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <label>
          Используемые инструменты:
          <input
            type="text"
            name="toolsUsed"
            value={projectData.toolsUsed}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Создать проект</button>
      </form>
    </div>
  );
};

export default CreateProjectPage;
