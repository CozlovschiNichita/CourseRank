# Используем Node 20
FROM node:20-alpine

WORKDIR /opt/app

# Копируем зависимости
COPY package.json package-lock.json ./

# Устанавливаем ВСЕ зависимости (dev + prod)
RUN npm install

# Копируем код
COPY . .

# Ставим prod env только для сборки
ENV NODE_ENV=production

# Сборка Next.js
RUN npm run build

# Убираем devDependencies после сборки
RUN npm prune --production

# Порт
EXPOSE 3000

# Запуск
CMD ["npm", "start"]
