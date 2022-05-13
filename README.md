# Thunder Link (v1.5.0) -  A Real-time Chat App

This is the Thunder Link UI APP. It uses the Sockets API APP.

Link to the project in production: [thunder-link.herokuapp.com](http://thunder-link.herokuapp.com)

## Features

- VueJS 3 Composition API
- TypeScript
- UnoCSS (TailwindCSS/WindiCSS preset)
- ViteJS with ESbuild ([See Vitesse tools](https://github.com/antfu/vitesse))
- Vitest (Unit testing)
- I18n (Intl)
- Socket.IO
- Docker environments
- CI/CD with Docker and GitHub Actions
- Continuous Deployment to Heroku
- ENV config
- Use of ESlint and Husky (Git hooks)

## Config
You have the ENV files and the Docker ENV variables there to be changed in any moment to change the config project data to access the services, etc.
## Installation and run the project
Clone the repo and type:
```
npm install
```
### Local environment
It creates a local docker image for the UI and takes from the registery the API APP, MongoDB (local) and SonarQube.

**You can change the docker compose file to set the local environment to DEV or PROD stages**
```
npm run docker:local
```
### Local environment (just the UI)
It creates a local docker image for the UI.

**You can change the docker compose file to set the local environment to DEV or PROD stages**
```
npm run docker:local:ui
```
### Local environment without API
It creates a local docker image for the UI and takes from the registery MongoDB (local) and SonarQube.

**You can change the docker compose file to set the local environment to DEV or PROD stages**
```
npm run docker:local:not-api
```
### Local environment (just the services)
It takes from the registery the services (MongoDB (local) and SonarQube).

```
npm run docker:services
```
### Production environment
It takes from the registery the UI APP, the API APP, MongoDB (local) and SonarQube.

```
npm run docker:prod
```
***If the runtime fails, try to run the following command:**
```
npm run build
```
## Author
Linkedin: [linkedin.com/in/ivan-torres-garcia](linkedin.com/in/ivan-torres-garcia)