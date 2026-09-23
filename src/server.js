// src/server.js
import express from 'express';

const app = express();
const PORT = 3000;

// // Перший маршрут
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello world!' });
// });

// // GET-запит до маршруту "/health"
// app.get('/health', (req, res) => {
//   res.status(200).json({
//     status: 'Ok!',
//   });
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Список усіх користувачів
// app.get('/users', (req, res) => {
//   res.status(200).json([{ id: 1, name: 'Alice' }]);
// });

// // Конкретний користувач за id
// app.get('/users/:userId', (req, res) => {
//   const { userId } = req.params;
//   res.status(200).json({ id: userId, name: 'Jacob' });
// });

// Логування часу
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

// Маршрут
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

// Маршрут для тестування middleware помилки
app.get('/test-error', (req, res) => {
  // Штучна помилка для прикладу
  throw new Error('Something went wrong');
});

// Middleware 404 (після всіх маршрутів)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Middleware для обробки помилок
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
