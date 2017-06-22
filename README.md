# node-app-boilerplate
Node App boilerplate
```js
- 1. (feature.js + feature.spec.js)

- .env (dot env notation for configuration)
- bin (bash scripts etc...)
  - script.sh
  - start.sh
  - stop.sh

- docs (documents folder)

- lib
  - third party libraries

- core (core functional)
  - application (main app class)
  - container (dependency injection)

- controllers
  - controller[1..N]

- domain (our domain data and logic)
  - models
  - services (functions, ex: FSM)

- infrastructure
  - logger
  - database (postgresql, mysql, mongo)
    - migrations (sql)
    - seeds (fake generators or sql)
    - models
    - mappers (data mapper for domain model)

  - queue
    - mappers (data mapper for domain model)

- interfaces
  - console (commands)
  - https(rest)
    - middlewares (middleware definition)
    - routes (routes definition)

  - web-socket
    - middlewares
    - commands

  - rpc (?)
  - rabbit-mq (?)
- logs (only for development i think)
- static (folder for static content if needed)

```
