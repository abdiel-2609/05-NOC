# NOC Project

The purpose of the project is create tasks implemented by the Clean Architecture with TypeScript.

## How to execute
### 1. .env file
Copy the `.env.template` file and renamed it as `.env`, and add your own configurations:
```
PORT=3000

MAILER_SERVICE=
MAILER_EMAIL=
MAILER_SECRET_KEY=

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=
```
### 2. Install the dependecies
```
npm install
```
### 3. Execute docker container
Execute the next command on the terminal to get the necessary images and start running it.
```
docker compose up -d
```

### 4. Execute the dev command if still in develop
```
npm run dev
```