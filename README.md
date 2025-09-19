# MyTop - проект на Next.js

Это проект на [Next.js](https://nextjs.org), созданный с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
Используются **TypeScript**, **TailwindCSS**, **Framer Motion** и кастомные React-компоненты.

## Особенности

- Статическая генерация и SSR с `getStaticProps` и `getStaticPaths`
- API-запросы через `axios`
- Динамические страницы на основе категорий и алиасов
- Повторно используемые компоненты: Buttons, Inputs, Tags, Rating, Advantages и др.
- Адаптивная верстка с Sidebar, Header и Footer
- SVG иконки через `@svgr/webpack`
- Глобальное состояние через React Context
- TailwindCSS для стилизации

## Начало разработки

1. Установите зависимости:

    ```bash
    npm install
    # или
    yarn
    # или
    pnpm install
    ```

2. Запустите сервер разработки:

    ```bash
    npm run dev
    # или
    yarn dev
    # или
    pnpm dev
    ```

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

4. Создайте файл `.env` в корне проекта и укажите домен вашего API, если его нет:

    ```bash
    NEXT_PUBLIC_DOMAIN=https://courses-top.ru
    ```

## Структура проекта

- `pages/` — страницы Next.js, динамические маршруты `[type]/[alias].tsx`
- `components/` — повторно используемые React-компоненты
- `layout/` — Header, Sidebar, Footer, Layout wrapper
- `interfaces/` — TypeScript-интерфейсы для данных API
- `helpers/` — утилиты и URL API
- `styles/` — глобальные стили и TailwindCSS

## Сборка и запуск продакшн

1. Сборка проекта:

    ```bash
    npm run build
    # или
    yarn build
    # или
    pnpm build
    ```

2. Запуск продакшн-сервера:

    ```bash
    npm start
    # или
    yarn start
    # или
    pnpm start
    ```

## Запуск через Docker

1. Убедитесь, что открыт Docker Desktop.

2. Выполните команду:

    ```bash
    docker-compose up --build
    ```

Теперь приложение будет доступно на http://localhost:3000.
Использование docker-compose гарантирует одинаковую среду на всех компьютерах и упрощает запуск.

## Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel для деплоя Next.js](https://vercel.com)
- [Docker](https://www.docker.com)