# Next Level Week 2.0
Profy - Plataforma para professores e alunos

# Aula 1 - web
```shell
$ yarn create react-app web --template typescript
$ yarn add react-router-dom
$ yarn add @types/react-router-dom -D
```

# Aula 2 - api
```shell
$ mkdir api && cd api && yarn init -y
$ mkdir src && cd src && touch server.ts
$ yarn add ts-node-dev typescript @types/express -D
$ yarn tsc --init
$ yarn add sqlite3 knex 
$ yarn add jest @types/jest ts-jest supertest @types/supertest -D
$ yarn test
$ yarn migrate
$ yarn start
$ yarn migrate:rollback
```

Check `./test/classes.http` and `./test/class.controller.ts` for a brief overview of the implemented functionality.