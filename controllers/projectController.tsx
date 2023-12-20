// Пример функции joinProject, которая будет добавлять пользователя к проекту в базе данных

// Импорт необходимых модулей для работы с базой данных
import { Pool } from 'pg';

// Функция для присоединения пользователя к проекту по его идентификатору (projectId)
async function joinProject(projectId: number, userId: number): Promise<void> {
  // Создание экземпляра Pool для работы с базой данных (необходимые параметры должны быть указаны)
  const pool = new Pool({
    user: 'ZafMIg',
    host: 'http://localhost:3000',
    database: 'postgres',
    password: '6541',
    port: 5432, // Ваш порт базы данных
  });

  try {
    // Открытие соединения с базой данных
    const client = await pool.connect();

    // Запрос к базе данных для добавления пользователя к проекту
    await client.query('INSERT INTO project_users (project_id, user_id) VALUES ($1, $2)', [projectId, userId]);

    // Закрытие соединения с базой данных
    client.release();
    
    // Если всё прошло успешно, выводим сообщение
    console.log(`Пользователь с ID ${userId} присоединился к проекту с ID ${projectId}`);
  } catch (error) {
    // Обработка ошибки, если что-то пошло не так
    console.error('Ошибка при добавлении пользователя к проекту:', error);
  } finally {
  
    await pool.end();
  }
}

// Пример использования функции joinProject
// Предположим, что у вас есть переменные projectId и userId
const projectId = 1; // Идентификатор проекта
const userId = 5; // Идентификатор пользователя
joinProject(projectId, userId); // Вызов функции для добавления пользователя к проекту
