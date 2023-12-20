

export const joinProject = async () => {

  
  return new Promise((resolve) => {
    setTimeout(() => {
  
      const project = {
        id: 123,
        name: 'Имя проекта',
        
      };
      resolve(project); // Возвращаем присоединенный проект
    }, 2000); 
  });
};
