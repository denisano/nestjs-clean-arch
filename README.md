## Description

Boilerplate to build RestAPI servers with clean but simple architecture.

Simplified Clean Archetecture implementation with NestJS and MikroORM. 

Just for fun and experiments :)

### Current status

It is not completed yet. Domain, application and infrastructure layers are still meshed now. 

## Prerequisites

MySQL, NodeJS, NestJS, MikroORM


## Getting started

### 1. Create a MySql database

```sql
create database nestjs_clean_arch character set utf8;
```

### 2. Create configuration file

```sh
cp src/mikro-orm.config.ts.example src/mikro-orm.config.ts
```

### 3. Install packages

```sh
yarn install
```

### 4. Run

```sh
yarn start
```

### 5. Run Mikro-ORM migrations

```sh
npx mikro-orm migration:create --initial
npx mikro-orm migrations:up
```

### 6. View

Open url `http://localhost:3000/docs` in your browser.