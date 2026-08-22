---
title: Быстрый старт
description: Быстрый старт
---

Для выполнения первого успешного запроса пройдите 3 простых шага:

### Шаг 1. Получите токен доступа
Зарегистрируйтесь в личном кабинете разработчика и получите токен доступа.

### Шаг 2. Создайте пользователя (POST)
Выполните `curl`-команду в терминале, заменив `YOUR_TOKEN` на ваш ключ:
---
title: Quickstart
---

Для выполнения первого успешного запроса к API пройдите следующие шаги:

### Шаг 1. Получите авторизационный токен
Зарегистрируйте приложение в личном кабинете и скопируйте сгенерированный ключ доступа.

### Шаг 2. Создайте пользователя (POST)
Выполните cURL-запрос в терминале, заменив `<Token>` на ваш реальный ключ:

curl --request POST \
  --url https://api.documentat.io/api/prod/users \
  --header 'Content-Type: application/json' \
  --header 'Token: <Token>' \
  --data '{ "username": "ivan_ivanov", "email": "ivan@example.com", "firstName": "ivan", "lastName": "ivanov", "address": { "country": "Russia", "city": "Moscow", "street": "Pushkino street", "house": "32" }, "age": "21", "isEmployee": true, "accountStatus": "active" }'

### Шаг 3. Убедитесь в успешном ответе
При правильных данных сервер вернет статус `201 Created` и подтвердит создание новой учетной записи.

