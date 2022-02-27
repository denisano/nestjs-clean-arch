## Description

Boilerplate to build Rest API servers having Clean Architecture with NestJS and ORM. 

### Current status

The approach is using in a few real projects.

However the boilerplate is not completed yet:

- Domain, application and infrastructure layers are still meshed now. 
- Layered tests are not implemented yet.
- Layered error handling are not implemented yet.
- Docs are not completed yet.


## Prerequisites

To quickly and simple run the boilerplate you will need:
  
  - NodeJS
  - NestJS
  - MySQL  
  - MikroORM


## Getting started

### 1. Create a MySql database

```sql
create database nestjs_clean_arch character set utf8;
```

### 2. Create and edit configuration file

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

## Principles

To understand the principles and structure just see the famous Uncle Bob's Clean Architecture diagram:

![Uncle's Bob Clean Architecture diagram](clean-architecture-diagram.jpeg "Uncle's Bob Clean Architecture diagram")

1. Use NestJS modules to decouple whole application functionality by features. Internal module structure follow the Clean Architecture principles. Use the main Clean Architecture diagram as orientir to build internal module architecture and define layers and relations between them. 

2. Folder structure corresponds layers from the main Clean Architecture diagram. 

3. Layered tests
   
4. Layered error handling

## Why

I like principles of Clean Architecture. And I like NestJS because of it modular architecture, quality, support and community, rich functionality and documentation. 

During development a startup project with NestJS I tried to follow Clean Architecture principles and terminology. As result it has given yet another way to build application with NestJS. 

It is working fine for me and I decide to  build ready to use boilerplate.

The approach provides the following characteristics for you application:

  1. Modular and layered simple clean architecture
  2. Data layer (ORM/DB/Query Builder) agnostic 
  3. All other 3rd party services agnostic
  4. Platform agnostic (in theory)

## Roadmap

### Version 2:

- Add some real-world functional to demonstrate the princeples
- Add layered tests
- Add layered error handling
- Add configuration management
- Improve docs: 
  - Add diagrams to demonostrate data and execution flows
  - Add folders structure description

### Version 3:

- Demonstrate ability to use different ORMs (QB and even DBs) and switch them 
- Add ability to run in Docker container
- Add some minimal cli to generate common code
- Add more examples of typical applications and situations
