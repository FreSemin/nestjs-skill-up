# NestJS Skill Up

## Description

Repository for NestJS skill up lectures.

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker Desktop - [Download & Install Docker Desktop](https://hub.docker.com/repository/docker/fresemin/music-service-db/general)

## Set up Environment variables

1. Create `.env` file in the root folder
2. Copy variables from `.env.example`
3. Set up your values for variables.

### Run (Development mode)

1. From the root folder run command:

- For Windows:

```
  npm run docker:up_win
```

- For Linux

```
  npm run docker:up
```

2. From the root run command:

```
npm run start:dev
```

3. Run `TypeOrm` migrations:

```
  npm run migration:run
```
