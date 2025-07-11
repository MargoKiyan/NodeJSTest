const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Сервер успішно запущено на порту ${PORT}`);
  console.log(`Відкрийте в браузері http://localhost:${PORT}`);
});